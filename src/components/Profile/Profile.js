import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import CurrentlyWatching from '../CurrentlyWatching/CurrentlyWatching';
import Faves from '../Faves/Faves';
import NextUp from '../NextUp/NextUp';
import Friends from '../Friends/Friends';
import './Profile.css'
import axios from 'axios';


export default class Profile extends React.Component{
  
  state = {
      user: '',
      userId: '',
      nextUpShows:[],
      currentlyWatchingShows: [],
      faveShows: [],
      friends:[]
    }
  
  componentDidMount() {
    let id = this.props.location.pathname.substring(9)

    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.username,
        userId: decoded._id
      })
    }
    axios.get(`http://localhost:4000/api/v1/users/${id}`)
    .then((res)=>{
      console.log(res.data)
        this.setState({
          nextUpShows:res.data.nextUp,
          currentlyWatchingShows:res.data.currentlyWatching,
          faveShows: res.data.faves,
          friends: res.data.friends
        })
    })
    .catch((err) => {console.log(err)})
  }
    
  render(){
    let currentlyWatchingShows = this.state.currentlyWatchingShows.map((show)=>{
      return (
        <CurrentlyWatching show={show} key={show.title} />
      )
    })

    let nextUpShows = this.state.nextUpShows.map((show)=>{
      return (
        <NextUp show={show} key={show.title} />
      )
    })

    let faveShows = this.state.faveShows.map((show)=>{
      return (
        <Faves show={show} key={show.title} />
      )
    })

    let friends = this.state.friends.map((friend)=>{
      return (
        <Friends friend={friend} key={friend.username} />
      )
    })
    


      return(
          <div className = "profile-header">
              <div className = "profile-header">
                <h1 className = "title">Welcome {this.state.user}</h1>
              </div>
              {faveShows} 
              {nextUpShows}    
              {currentlyWatchingShows}  
              {friends}
          </div>

      );
  }

}