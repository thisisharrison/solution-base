import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import NewPostButton from '../post_form/new_post_button';
import Hero from './hero';
import SortingContainer from '../sorting/sorting_container';
import PostIndex from '../posts/post_index'
import TopicIndexItem from './topic_index_item';
import Loading from '../loading/loading';

export default function Homepage({ loading, topicNames, getTopicNames, updateSort, posts }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // if (topicNames.length === 0) {
    getTopicNames();
    // }
    // fetchPosts();
    updateSort(null, {}, "homepage")
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
            <h5><strong>17 Goals</strong></h5>
            <ListGroup variant="flush">
              {topics.map((topic, i) => (
                <TopicIndexItem key={topic.id} topic={topic}/>
                ))}
            </ListGroup>
          </Col>
          
          <Col>
            <SortingContainer topicId={null} sortType={'homepage'}/>
            {loading ? <Loading /> : <PostIndex posts={posts}/>}
          </Col>

          <Col lg={3}>
            <NewPostButton />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
