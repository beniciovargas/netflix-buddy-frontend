import React from 'react';
import setAuthHeader from '../../utils/setAuthHeader';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import Friends from '../Friends/Friends';


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
                    return(<Friends
                            foundUser = {foundUser}
                            key = {foundUser.id}
                        />
                    )
                }
            })
        
      
        return(
            <div className = "findfriends">
                <div class="tile is-ancestor is-one-quarter">
                {foundUsers}
                </div>
            </div>
        )            
    }
}