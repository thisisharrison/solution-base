import React, { useEffect, useState } from 'react'
import TopicDetail from './topic_detail';
import PostIndexItem from '../posts/post_index_item'
import { Container, DropdownButton, Dropdown, Table } from 'react-bootstrap';
import SortingContainer from '../search/sorting_container';
import Loading from '../loading/loading';
import NewPostButton from '../post_form/new_post_button';

const TopicShow = ({ topicId, topic, topicNames, getTopicsNames, postOrder, problems, solutions, fetchTopic, loading }) => {
  
  useEffect(() => {
    fetchTopic(topicId);
    return(() => {console.log('clean up topic')})
  }, [topicId])

  useEffect(() => {
    if (topicNames.length === 0) {
      getTopicsNames();
    }
  }, [])
  
  const [posts, setPost] = useState(() => ({ problems: problems, solutions: solutions }));

  const [postType, setPostType] = useState(null);

  useEffect(() => {
    const newPosts = Object.assign({}, {
      problems, 
      solutions
    });
    setPost(newPosts);
  }, [problems, solutions])

  const handleClick = e => {
    if (e.target.name === postType) {
      setPostType(null);
    } else {
      setPostType(e.target.name);
    }
  }

  const buttons = ['problem', 'solution'].map(type => 
      <Dropdown.Item as="button"
        name={type}
        key={type}
        onClick={handleClick}
        active={postType === type}
      >
        {type} 
      </Dropdown.Item>
    )

  return (
    <div>
      <Container>
        <div className="topic-show-header">
          <div className="topic-show-header-left">
            <h5>17 Goals</h5>
            <DropdownButton id="topic-button" title={topic.topic && `${topic.topic.name}`} variant="transparent">
              {topicNames.map(topic =>
                <Dropdown.Item 
                  href={`#/topics/${topic.id}`} 
                  key={`topic-filter-${topic.id}`} 
                >
                  {topic.name}
                </Dropdown.Item>
              )}
            </DropdownButton>
            <DropdownButton id="post-type-button" title={ postType ? postType : 'Filter' } variant="transparent">
              {buttons}
            </DropdownButton>
            <SortingContainer topicId={topicId} sortType={"topic"}/>
          </div>
          <NewPostButton />
        </div>

        <TopicDetail topic={topic.topic} />

        {(postType === 'problem' || postType === null) && !loading &&
          <>
            <h2 className="topic-show-h2">Problems</h2>
            <small>Count: {problems ? problems.length : '0'}</small>
            <Table responsive>
              <tbody>
                {problems && posts.problems.map(problem => {
                  if (problem) {
                    return <PostIndexItem post={problem} key={`problem-${problem.id}`}/>
                  }
                })}
              </tbody>
            </Table>
          </>
        }
        
        {(postType === 'solution' || postType === null) && !loading &&
          <>
            <h2 className="topic-show-h2">Solutions</h2>
            <small>Count: {solutions ? solutions.length : '0'}</small>
            <Table responsive>
              <tbody>
                {solutions && posts.solutions.map(solution => {
                  if (solution) {
                    return <PostIndexItem post={solution} key={`solution-${solution.id}`}/>
                  }
                })}
              </tbody>
            </Table>
          </>
        }

        {loading && <Loading />}
        
      </Container>
    </div>
  )
}

export default TopicShow;