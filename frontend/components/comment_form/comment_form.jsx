import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchComment } from '../../util/comment_api_util';
import { Form, Button } from 'react-bootstrap'
import styled from 'styled-components';

// #  author_id         :integer          not null
// #  post_id           :integer          not null
// #  parent_comment_id :integer
// #  body              :string           not null

const CommentButton = styled(Button)`
  color: #62BCCC !important;
  &:active {
    background-color: #62BCCC !important;
    color: #fff !important;
  }
`
const CommentButtonWrap = styled.div`
  float: right;
  margin-bottom: 1.2rem;
`

const CommentForm = ({ formType, open, commentId, postId, parentCommentId, _comment, processForm, history, replyFormClose, newFormClose }) => {
  
  const [ data, setData ] = useState({body: ''});
  const [ comment, setComment ] = useState({});
  
  useEffect(() => {
    if (formType === 'edit') {
      if (!_comment) {
        // fetch the comment
        fetchComment(commentId)
          .then(res => {
            setComment(res)
        })
      } else {
        setComment(_comment)
      }
    }
    if (parentCommentId || comment) {
      const parent_comment_id = parentCommentId || comment.parent_comment_id;
      setData(Object.assign({}, data, { parent_comment_id }))
    }
  }, []) 
  
  const handleSubmit = e => {
    e.preventDefault();
    if (formType === 'edit') {
      processForm(commentId, {comment: data});
      history.push(`/posts/${comment.postId}`);
    } else {
      processForm(postId, {comment: data});
      history.push(`/posts/${postId}`);
    }
  }

  const handleClose = e => {
    replyFormClose();
    newFormClose();
  }

  const update = e => {
    const updateField = { [ e.target.name ] : e.target.value };
    setData(Object.assign({}, data, updateField));
  }
  
  const cta = formType === 'create' ? 'Add Comment' : 'Edit Comment';
  
  if (!open) {
    return null;
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="controlledCommentBody">
          <Form.Control as="textarea" name="body" onChange={update} rows={5} defaultValue={formType === 'edit' ? comment.body : ''}/>
        </Form.Group>
        <div className='clearfix'>
          <CommentButtonWrap>
            <CommentButton variant="transparent" onClick={handleClose}>
              Cancel
            </CommentButton>
            <CommentButton variant="transparent" type="submit" disabled={!Boolean(data.body.length)}>
              {cta}
            </CommentButton>
          </CommentButtonWrap>
        </div>
      </Form>
    </>
  )
}

export default withRouter(CommentForm)
