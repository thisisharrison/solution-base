import React from 'react'
import { Card } from 'react-bootstrap'

export default function CommentIndexItem({ comment }) {
  return (
    <>
      <Card bg="light" text="dark">
        <Card.Body>
          <Card.Text>{comment.body}</Card.Text>
          <Card.Text>Vote count: {comment.votes}</Card.Text>
          <Card.Text>hasVoted: {comment.hasVoted}</Card.Text>
          <footer className="blockquote-footer">
            {comment.author.username}
          </footer>
        </Card.Body>
      </Card>
    </>
  )
}