import { fetchPosts } from './post_actions';
import { fetchTopic } from './topic_actions';

export const RECEIVE_SORT = 'RECEIVE_SORT';

export const receiveSort = (id, sort, key) => ({
  type: RECEIVE_SORT,
  id, 
  sort,
  key
});

export const updateSort = (id, sort, key) => dispatch => {
  dispatch(receiveSort(id, sort, key))
  if (key === 'topic') {
    return fetchTopic(id, {sort})(dispatch);
  } else if (key === 'homepage') {
    return fetchPosts({sort})(dispatch);
  }
};