import * as APIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SHOW_SESSION_FORM = 'SHOW_SESSION_FORM';
export const CLOSE_SESSION_FORM = 'CLOSE_SESSION_FORM';
export const RECEIVE_AUTH_ERRORS = 'RECEIVE_AUTH_ERRORS';

// regular action creators
export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receieveAuthErrors = errors => ({
  type: RECEIVE_AUTH_ERRORS,
  errors,
});

export const showSessionForm = key => ({
  type: SHOW_SESSION_FORM,
  key
});

export const closeSessionForm = key => ({
  type: CLOSE_SESSION_FORM,
  key
});

// thunk action creators
export const login = user => dispatch => (
 APIUtil.login(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(closeSessionForm('login'));
    },
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(result => dispatch(logoutCurrentUser()))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(user => {
      dispatch(receiveCurrentUser(user));
      dispatch(closeSessionForm('signup'));
    },
    err => dispatch(receiveErrors(err.responseJSON)))
);