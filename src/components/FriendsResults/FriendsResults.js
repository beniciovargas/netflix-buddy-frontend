import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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
            <div class="tile is-parent">
                <article class="tile is-child box">
                    <p class="title">{this.props.foundUser.username}</p>
                    <figure class="image is-4by3">
                        {/* <img src={this.props.result.img}/> */}
                    </figure>
                    <a className="button is-primary" onClick={this.addFriend}>View Details</a>
                </article>
            </div>
        )
    }
}
