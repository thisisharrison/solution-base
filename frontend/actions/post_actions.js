import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

// Post#show provides 3 types of data: original post, problem (if solution post), solutions (if problem post)
export const receivePost = ({ post, problem, solutions, all_comments }) => ({
  type: RECEIVE_POST,
  post,
  problem,
  solutions,
  all_comments
});

export const receiveNewPost = ({ post }) => ({
  type: RECEIVE_NEW_POST,
  post
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

export const createPost = formData => dispatch => (
  APIUtil.createPost(formData)
    .then(post => {
      dispatch(receiveNewPost(post));
      // return dispatch(receivePost(post));
    },
    err => console.log(err))
);