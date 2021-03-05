import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { fetchComment } from '../../util/comment_api_util';

const CommentForm = ({ formType, commentId, postId, processForm }) => {
  
  const [ data, setData ] = useState({});
  const [ comment, setComment ] = useState({});

  useEffect(() => {
    if (formType === 'edit') {
      // fetch the comment
      fetchComment(commentId)
        .then(comment => {
          // setComment(comment)
        })
    }
  }, []) 
  
  const handleSubmit = () => {
    if (formType === 'edit') {
      processForm(commentId, data);
      // history.push(`/posts/${comment.post_id}`)
    } else {
      processForm(postId, data);
      history.push(`/posts/${postId}`)
    }
  }

  const update = e => {
    const updateField = { [ e.target.name ] : e.target.value };
    setData(Object.assign({}, data, updateField));
  }
  
  const cta = formType === 'create' ? 'Add Comment' : 'Edit Comment';
  
  return (
    <div>
      
    </div>
  )
}

export default withRouter(CommentForm)
