import * as API from '../util/bookmark_api_util';
import { receivePost } from './post_actions';
import { receiveTopic } from './topic_actions';

export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';

export const receiveBookmark = (key, value) => ({
  type: RECEIVE_BOOKMARK,
  key, 
  value
});

export const removeBookmark = (key, value) => ({
  type: REMOVE_BOOKMARK,
  key,
  value
});

export const bookmark = (id, type) => dispatch => (
  API.bookmark(id, type)
    .then(value => {
      dispatch(receiveBookmark(type, value))
      if (type === 'posts') {
        dispatch(receivePost(value))
      } else {
        dispatch(receiveTopic(value))
      }
    },
    err => console.log(err))
)

export const unbookmark = (id, type) => dispatch => (
  API.unbookmark(id, type)
    .then(value => {
      dispatch(removeBookmark(type, value))
      if (type === 'posts') {
        dispatch(receivePost(value))
      } else {
        dispatch(receiveTopic(value))
      }
    },
    err => console.log(err))
)