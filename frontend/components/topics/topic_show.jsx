import React, { useEffect } from 'react'
import TopicDetail from './topic_detail';
import PostIndexItem from '../posts/post_index_item'
import { Container } from 'react-bootstrap';

export default function TopicShow({ topicId, topic, posts, problems, solutions, fetchTopic }) {
  
  useEffect(() => {
    fetchTopic(topicId);
    return(() => {console.log('clean up topic')})
  }, [topicId])
  
  return (
    <div>
      <Container>
        Topic Show
        <h2>Topic</h2>
        <TopicDetail topic={topic.topic} />
        {/* <pre>{JSON.stringify(topic.topic, undefined, 2)}</pre> */}
        <h2>Problems</h2>
        <small>Count: {problems ? Object.keys(problems).length : '0'}</small>
        {problems ? Object.keys(problems).map(id =>
          <PostIndexItem post={problems[id]} key={`problem-${id}`}/>
        ): null}
        {/* <pre>{JSON.stringify(problems, undefined, 2)}</pre> */}
        <h2>Solutions</h2>
        <small>Count: {solutions ? Object.keys(solutions).length : '0'}</small>
        {solutions ? Object.keys(solutions).map(id =>
          <PostIndexItem post={solutions[id]} key={`solution-${id}`}/>
        ): null}
        {/* <pre>{JSON.stringify(solutions, undefined, 2)}</pre> */}
        
        {/* For debugging */}
        {/* <h2>All Posts</h2>
        <small>Count: {posts ? Object.keys(posts).length : '0'}</small>
        <pre>{JSON.stringify(posts, undefined, 2)}</pre> */}
      </Container>
    </div>
  )
}
