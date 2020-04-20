  
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.png'

// if the user is logged in, welcome them and show a logout button
// if not, show them the register and login buttons
function Navbar(props){
  return (

    <div>
      {
        (props.user) 
        ? 
        <div className="container">
          <nav className="level">
            <p class="level-item has-text-centered is-size-6 has-text-weight-semibold">
              <a href="" class="link is-info">
                <Link to='/users'>find friends</Link>
              </a>
            </p>
            <p class="level-item has-text-centered is-size-6 has-text-weight-semibold">
              <a href="" class="link is-info">
                <Link to='/search'>search</Link>
              </a>
            </p>
            <p class="level-item has-text-centered">
              <Link to='/'>
                <img className="logo" src={logo} alt=""/>
              </Link>
            </p>
            <p class="level-item has-text-centered is-size-6 has-text-weight-semibold">
              <a href="" class="link is-info">
                <Link to={`/profile/${props.id}`}>profile</Link>
              </a>
            </p>
            <p class="level-item has-text-centered is-size-6  has-text-weight-semibold">
              <a href="" className ="is-light" onClick= {props.logout}>logout</a>
            </p>
          </nav>
        </div>
      : 
          <nav className="level">
            <div className="level-left">
            </div>
            <div className="level-right nav-unreg">
              <p class="level-item has-text-centered is-size-6 has-text-weight-semibold">
                <a href="" class="link is-info">
                  <Link to='/register'>register</Link>
                </a>
              </p>
              <p class="level-item has-text-centered is-size-6  has-text-weight-semibold">
                <a href="" class="link is-info">
                  <Link to='/login'>login</Link>
                </a>
              </p>
            </div>
          </nav>
          
      }
    </div>
  )
}

export default Navbar;