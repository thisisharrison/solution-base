import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

// Post#show provides 3 types of data
export const receivePost = ({ post, solutions, all_comments }) => ({
  type: RECEIVE_POST,
  post,
  solutions,
  all_comments
});

// thunk action creators
export const fetchPosts = () => dispatch => (
  APIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)), 
    err => console.log(err))
);

export const fetchPost = id => dispatch => (
  APIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)), 
    err => console.log(err))
);