import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const NewPostButton = ({ pathname="/new-post" ,problem_id = false, cta = "Add Post", post = {} }) => {
  return (
    <>
      <LinkContainer to={{ pathname: pathname, state: { problem_id: problem_id , post: post } }}>
        <Button variant="success">{cta}</Button>
      </LinkContainer>
    </>
  )
}


export default NewPostButton
