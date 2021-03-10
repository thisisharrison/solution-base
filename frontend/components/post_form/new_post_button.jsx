import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { NewPost } from './styled_button'

const NewPostButton = ({ pathname="/new-post" ,problem_id = false, cta = "Add Post", post = {} }) => {
  return (
    <>
      <LinkContainer to={{ pathname: pathname, state: { problem_id: problem_id , post: post } }}>
        <NewPost>{cta === 'Add Post' ? '+ Add your idea' : cta }</NewPost>
      </LinkContainer>
    </>
  )
}


export default NewPostButton
