import React from 'react'
import BookmarkToggle from '../bookmark/bookmark_toggle';
import { Card } from 'react-bootstrap'
import NewPostButton from '../post_form/new_post_button';

export default function TopicDetail({topic}) {
  if (!topic) return null;

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>{topic.name}</Card.Title>
          <Card.Body>{topic.description}</Card.Body>
          <pre>Bookmark Status: {JSON.stringify(topic.hasBookmarked, undefined, 2)}</pre>
          <BookmarkToggle hasBookmarked={topic.hasBookmarked} />
          <NewPostButton />
        </Card.Body>
      </Card>
    </>
  )
}