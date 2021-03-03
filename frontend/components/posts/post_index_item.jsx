import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BookmarkToggle from '../bookmarks/bookmark_toggle'

export default function PostIndexItem({ post }) {
  return (
    <>
      <Card>
        <Card.Body>
          <LinkContainer to={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
          </LinkContainer>
          <Card.Body>{post.body}</Card.Body>
          <Card.Text>Vote count: {post.votes}</Card.Text>
          <Card.Text>hasVoted: {post.hasVoted}</Card.Text>
          <BookmarkToggle hasBookmarked={post.hasBookmarked} />
          {post.topics && post.topics.map(topic => (
            <LinkContainer to={`/topics/${topic.id}`}>
              <Badge pill variant="secondary" key={`pill-${topic.id}`}>{topic.name}</Badge>
            </LinkContainer>
          ))}
        </Card.Body>
      </Card>
    </>
  )
}