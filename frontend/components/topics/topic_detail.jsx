import React from 'react'
import BookmarkToggle from '../bookmark/bookmark_toggle';
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function TopicDetail({topic}) {
  if (!topic) return null;

  return (
    <>
      <Jumbotron>
        <h1>{topic.name}</h1>
        <p>
          {topic.description}
        </p>
        <p>
          <BookmarkToggle hasBookmarked={topic.hasBookmarked} type="topics" id={topic.id} />
        </p>
      </Jumbotron>
    </>
  )
}