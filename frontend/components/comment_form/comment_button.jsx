import { Button } from 'react-bootstrap';
import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const CommentButton = ({ cta, postId, parentCommentId = null }) => {
  // direct to new comment 
    // pass parent comment if nesting comment
  // direct to edit comment (todo)
  const pathname = `/posts/${postId}/comment`;
  
  const text = (cta === 'comment') ? 'Comment' : 'Reply';
  
  return (
    <LinkContainer to={{pathname: pathname, state: { parentCommentId: parentCommentId }}}>
      <Button variant="primary">{text}</Button>
    </LinkContainer>
  )
}

export default CommentButton;