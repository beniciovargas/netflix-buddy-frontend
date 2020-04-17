import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import CurrentlyWatching from '../CurrentlyWatching/CurrentlyWatching';
import Faves from '../Faves/Faves';
import NextUp from '../NextUp/NextUp';
import './Profile.css'
import axios from 'axios';


export default class Profile extends React.Component{
    state = {
        user: '',
        userId: '',
        nextUp:[],
        currentlyWatching: [],
        faves: [],
        friends:[]
      }
    
      componentDidMount() {
        // if there's a token in local storage
        if (localStorage.jwtToken) {
          // set the auth header to the token
          setAuthHeader(localStorage.jwtToken);
          // decode the token
          const decoded = jwt_decode(localStorage.getItem('jwtToken'));
          // set the state to the decoded token properties
          this.setState({
            user: decoded.username,
            userId: decoded._id
          })
        }
          
        axios.get(`http://localhost:4000/api/v1/users/${this.state.userId}`)
        .then((res)=>{
          this.setState({
            nextUp: res.data.nextUp,
            currentlyWatching: res.data.currentlyWatching,
            faves: res.data.faves,
            friends: res.data.friends
          })
        })
        .catch((err)=> {console.log(err)})
      }
    render(){
      // let nextUp = this.state.nextUp.map((shows) => <h1>{show}</h1>
        return(
            <div className = "profile-header column is-vcentered">
                <div className = "profile-header">
                  <h1 className = "title">Welcome {this.state.user}!! </h1>
                  
                  <h1 className = "title"> {this.state.nextUp}!! </h1>
                  <h1 className = "title"> {this.state.currentlyWatching}!! </h1>
                  <h4 className = "subtitle"> below is what you are currently watching and your recommendations!</h4>
                </div>
                    <CurrentlyWatching />
                    <NextUp />
                    <Faves />
              
            </div>

        )
    }

}