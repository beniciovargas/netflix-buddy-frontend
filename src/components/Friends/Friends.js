import React from 'react';
import axios from 'axios';


export default class Friends extends React.Component {
    state = {
        friends:'',
    }


    componentDidMount() {
    
//     if (localStorage.jwtToken) {
//         setAuthHeader(localStorage.jwtToken);
//         const decoded = jwt_decode(localStorage.getItem('jwtToken'));
//         this.setState({
//             user: decoded.username,
//             userId: decoded._id
//         })
//     }
    
    axios.get(`http://localhost:4000/api/v1/users`)
    .then((res) => {
        for (let i=0; i<res.data.length; i++)
            if(res.data[i]._id === this.props.friend){
                this.setState({
                    friends: res.data[i]
                })
            }
    })
}
    render(){
        return (
            <div class="tile is-parent">
                <div className="friend"> 
                    <h1 className="title"> FRIENDS! </h1>
                    <p class="subtitle">{this.state.friends.username}</p>
                </div>
        
            </div>
        )
    }
}