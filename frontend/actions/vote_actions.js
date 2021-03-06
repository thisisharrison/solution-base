import * as API from '../util/vote_api_util';
import { receivePost } from './post_actions';
import { receiveComment } from './comment_actions';

export const RECEIVE_VOTE = 'RECEIVE_VOTE';
export const REMOVE_VOTE = 'REMOVE_VOTE';

export const receiveVote = (key, value) => ({
  type: RECEIVE_VOTE,
  key, 
  value
});

export const removeVote = (key, value) => ({
  type: REMOVE_VOTE,
  key,
  value
});

export const vote = (id, type) => dispatch => (
  API.vote(id, type)
    .then(value => {
      dispatch(receiveVote(type, value))
      if (type === 'posts') {
        dispatch(receivePost(value))
      } else {
        dispatch(receiveComment(value))
      }
    },
    err => console.log(err))
);

export const unvote = (id, type) => dispatch => (
  API.unvote(id, type)
    .then(value => {
      dispatch(removeVote(type, value))
      if (type === 'posts') {
        return dispatch(receivePost(value))
      } else {
        dispatch(receiveComment(value))
      }
    },
    err => console.log(err))
);