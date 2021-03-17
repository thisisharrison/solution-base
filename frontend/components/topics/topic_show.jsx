import React, { useEffect, useState } from 'react'
import TopicDetail from './topic_detail';
import PostIndexItem from '../posts/post_index_item'
import { Container, Table } from 'react-bootstrap';
import SortingContainer from '../search/sorting_container';
import Loading from '../loading/loading';
import NewPostButton from '../post_form/new_post_button';

const TopicShow = ({ topicId, topic, postOrder, problems, solutions, fetchTopic, loading }) => {
  
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

  if (loading) {
    return (
      <Container>
        <TopicDetail topic={topic.topic} />
        <SortingContainer topicId={topicId} sortType={"topic"}/>
        <Loading />
      </Container>
    )
  }

  return (
    <div>
      <Container>
        <div className="topic-show-header">
          <div className="topic-show-header-left">
            <h5>17 Goals</h5>
            <h5>Topic</h5>
            <h5>Filter</h5>
            <SortingContainer topicId={topicId} sortType={"topic"}/>
          </div>
          <NewPostButton />
        </div>

        <TopicDetail topic={topic.topic} />
        
        {/* debugging */}
        {/* <pre>{JSON.stringify(postOrder, undefined, 2)}</pre> */}
        
        <h2 className="topic-show-h2">Problems</h2>
        {/* debugging */}
        {/* <pre>{JSON.stringify(posts.problems, undefined, 2)}</pre> */}
        <small>Count: {problems ? problems.length : '0'}</small>
        <Table responsive>
          <tbody>
            {problems && posts.problems.map(problem =>
              <PostIndexItem post={problem} key={`problem-${problem.id}`}/>
            )}
          </tbody>
        </Table>
        
        <h2 className="topic-show-h2">Solutions</h2>
        {/* debugging */}
        {/* <pre>{JSON.stringify(posts.solutions, undefined, 2)}</pre> */}
        <small>Count: {solutions ? solutions.length : '0'}</small>
        <Table responsive>
          <tbody>
            {solutions && posts.solutions.map(solution =>
              <PostIndexItem post={solution} key={`solution-${solution.id}`}/>
            )}
          </tbody>
        </Table>
        
      </Container>
    </div>
  )
}

export default TopicShow;