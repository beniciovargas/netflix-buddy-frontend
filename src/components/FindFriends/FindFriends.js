import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import FriendsResults from '../FriendsResults/FriendsResults';
import './FindFriends.css'


export default class FindFriends extends React.Component{
    state = {
        response: [],
    }    

    componentDidMount(){
         
         if (localStorage.jwtToken) {
            setAuthHeader(localStorage.jwtToken);
            const decoded = jwt_decode(localStorage.getItem('jwtToken'));
          }
        axios.get(`http://localhost:4000/api/v1/users`)
        .then(res => {
            this.setState({
                response: res.data
            });
            console.log(this.state.response)
        });
    }
    

    render(){
            let foundUsers = this.state.response.map((foundUser)=> {
                if (this.state.response){
                    return(<FriendsResults
                            foundUser = {foundUser}
                            key = {foundUser.id}
                        />
                    )
                }
            })
        
      
        return(
            <div className="container">
                <div id="flow">
                    <span className="flow-1"></span>
                    <span className="flow-2"></span>
                    <span className="flow-3"></span>
                </div>    
                <div className="section">
                    <div class="row columns is-multiline">
                        {foundUsers}
                    </div>
                </div>
            </div>
        )            
    }
}