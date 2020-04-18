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
  
  // componentWillUpdate(prevState){
  //   if (this.state.nextUpShows !== this.prevState.nextUpShows){
  //     return true;
  //   }
  //   if (this.state.currentlyWatchingShows !== this.prevState.currentlyWatchingShows){
  //     return true;
  //   }
  //   if (this.state.faveShows !== this.prevState.faveShows){
  //     return true;
  //   }
  // }

  render(){

      return(
          <div className = "profile-header">
              <div className = "profile-header">
                <h1 className = "title">Welcome {this.state.user}</h1>
              </div>
                {this.state.currentlyWatchingShows.length>0 ? (
                  this.state.currentlyWatchingShows.map((show)=> {
                    return (<CurrentlyWatching show={show} key={show.title}/>)
                  })
                ) : (
                    <p>add a show youre currently watching!</p>
                    )
                }

                {this.state.nextUpShows.length>0 ? (
                  this.state.nextUpShows.map((show)=> {
                    return (<NextUp show={show} key={show.title}/>)
                  })
                ) : (
                    <p>add a show you want to watch next!</p>
                    )
                }  

                {this.state.faveShows.length >0 ? (
                  this.state.faveShows.map((show)=> {
                    return (<Faves show={show} key={show.title}/>)
                  })
                ) : (
                    <p>add one of your faves here!</p>
                    )
                }
                
                {this.state.friends.length>0 ? (
                  this.state.friends.map((friend)=> {
                    return (<Friends friend={friend} key={friend.username}/>)
                  })
                ) : (
                    <p>search for one of your friends</p>
                    )
                }


              {/* // {faveShows} 
              // {nextUpShows}    
              // {currentlyWatchingShows}  
              // {friends} */}
          </div>

      );
  }

}