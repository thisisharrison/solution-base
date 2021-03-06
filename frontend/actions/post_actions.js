import * as APIUtil from '../util/post_api_util';
import {
  startIndexLoading,
  startItemLoading,
} from './loading_action';
import { receieveAuthErrors } from './session_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_NEW_POST = 'RECEIVE_NEW_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const REMOVE_SOLUTIONS = 'REMOVE_SOLUTIONS';
export const UPDATE_POST_ORDER = 'UPDATE_POST_ORDER';
export const SHOW_POST_FORM = 'SHOW_POST_FORM';
export const HIDE_POST_FORM = 'HIDE_POST_FORM';
export const SHOW_POST_PREVIEW = 'SHOW_POST_PREVIEW';
export const HIDE_POST_PREVIEW = 'HIDE_POST_PREVIEW';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

export const receivePosts = ({posts, postOrder}) => ({
  type: RECEIVE_POSTS,
  posts,
  postOrder
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

export const showPostForm = key => ({
  type: SHOW_POST_FORM,
  key
});

export const hidePostForm = key => ({
  type: HIDE_POST_FORM,
  key
});

export const showPostPreview = (post) => ({
  type: SHOW_POST_PREVIEW,
  post
});

export const hidePostPreview = () => ({
  type: HIDE_POST_PREVIEW,
});

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

// thunk action creators
export const fetchPosts = data => dispatch => {
  return APIUtil.fetchPosts(data)
    .then(posts => dispatch(receivePosts(posts)), 
    err => console.log(err))
};

export const fetchPost = id => dispatch => {
  dispatch(startItemLoading());
  return APIUtil.fetchPost(id)
    .then(post => dispatch(receivePost(post)), 
    err => console.log(err))
};

export const createPost = formData => dispatch => {
  dispatch(startItemLoading());
  return APIUtil.createPost(formData)
    .then(post => {
      dispatch(receiveNewPost(post));
      dispatch(hidePostForm('postNew'));
    },
    err => {
      if (err.status === 401) {
        dispatch(receieveAuthErrors(err.responseJSON));
      } else {
        dispatch(receivePostErrors(err.responseJSON));
      }
    })
};

export const editPost = (id, formData) => dispatch => {
  dispatch(startItemLoading());
  return APIUtil.editPost(id, formData)
    .then(post => {
      dispatch(receivePost(post));
      dispatch(hidePostForm('postEdit'));
    },
    err => {
      if (err.status === 401) {
        dispatch(receieveAuthErrors(err.responseJSON));
      } else {
        dispatch(receivePostErrors(err.responseJSON));
      }
    })
}

export const deletePost = id => dispatch => {
  dispatch(startItemLoading());
  return APIUtil.deletePost(id)
    .then(post => {
      dispatch(removeSolutions(id))
      dispatch(removePost(post))
    },
    err => {
      if (err.status === 401) {
        dispatch(receieveAuthErrors(err.responseJSON));
      } else {
        dispatch(receivePostErrors(err.responseJSON));
      }
    })
}
