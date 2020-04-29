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
    return(
        
      <div className="profile-container container">
          <div className ="profile-header-container container">  
            <div className="profile-box box">
              <div className = "profile-header">
          
                <div className="column is-full is-vcentered">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div class="media-left">
                                    <figure class="image is-128x128">
                                        <img className="is-rounded" src="http://www.placecage.com/c/200/200" alt="Image"/>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <h1 className = "header-title title is-1 is-uppercase">Welcome {this.state.user}!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>

          <div className="currently-watching-container">
            <div className="currently-watching box">
              <h1 className = "current-header title is-4 has-text-centered is-uppercase">currently watching</h1>
              <div className="current-results row columns">
                  {this.state.currentlyWatchingShows.length>0 ? (
                    this.state.currentlyWatchingShows.map((show)=> {
                      return (<CurrentlyWatching show={show} key={show.title}/>)
                  })
                ) : (
                      <p className="add-alert">add a show you're currently watching!</p>
                    )
                  }
              </div>
            </div>
          </div>

          <div className="next-up-container">
            <div className="next-up box">
              <h1 className = "next-up-header title is-4 has-text-centered is-uppercase">next up</h1>
              <div className="next-results row columns">
                {this.state.nextUpShows.length>0 ? (
                  this.state.nextUpShows.map((show)=> {
                    return (<NextUp show={show} key={show.title}/>)
                  })
                ) : (
                    <p className="add-alert">add a show you want to watch next!</p>
                    )
                }  
              </div>
            </div>
          </div>

          <div className="faves-container">
            <div className="faves box">
              <h1 className = "faves-header title is-4 has-text-centered is-uppercase">favorites</h1>
              <div className="faves-results row columns">
                {this.state.faveShows.length >0 ? (
                  this.state.faveShows.map((show)=> {
                    return (<Faves show={show} key={show.title}/>)
                  })
                ) : (
                    <p className="add-alert">add one of your faves here!</p>
                    )
                }
              </div> 
            </div>
          </div>

          <div className="friends-container">
            <div className="friends box">
              <h1 className = "friends-header title is-4 has-text-centered is-uppercase">friends</h1>
              <div className="friends-results row columns">
                {this.state.friends.length>0 ? (
                  this.state.friends.map((friend)=> {
                    return (<Friends friend={friend} key={friend.username}/>)
                  })
                ) : (
                    <p className="add-alert">search for one of your friends</p>
                    )
                }
              </div>
            </div>
          </div>
      </div>
    );
  }
}