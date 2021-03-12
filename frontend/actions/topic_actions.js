import * as APIUtil from '../util/topic_api_util';
import { 
  updatePostOrder
} from './post_actions';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});

export const fetchTopic = (id, data) => dispatch => (
  APIUtil.fetchTopic(id, data)
    .then(data => dispatch(receiveTopic(data)),
    err => console.log(err))
);

// TBD: either update order or update posts
export const sortTopic = (id, data) => dispatch => (
  APIUtil.fetchTopic(id, date)
    .then(data => dispatch(updatePostOrder(data)),
    err => console.log(err))
)