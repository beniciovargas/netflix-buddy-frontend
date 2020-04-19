import React from 'react';
import {Redirect} from "react-router-dom"
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Navbar from '../../layout/Navbar/Navbar';
import Routes from '../../config/Routes';
import UserApi from '../../api/UserApi';
import './App.css';

export default class App extends React.Component {
  state = {
    user: '',
    id: '',
    redirect: false
  }

  componentDidMount() {
   
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
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
        const token = res.data.token;
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
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
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthHeader(token);
      const decoded = jwt_decode(token);
      this.setState({
        user: decoded.username,
        id: decoded._id
      })
    }
  })
  .catch(err => console.log(err));
}

logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthHeader();
  this.setState({
    user: '',
    id: '',
    redirect: true,
  })
}


  render(){
    if(this.state.redirect){
      return <Redirect to = '/'/>
    }

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


