import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import HomePage from './homepage/homepage'
import { AuthRoute } from '../util/route_util';

export default function App() {
  return (
    <div>
      <GreetingContainer />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <AuthRoute exact path='/login' component={LoginFormContainer} />
        <AuthRoute exact path='/signup' component={SignUpFormContainer} />
      </Switch>
    </div>
  )
}

// <Route expact path='/' component={HomePage} />
// <AuthRoute exact path='/signup' component={Session} />
// <ProtectedRoute exact path='/profile' component={Profile} />