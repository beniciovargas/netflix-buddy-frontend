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
            <div className="container">
                <div id="flow">
                    <span className="flow-1"></span>
                    <span className="flow-2"></span>
                    <span className="flow-3"></span>
                </div>    
                <div className="section">
                    <div class="row columns is-multiline">
                        <div className="column is-one-third">
                            <div className="card large">
                                <div className="card-image">
                                    <figure class="image">
                                        <img src="http://dummyimage.com/450x250/"  alt="Image"/>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div class="media-left">
                                            <figure class="image is-96x96">
                                                <img src="http://www.placecage.com/c/200/300" alt="Image"/>
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4 no-padding">{this.props.foundUser.username}</p>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <a className="button is-primary" onClick={this.addFriend}>View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        )
    }
}
