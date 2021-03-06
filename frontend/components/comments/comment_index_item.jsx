import React from 'react'
import { Card } from 'react-bootstrap'
import VoteToggle from '../vote/vote_toggle'
import CommentButton from '../comment_form/comment_button'

export default function CommentIndexItem({ comment, currentUserId }) {
  const authButtons = currentUserId === comment.author.id ? (
    <>
      <CommentButton cta='edit' comment={comment} /> 
      <CommentButton cta='delete' comment={comment} /> 
    </>
  ): null;
  
  return (
    <>
      <Card bg="light" text="dark">
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>Vote count: {comment.votes}</Card.Text>
          <pre>{JSON.stringify(comment.hasVoted,undefined, 2)}</pre>
          <VoteToggle hasVoted={comment.hasVoted} type="comments" id={comment.id}/>
          <CommentButton cta='reply' postId={comment.postId} parentCommentId={comment.id}/>
          {authButtons}
          <footer className="blockquote-footer">
            {comment.author.username}
          </footer>
        </Card.Body>
      </Card>
    </>
  )
}