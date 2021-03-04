import React from 'react'
import { Card } from 'react-bootstrap'
import VoteToggle from '../vote/vote_toggle'

export default function CommentIndexItem({ comment }) {
  return (
    <>
      <Card bg="light" text="dark">
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>Vote count: {comment.votes}</Card.Text>
          <pre>{JSON.stringify(comment.hasVoted,undefined, 2)}</pre>
          <VoteToggle hasVoted={comment.hasVoted} />
          <footer className="blockquote-footer">
            {comment.author.username}
          </footer>
        </Card.Body>
      </Card>
    </>
  )
}