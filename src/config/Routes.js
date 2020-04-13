import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Homepage/Homepage';
import Register from '../../src/components/auth/Register/Register';
import Login from '../../src/components/auth/Login/Login';
//import Searchpage from '../components/Searchpage/Searchpage';

// routes contains a lot of ternary statements
// these are largely designed to see if the user is logged in (via the App component's state, passed down as props)
// if the user is not logged in, it will redirect them to login
// if the user tries to go to /register or /login, but IS logged in, it will redirect them to /doggos
const Routes = (props) => {
  return (
    <Switch>
        <Route
            exact path='/'
            component={ Home }
        />

      
        <Route
            path='/register'
            render={
            () => props.user ? 
                    <Redirect to="/search" />
                    :
                    <Register register={props.register} />
            }
        />
        <Route
            exact path='/login'
            render={
              () => props.user ?
                      <Redirect to="/search" />
                    :
                    <Login login={props.login} />
            }
            
        />
    </Switch>
  )
}

export default Routes;
