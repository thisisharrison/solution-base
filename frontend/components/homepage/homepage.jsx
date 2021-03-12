import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getTopicsNames } from '../../util/topic_api_util'
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import NewPostButton from '../post_form/new_post_button';
import Hero from './hero';
import SearchContainer from '../search/search_container';

export default function Homepage() {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopicsNames().then(names => {
      setTopics(names)
    })
  }, [])
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
            <SearchContainer />
          </Col>

          <Col lg={3}>
            <NewPostButton />
          </Col>

        </Row>
      </Container>
    </div>
  )
}
