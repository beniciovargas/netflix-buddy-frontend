import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import CurrentlyWatching from '../CurrentlyWatching/CurrentlyWatching';
import Recommendations from '../Recommendations/Recommendations';
import './Profile.css'


export default class Profile extends React.Component{
    state = {
        user: '',
        id: ''
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
            id: decoded._id
          })
        }
      }

    render(){

        return(
            <div className = "profile-header">
                <div >
                    <h1 className = "title">Welcome {this.state.user}!! </h1>
                    <h4 className = "subtitle"> below is what you are currently watching and your recommendations!</h4>
                </div>
                    <CurrentlyWatching />
                    <Recommendations />
              
            </div>

        )
    }

}