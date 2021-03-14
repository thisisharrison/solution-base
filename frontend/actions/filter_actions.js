import { fetchPosts } from './post_actions';
import { fetchTopic } from './topic_actions';
import { startIndexLoading } from './loading_action';

export const RECEIVE_SORT = 'RECEIVE_SORT';
export const RECEIVE_TOPIC_FILTER = 'RECEIVE_TOPIC_FILTER';
export const REMOVE_TOPIC_FILTER = 'REMOVE_TOPIC_FILTER';
export const RECEIVE_POST_TYPE_FILTER = 'RECEIVE_POST_TYPE_FILTER';
export const REMOVE_POST_TYPE_FILTER = 'REMOVE_POST_TYPE_FILTER';

export const receiveSort = (id, {sort}, key) => ({
  type: RECEIVE_SORT,
  id, 
  sort,
  key
});

export const receiveTopicFilter = ({topic_id}) => ({
  type: RECEIVE_TOPIC_FILTER,
  topicId: topic_id,
});

export const removeTopicFitler = () => ({
  type: REMOVE_TOPIC_FILTER
});

export const receivePostTypeFilter = ({post_type, key}) => ({
  type: RECEIVE_POST_TYPE_FILTER,
  postType: post_type,
  key
});

export const removePostTypeFilter = () => ({
  type: REMOVE_POST_TYPE_FILTER
});

export const updateSort = (id, data, key) => dispatch => {
  dispatch(startIndexLoading());
  dispatch(receiveSort(id, data, key));
  if (key === 'topic') {
    return fetchTopic(id, data)(dispatch);
  } else if (key === 'homepage') {
    return fetchPosts(data)(dispatch);
  }
};

// data format = { topic_id = # }
export const updateTopicFilter = data => dispatch => {
  dispatch(startIndexLoading());
  dispatch(receiveTopicFilter(data));
  return fetchPosts(data)(dispatch);
};

export const updatePostTypeFilter = data => dispatch => {
  dispatch(startIndexLoading());
  dispatch(receivePostTypeFilter(data));
  if (data.key === 'homepage') {
    return fetchPosts(data)(dispatch)
  }
};