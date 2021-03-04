import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopicsNames } from '../../util/topic_api_util'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

export default function Homepage() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopicsNames().then(names => {
      setTopics(names)
    })
  }, [])
  return (
    <div>
      HomePage
      <Row>
        <Col lg={3}>
          <ListGroup variant="flush">
            {topics.map((topic, i) => (
              <ListGroupItem key={topic.id}>
                <Link to={`/topics/${topic.id}`}>{topic.name}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        
        <Col>
          Feed Component
        </Col>
        <Col lg={3}>
          Add Button
        </Col>
      </Row>
    </div>
  )
}
