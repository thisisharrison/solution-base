import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Col, ListGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import NewPostButton from '../post_form/new_post_button';
import Hero from './hero';
import PostIndex from '../posts/post_index'
import TopicFilter from '../search/topic_filter';
import SortingContainer from '../search/sorting_container';
import PostTypeFilterContainer from '../search/post_type_filter';
import Loading from '../loading/loading';

export default function Homepage({ loading, topicNames, getTopicNames, homeFilter, updateSort, updateTopicFilter, filterTopicId, posts }) {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // if (topicNames.length === 0) {
    getTopicNames();
    // }
    // fetchPosts();
    if (filterTopicId) updateTopicFilter({ topic_id: filterTopicId });
    updateSort(null, homeFilter, "homepage")
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
                <TopicFilter key={topic.id} topic={topic} updateTopicFilter={updateTopicFilter}/>
                ))}
            </ListGroup>
          </Col>
          
          <Col>
            <PostTypeFilterContainer />
            <SortingContainer topicId={filterTopicId ? filterTopicId : null} sortType={'homepage'}/>
            
            {filterTopicId ? <Link to={`/topics/${filterTopicId}`}>Read more</Link> : null}
            
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
