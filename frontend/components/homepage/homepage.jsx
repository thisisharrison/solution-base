import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import NewPostButton from '../post_form/new_post_button';
import Hero from './hero';
import SortingContainer from '../sorting/sorting_container';

export default function Homepage({ topicNames, getTopicNames, fetchPosts }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    if (topicNames.length === 0) {
      getTopicNames();
    }
    fetchPosts();
  }, [])

  useEffect(() => {
    setTopics(topicNames)
  }, [topicNames])

  return (
    <div>
      <Hero />
      <Container>
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
            <SortingContainer />
          </Col>

          <Col lg={3}>
            <NewPostButton />
          </Col>

        </Row>
      </Container>
    </div>
  )
}
