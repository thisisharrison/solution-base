import * as API from '../util/comment_api_util';
import {
  replyFormClose,
  newFormClose,
  editFormClose
} from './comment_feature_actions';
import { fetchPost } from './post_actions';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_UPDATE_COMMENT = 'RECEIVE_UPDATE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = ({comment}) => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveUpdateComment = ({comment}) => ({
  type: RECEIVE_UPDATE_COMMENT,
  comment
});

export const removeComment = ({comment}) => ({
  type: REMOVE_COMMENT,
  comment
});

export const fetchComment = commentId => dispatch => (
  API.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)),
    err => console.log(err))
);

export const createComment = (postId, data) => dispatch => (
  API.createComment(postId, data)
    .then(comment => {
      dispatch(newFormClose());
      dispatch(replyFormClose());
      dispatch(receiveComment(comment));
    },
    err => console.log(err))
);

export const editComment = (postId, data) => dispatch => (
  API.editComment(postId, data)
    .then(comment => {
      dispatch(editFormClose());
      dispatch(receiveUpdateComment(comment));
    },
    err => console.log(err))
);

export const deleteComment = (id) => dispatch => (
  API.deleteComment(id)
    .then(comment => {
      dispatch(removeComment(comment));
      dispatch(fetchPost(comment.comment.postId));
    },
    err => console.log(err))
);