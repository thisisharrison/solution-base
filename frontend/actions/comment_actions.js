import * as API from '../util/comment_api_util';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const receiveComment = ({comment}) => ({
  type: RECEIVE_COMMENT,
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
    .then(comment => dispatch(receiveComment(comment)),
    err => console.log(err))
);

export const editComment = (postId, data) => dispatch => (
  API.editComment(postId, data)
    .then(comment => dispatch(receiveComment(comment)),
    err => console.log(err))
);

export const deleteComment = (id) => dispatch => (
  API.deleteComment(id)
    .then(comment => dispatch(removeComment(comment)),
    err => console.log(err))
);