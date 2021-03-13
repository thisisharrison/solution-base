import React from 'react'
import { Card, Badge } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import moment from 'moment-timezone'
import BookmarkToggle from '../bookmark/bookmark_toggle'
import NewPostButton from '../post_form/new_post_button'
import PostDeleteButton from '../post_form/post_delete_button'
import VoteToggle from '../vote/vote_toggle'

export default function PostIndexItem({ post, postOwner }) {
  if (!post) return null
  // if (!post.id) return null
  
  const date = moment(post.created_at)
    .format("dddd, MMMM Do YYYY, h:mm:ss a")

  return (
    <>
      <Card>
        <Card.Body>
          <LinkContainer to={`/posts/${post.id}`}>
            <Card.Title>{post.title}</Card.Title>
          </LinkContainer>
          <Card.Text><small className="muted">{post.author.username}</small></Card.Text>
          <Card.Text><small className="muted">{date}</small></Card.Text>
          <Card.Body>{post.body}</Card.Body>
          <Card.Text>Comment count: {post.commentCount}</Card.Text>
          <Card.Text>Vote count: {post.votes}</Card.Text>
          <pre>Vote Status: {JSON.stringify(post.hasVoted, undefined, 2)}</pre>
          <pre>Bookmark Status: {JSON.stringify(post.hasBookmarked, undefined, 2)}</pre>
          <VoteToggle hasVoted={post.hasVoted} type="posts" id={post.id}/>
          <BookmarkToggle hasBookmarked={post.hasBookmarked} type="posts" id={post.id}/>
          <Card.Footer>
            {post.topics && post.topics.map(topic => (
              <LinkContainer key={`post-${post.id}-pill-${topic.id}`} to={`/topics/${topic.id}`}>
                <Badge pill variant="secondary">{topic.name}</Badge>
              </LinkContainer>
            ))}
            {postOwner ? <NewPostButton cta="Edit Post" pathname={`/posts/${post.id}/edit`} post={post} /> : null}
            {postOwner ? <PostDeleteButton id={post.id} /> : null}
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
  )
}