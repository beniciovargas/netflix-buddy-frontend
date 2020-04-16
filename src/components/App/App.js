import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Navbar from '../../layout/Navbar/Navbar';
import Routes from '../../config/Routes';
import UserApi from '../../api/UserApi';
import './App.css';

export default class App extends React.Component {
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


register = (user) => {
  UserApi.register(user)
    .then(res => {
      if (res.status === 200) {
        // get the token from the response
        const token = res.data.token;
        // set the token to local storage
        localStorage.setItem('jwtToken', token);
        // set the auth header to the token
        setAuthHeader(token);
        // decode the token
        const decoded = jwt_decode(token);
        // set the state to the decoded user information
        this.setState({
          user: decoded.username,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(err));
}


login = (user) => {
  UserApi.login(user)
  .then(res => {
    if (res.status === 200) {
      // get the token from the response
      const token = res.data.token;
      // set the token to local storage
      localStorage.setItem('jwtToken', token);
      // set the auth header to the token
      setAuthHeader(token);
      // decode the token
      const decoded = jwt_decode(token);
      // set the state to the decoded user information
      this.setState({
        user: decoded.username,
        id: decoded._id
      })
    }
  })
  .catch(err => console.log(err));
}

logout = () => {
  // delete the token from localStorage
  localStorage.removeItem('jwtToken');
  // remove the header from being sent in requests
  // passing it no value will make its logic falsy, which will remove the header
  setAuthHeader();
  // remove the user info from state so the re-render will log them out and change the HTML header automatically
  this.setState({
    user: '',
    id: ''
  })
}


  render(){
    return (
      <div className="App">
      
            <Navbar
              logout= {this.logout}
              user = {this.state.user}
              id = {this.state.id}
            />
            <Routes 
              user={this.state.user}
              login={this.login}
              register={this.register}
              id = {this.state.id}
            />
      
      </div>
    );
  }
}


