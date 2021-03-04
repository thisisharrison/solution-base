import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { getTopicsNames } from '../../util/topic_api_util'
import { Form, Button } from 'react-bootstrap'

// #  author_id  :integer          not null
// #  problem_id :integer
// #  title      :string           not null
// #  body       :string           not null
// #  post_type  :string           not null

function PostForm({ history, problem_id, problemPost, createPost }) {
  
  const [ data, setData ] = useState(() => Object.assign({}, { post_type: "solution" }))
  const [ topics, setTopics ] = useState([])

  useEffect(() => {
    getTopicsNames().then(names => {
      setTopics(names)
    })
  }, [])

  const update = e => {
    const edit = { [e.target.name] : e.target.value };
    setData(Object.assign({}, data, edit));
  };

  const updateTopic = e => {
    const topicIds = Object.assign([], e.target.selectedOptions).map(opt => parseInt(opt.value));
    const edit = { [e.target.name] : topicIds };
    setData(Object.assign({}, data, edit));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData ();
    formData.append('post[title]', data.title)
    formData.append('post[body]', data.body)
    formData.append('post[post_type]', data.post_type)
    formData.append('post[topic_ids]', data.topic_ids)
    if (problem_id) {
      formData.append('post[problem_id]', parseInt(problem_id))
    }
    createPost(formData);
    history.push('/');
  }

  const problemPostTopics = () => {
    return Boolean(problem_id) ? problemPost.topics.map(topic => String(topic.id)) : [];
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="input" name="title" onChange={update} placeholder="Give a short summary" />
        </Form.Group>
        
        <Form.Group controlId="formGroupBody">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" name="body" onChange={update} row={5} />
        </Form.Group>

        <Form.Group controlId="formGroupPostType">
          <Form.Label>Type</Form.Label>
          <Form.Control as="select" name="post_type" defaultValue="solution" onChange={update} >
            <option value="solution">Solution</option>
            <option value="problem" disabled={Boolean(problem_id)}>Problem</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formGroupTopicIds">
          <Form.Label>Topics</Form.Label>
          <Form.Control as="select" multiple name="topic_ids" onChange={updateTopic} defaultValue={problemPostTopics()}>
            {topics.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </>
  )
}

export default withRouter(PostForm);