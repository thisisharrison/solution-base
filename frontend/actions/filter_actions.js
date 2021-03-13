import { fetchTopic } from './topic_actions';

export const RECEIVE_SORT = 'RECEIVE_SORT';

export const receiveSort = (id, sort) => ({
  type: RECEIVE_SORT,
  id, 
  sort
});

export const updateSort = (id, sort) => dispatch => {
  dispatch(receiveSort(id, sort))
  return fetchTopic(id, {sort})(dispatch);
};