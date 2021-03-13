import React, { useEffect, useState } from 'react'
import TopicDetail from './topic_detail';
import PostIndexItem from '../posts/post_index_item'
import { Container } from 'react-bootstrap';

const TopicShow = ({ topicId, topic, postOrder, problems, solutions, fetchTopic }) => {
  
  useEffect(() => {
    fetchTopic(topicId);
    return(() => {console.log('clean up topic')})
  }, [topicId])
  
  const [posts, setPost] = useState(() => ({ problems: problems, solutions: solutions }));

  useEffect(() => {
    const newPosts = Object.assign({}, {
      problems, 
      solutions
    });
    setPost(newPosts);
  }, [problems, solutions])

  return (
    <div>
      <Container>
        Topic Show
        <h2>Topic</h2>
        <TopicDetail topic={topic.topic} />
        
        {/* debugging */}
        {/* <pre>{JSON.stringify(postOrder, undefined, 2)}</pre> */}

        <h2>Problems</h2>
        {/* debugging */}
        {/* <pre>{JSON.stringify(posts.problems, undefined, 2)}</pre> */}
        <small>Count: {problems ? problems.length : '0'}</small>
        {problems ? posts.problems.map(problem =>
          <PostIndexItem post={problem} key={`problem-${problem.id}`}/>
        ): null}
        
        <h2>Solutions</h2>
        {/* debugging */}
        {/* <pre>{JSON.stringify(posts.solutions, undefined, 2)}</pre> */}
        <small>Count: {solutions ? solutions.length : '0'}</small>
        {solutions ? posts.solutions.map(solution =>
          <PostIndexItem post={solution} key={`solution-${solution.id}`}/>
        ): null}
        
      </Container>
    </div>
  )
}

export default TopicShow;