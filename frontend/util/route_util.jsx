import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const Auth = ({ component: Component, loggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => 
      loggedIn ? <Redirect to='/' /> : <Component {...props} />
    }
  />
);

const mapStateToProps = ({session}) => ({
  loggedIn: Boolean(session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));