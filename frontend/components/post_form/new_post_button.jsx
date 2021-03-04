import React from 'react'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const NewPostButton = ({ problem_id = false, cta = "Add Post" }) => {
  return (
    <>
      <LinkContainer to={{ pathname: "/new-post", state: { problem_id: problem_id } }}>
        <Button variant="success">{cta}</Button>
      </LinkContainer>
    </>
  )
}


export default NewPostButton
