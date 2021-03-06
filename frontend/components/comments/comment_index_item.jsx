import React from 'react'
import { Card } from 'react-bootstrap'
import VoteToggle from '../vote/vote_toggle'
import CommentButton from '../comment_form/comment_button'

export default function CommentIndexItem({ comment }) {
  return (
    <>
      <Card bg="light" text="dark">
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>Vote count: {comment.votes}</Card.Text>
          <pre>{JSON.stringify(comment.hasVoted,undefined, 2)}</pre>
          <VoteToggle hasVoted={comment.hasVoted} />
          <CommentButton cta='reply' postId={comment.postId} parentCommentId={comment.id}/>
          <footer className="blockquote-footer">
            {comment.author.username}
          </footer>
        </Card.Body>
      </Card>
    </>
  )
}