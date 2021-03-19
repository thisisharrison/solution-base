import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { getTopicsNames } from '../../util/topic_api_util'
import { Form, Button, Modal } from 'react-bootstrap'

// #  author_id  :integer          not null
// #  problem_id :integer
// #  title      :string           not null
// #  body       :string           not null
// #  post_type  :string           not null

function PostForm({ formType, modal, hidePostForm, problemId, problemPost, post, processForm }) {
  
  const [ data, setData ] = useState(() => Object.assign({}, { post_type: "solution", topic_ids: [] }))
  const [ topics, setTopics ] = useState([])

  const handleClose = e => {
    if (formType === 'create') {
      hidePostForm('postNew');
    } else {
      hidePostForm('postEdit');
    }
  };

  useEffect(() => {
    getTopicsNames().then(names => {
      setTopics(names)
    })
    // replying to a problem post, set form's multiselect to equal problem post
    if (Boolean(problemId) && problemPost) {
      setData(Object.assign({}, data, { 
        topic_ids: problemPost.topics.map(topic => topic.id) 
      }));
    }
  }, [])

  useEffect(() => {
    if (formType === 'edit' && post) {
      setData(Object.assign({}, data, {
        title: post.title,
        body: post.body,
        post_type: post.post_type,
        topic_ids: post.topics.map(topic => topic.id)
      }));
    }
  }, [post])

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
    if (Boolean(problemId)) {
      formData.append('post[problem_id]', parseInt(problemId))
    }
    if (formType === 'edit') {
      processForm(post.id, formData);
    } else {
      processForm(formData);
    }
  }

  const isEdit = formType === 'edit';

  const cta = isEdit ? 'Edit Post' : 'Post';

  return (
    <>
      <Modal
        show={modal}
        size="lg"
        centered
        onHide={handleClose}
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Post Form</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group controlId="formGroupTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="input" name="title" onChange={update} defaultValue={isEdit ? data.title : ''} placeholder="Give a short summary" />
            </Form.Group>
            
            <Form.Group controlId="formGroupBody">
              <Form.Label>Body</Form.Label>
              <Form.Control as="textarea" name="body" onChange={update} defaultValue={isEdit ? data.body : ''} row={8} />
            </Form.Group>

            <Form.Group controlId="formGroupPostType">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" name="post_type" onChange={update} defaultValue={isEdit ? data.post_type : ''}>
                <option value="solution">Solution</option>
                <option value="problem" disabled={Boolean(problemId)}>Problem</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formGroupTopicIds">
              <Form.Label>Topics</Form.Label>
              <Form.Control as="select" multiple name="topic_ids" onChange={updateTopic} defaultValue={isEdit ? data.topic_ids : []}>
                {topics.map(topic => (
                  <option key={topic.id} value={topic.id}>{topic.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" type="submit">
              {cta}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default withRouter(PostForm);