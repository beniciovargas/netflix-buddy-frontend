import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Homepage/Homepage';
import Register from '../../src/components/auth/Register/Register';
import Login from '../../src/components/auth/Login/Login';
import Profile from '../components/Profile/Profile';
import Searchpage from '../components/Searchpage/Searchpage';
import Showpage from '../components/Showpage/Showpage';
import FindFriends from '../components/FindFriends/FindFriends';


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
              <Redirect to="/profile" />
                :
              <Register register={ props.register }  />
          }
        />

        <Route
          exact path='/login'
          render={
            () => props.user ?
              <Redirect to="/profile" />
                :
              <Login login={ props.login } />
          }
        />

        <Route 
          path='/shows/:id'
          component = { Showpage }
        />

        <Route 
          path='/profile'
          component = { Profile }
        />

        <Route  
          exact path = '/search'
          component = { Searchpage }
        />

        <Route  
          exact path = '/users'
          component = { FindFriends }
        />
    </Switch>
  )
}

export default Routes;
