import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './FriendsResult.css';

export default class Friends extends React.Component{
    state={
        user:'',
        userId: '',
        redirect: false,
    }

    componentDidMount(){
         
        if (localStorage.jwtToken) {
           setAuthHeader(localStorage.jwtToken);
           const decoded = jwt_decode(localStorage.getItem('jwtToken'));
           this.setState({
               user: decoded.username,
               userId: decoded._id
             })
         }
    }
    addFriend=(event)=>{
        console.log('adding friend =)')
        axios.put(`http://localhost:4000/api/v1/users/${this.state.userId}`,{
            friends: this.props.foundUser._id
        })
        .then((res)=>{console.log(res)})
        .catch((err)=> {console.log(err)})
        this.setState({
            redirect: true
        })
        }

    render(){
        if (this.state.redirect){
            return <Redirect to={`/profile/${this.state.userId}`}/>   
        }

        return(
            
            <div className="column is-one-third">
                <div className="card">
                    <div className="card-image">
                        <figure class="header-image">
                            <img src="https://placeimg.com/420/200/nature" alt="Image"/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div class="media-left">
                                <figure class="image is-128x128">
                                    <img className="profile-image is-rounded" src="http://www.placecage.com/c/200/200" alt="Image"/>
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-3 is-uppercase has-text-centered">{this.props.foundUser.username}</p>
                                <a className="button is-uppercase is-pulled-right" onClick={this.addFriend}>Add Friend!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}
