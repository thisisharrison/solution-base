import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import NewPostButton from '../post_form/new_post_button'
import VoteToggle from '../vote/vote_toggle'

export default function PostIndexItem({ post, postOwner }) {
  if (!post) return null
  return (
    <>
      <Card>
        <Card.Body>
          <LinkContainer to={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
          </LinkContainer>
          <Card.Body>{post.body}</Card.Body>
          <Card.Text>Comment count: {post.commentCount}</Card.Text>
          <Card.Text>Vote count: {post.votes}</Card.Text>
          <pre>{JSON.stringify(post.hasVoted, undefined, 2)}</pre>
          <VoteToggle hasVoted={post.hasVoted} />
          <BookmarkToggle hasBookmarked={post.hasBookmarked} />
          {post.topics && post.topics.map(topic => (
            <LinkContainer key={`post-${post.id}-pill-${topic.id}`} to={`/topics/${topic.id}`}>
              <Badge pill variant="secondary">{topic.name}</Badge>
            </LinkContainer>
          ))}
          {postOwner ? <NewPostButton cta="Edit Post" pathname={`/posts/${post.id}/edit`} post={post} /> : null}
        </Card.Body>
      </Card>
    </>
  )
}