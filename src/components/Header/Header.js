  
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

// if the user is logged in, welcome them and show a logout button
// if not, show them the register and login buttons
function Header(props){
  return (
    <div id="header">
      <h1>Netflix Buddy</h1>
      {
        (props.user) 
        ? <div className="login">
            <button>Welcome, {props.user}</button>
            <button onClick= {props.logout}>Logout</button>
          </div>
        : <div className="login">
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
            <Link to='/search'>Search</Link>
          </div>
      }
    </div>
  )
}

export default Header;