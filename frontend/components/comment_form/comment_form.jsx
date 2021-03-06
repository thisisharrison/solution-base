import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchComment } from '../../util/comment_api_util';
import { Form, Button } from 'react-bootstrap'

// #  author_id         :integer          not null
// #  post_id           :integer          not null
// #  parent_comment_id :integer
// #  body              :string           not null

const CommentForm = ({ formType, commentId, postId, parentCommentId, processForm, history }) => {
  
  const [ data, setData ] = useState({});
  const [ comment, setComment ] = useState({});

  useEffect(() => {
    if (formType === 'edit') {
      // fetch the comment
      fetchComment(commentId)
        .then(comment => {
          console.log(comment)
          // setComment(comment)
        })
    }
    if (parentCommentId) {
      setData(Object.assign({}, data, { parent_comment_id: parentCommentId }))
    }
  }, []) 
  
  const handleSubmit = e => {
    e.preventDefault();
    if (formType === 'edit') {
      processForm(commentId, data);
      // history.push(`/posts/${comment.post_id}`)
    } else {
      processForm(postId, {comment: data});
      history.push(`/posts/${postId}`)
    }
  }

  const update = e => {
    const updateField = { [ e.target.name ] : e.target.value };
    setData(Object.assign({}, data, updateField));
  }
  
  const cta = formType === 'create' ? 'Add Comment' : 'Edit Comment';
  
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="controlledCommentBody">
          <Form.Control as="textarea" name="body" onChange={update} rows={5} />
        </Form.Group>
        <Button variant="primary" type="submit">
          {cta}
        </Button>
      </Form>
    </>
  )
}

export default withRouter(CommentForm)
