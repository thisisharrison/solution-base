import React from 'react'
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../components/sessions/login_form_container';
import SignUpFormContainer from '../components/sessions/signup_form_container';

export default function App() {
  return (
    <div>
      Welcome to SolutionBase
      <Switch>
        <Route exact path='/login' component={LoginFormContainer} />
        <Route exact path='/signup' component={SignUpFormContainer} />
      </Switch>
    </div>
  )
}

// <Route expact path='/' component={HomePage} />
// <AuthRoute exact path='/signup' component={Session} />
// <ProtectedRoute exact path='/profile' component={Profile} />