import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_SOLUTIONS = 'REMOVE_SOLUTIONS';
export const UPDATE_POST_ORDER = 'UPDATE_POST_ORDER';

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

export const removePost = ({ post }) => ({
  type: REMOVE_POST,
  post
});

export const removeSolutions = id => ({
  type: REMOVE_SOLUTIONS,
  id
})

// TBD: either update order or update posts
export const updatePostOrder = data => ({
  type: UPDATE_POST_ORDER,
  data
})

// thunk action creators
export const fetchPosts = data => dispatch => (
  APIUtil.fetchPosts(data)
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

export const editPost = (id, formData) => dispatch => (
  APIUtil.editPost(id, formData)
    .then(post => dispatch(receivePost(post)),
    err => console.log(err))
)

export const deletePost = id => dispatch => (
  APIUtil.deletePost(id)
    .then(post => {
      dispatch(removeSolutions(id))
      dispatch(removePost(post))
    },
    err => console.log(err))
)
