import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const NewPostButton = props => {
  return (
    <>
      <LinkContainer to="/new-post">
        <Button variant="success">Add Post</Button>
      </LinkContainer>
    </>
  )
}


export default NewPostButton
