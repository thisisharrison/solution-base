import { Button } from 'react-bootstrap';
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const CommentButton = ({ cta, postId, parentCommentId = null, comment = null }) => {
  // direct to new comment 
    // pass parent comment if nesting comment
  // direct to edit comment (todo)
  const pathname = (cta === 'edit') ? `/comments/${comment.id}` : `/posts/${postId}/comment`;
  
  const text = {
    'comment': 'Comment',
    'reply': 'Reply',
    'edit': 'Edit'
  };
  
  return (
    <LinkContainer to={{pathname: pathname, state: { parentCommentId: parentCommentId, comment: comment }}}>
      <Button variant="primary">{text[cta]}</Button>
    </LinkContainer>
  )
}

export default CommentButton;