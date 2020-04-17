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
       
        if (localStorage.jwtToken) {
          setAuthHeader(localStorage.jwtToken);
          const decoded = jwt_decode(localStorage.getItem('jwtToken'));
          this.setState({
            user: decoded.username,
            userId: decoded._id
          })
        }
          
        axios.get(`http://localhost:4000/api/v1/users/${this.state.userId}`)
        .then((res) => {
          console.log(res)
          this.setState({
            nextUpShows: res.data[0].nextUp,
            currentlyWatchingShows: res.data[0].currentlyWatching,
            faveShows: res.data[0].faves,
            friends: res.data[0].friends
          })
        })
        .catch((err)=> {console.log(err)})
      }

    render(){
      
        let nextUpShows = this.state.nextUpShows.map((show)=>{
          if (this.state.nextUpShows.length>0){
            return (<NextUp show= {show}
                            key={show._id} />)}
        })
        let currentlyWatchingShows = this.state.currentlyWatchingShows.map((show)=>{
          if (this.state.currentlyWatchingShows.length>0){
            return (<CurrentlyWatching show= {show}
                            key={show._id} />)}
        })
        let faveShows = this.state.faveShows.map((show)=>{
          if (this.state.faveShows.length>0){
            return (<Faves show= {show}
                            key={show._id} />)}
        })
        let friends = this.state.friends.map((friend)=>{
          if (this.state.friends.length>0){
            return (<Friends friend= {friend}
                            key={friend._id} />)}
        })
        return(
            <div className = "profile-header">
                <div className = "profile-header">
                  <h1 className = "title">Welcome {this.state.user}!! </h1>
                </div>
                    {nextUpShows}
                    {currentlyWatchingShows}
                    {faveShows}
                    {friends}
            </div>

        );
    }

}