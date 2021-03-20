import { Button } from 'react-bootstrap';
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import { SmallLink } from '../post_form/post_reply_button';
import { newFormOpen, replyFormOpen } from '../../actions/comment_feature_actions';

const CommentButton = ({ cta, postId, parentCommentId = null, comment = null }) => {
  // direct to new comment 
    // pass parent comment if nesting comment
  // direct to edit comment (todo)
  const pathname = (cta === 'edit') ? `/comments/${comment.id}` : `/posts/${postId}/comment`;
  
  const text = {
    'comment': 'Comment',
    'reply': 'Reply',
    'edit': 'Edit',
    'delete': 'Delete'
  };

  const dispatch = useDispatch();
  
  const handleDelete = e => {
    dispatch(deleteComment(comment.id));
  };

  const handleOpen = e => {
    if (cta === 'comment') {
      dispatch(newFormOpen())
    } else if (cta === 'reply') {
      dispatch(replyFormOpen(parentCommentId))
    }
  }

  if (cta === 'delete') {
    return (
      <SmallLink onClick={handleDelete}>
        {text[cta]}
      </SmallLink>
    )
  } else {
    return (
      <SmallLink onClick={handleOpen}>{text[cta]}</SmallLink>
    )
  }
}

export default CommentButton;