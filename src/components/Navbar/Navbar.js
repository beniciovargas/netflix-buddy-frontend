  
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// if the user is logged in, welcome them and show a logout button
// if not, show them the register and login buttons
function Navbar(props){
  return (
    <div id="navbar">
      <nav className = "navbar is-black" role="navigation" aria-label="main-navigation">
        <div className="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">

            {
                (props.user) 
                ? 
              <div class="navbar-end">
                <a class="navbar-item">
                    <Link to='/search'>Search</Link>
                </a>
                <a class="navbar-item">
                    <a className ="button is-light" onClick= {props.logout}>Logout</a>
                </a>
                
              </div>
                : 
              <div class="navbar-end">
                <a class="navbar-item">
                    <Link to='/register'>Register</Link>
                </a>
                <a class="navbar-item">
                    <Link to='/login'>Login</Link>
                </a>
              </div>
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;