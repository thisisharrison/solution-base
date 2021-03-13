import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroupItem } from 'react-bootstrap';

const TopicIndexItem = ({topic}) => {
  return (
    <ListGroupItem key={topic.id}>
      <Link to={`/topics/${topic.id}`}>{topic.name} {topic.posts}</Link>
    </ListGroupItem>
  )
}

export default TopicIndexItem;