import * as APIUtil from '../util/topic_api_util';
import {
  startIndexLoading
} from '../actions/loading_action';
import { 
  updatePostOrder
} from './post_actions';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';
export const RECEIVE_TOPIC_NAMES = 'RECEIVE_TOPIC_NAMES';

export const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});

export const receiveTopicNames = data => ({
  type: RECEIVE_TOPIC_NAMES,
  data
})

export const fetchTopic = (id, data) => dispatch => {
  dispatch(startIndexLoading());
  return APIUtil.fetchTopic(id, data)
    .then(data => dispatch(receiveTopic(data)),
    err => console.log(err))
};

export const getTopicsNames = () => dispatch => {
  dispatch(startIndexLoading());
  return APIUtil.getTopicsNames()
    .then(data => dispatch(receiveTopicNames(data)),
    err => console.log(err))
};

// TBD: either update order or update posts
export const sortTopic = (id, data) => dispatch => (
  APIUtil.fetchTopic(id, date)
    .then(data => dispatch(updatePostOrder(data)),
    err => console.log(err))
)