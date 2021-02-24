import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// debugging
import { login, logout } from './actions/session_actions';
import { getTopicsNames } from './util/topic_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  // inserted via root.show ERB
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // debugging
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.logout = logout;
  window.login = login;
  window.getTopicsNames = getTopicsNames;

  ReactDOM.render(<Root store={store} />, root);
});