import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// Custom styling baked in components / shared
// import 'bootstrap/dist/css/bootstrap.min.css';

// debugging
import { login, logout } from './actions/session_actions';
import { getTopicsNames } from './util/topic_api_util';
import { vote, unvote } from './actions/vote_actions';
import { bookmark, unbookmark } from './actions/bookmark_actions';
import { updateSort, updateTopicFilter } from './actions/filter_actions';
import { fetchPosts } from './util/post_api_util'
import moment from 'moment-timezone'

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
  window.moment = moment;
  window.vote = vote;
  window.unvote = unvote;
  window.bookmark = bookmark;
  window.unbookmark = unbookmark;
  window.updateSort = updateSort;
  window.fetchPosts = fetchPosts;
  window.updateTopicFilter = updateTopicFilter;

  ReactDOM.render(<Root store={store} />, root);
});