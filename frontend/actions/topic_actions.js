import * as APIUtil from '../util/topic_api_util';
import { 
  receivePosts
} from './post_actions';

export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

export const receiveTopic = topic => ({
  type: RECEIVE_TOPIC,
  topic
});

export const fetchTopic = id => dispatch => (
  APIUtil.fetchTopic(id)
    .then(data => dispatch(receiveTopic(data)),
    err => console.log(err))
);