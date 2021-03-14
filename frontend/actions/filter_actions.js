import { fetchPosts } from './post_actions';
import { fetchTopic } from './topic_actions';
import { startIndexLoading } from './loading_action';

export const RECEIVE_SORT = 'RECEIVE_SORT';
export const RECEIVE_TOPIC_FILTER = 'RECEIVE_TOPIC_FILTER';
export const RECEIVE_POST_TYPE_FILTER = 'RECEIVE_POST_TYPE_FILTER';

export const receiveSort = (id, sort, key) => ({
  type: RECEIVE_SORT,
  id, 
  sort,
  key
});

export const receiveTopicFilter = ({topic_id}) => ({
  type: RECEIVE_TOPIC_FILTER,
  id: topic_id,
});

export const receivePostTypeFilter = id => ({
  type: RECEIVE_POST_TYPE_FILTER,
  postType,
});

export const updateSort = (id, sort, key) => dispatch => {
  dispatch(startIndexLoading());
  dispatch(receiveSort(id, sort, key));
  if (key === 'topic') {
    return fetchTopic(id, {sort})(dispatch);
  } else if (key === 'homepage') {
    return fetchPosts({sort})(dispatch);
  }
};

// data format = { topic_id = # }
export const updateTopicFilter = data => dispatch => {
  dispatch(startIndexLoading());
  dispatch(receiveTopicFilter(data));
  return fetchPosts(data)(dispatch);
}