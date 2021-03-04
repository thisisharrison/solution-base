import React, { useState, useEffect } from 'react'
import { Alert, Fade } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const PostNotice = ({ post }) => {
  const [ show, setShow ] = useState(Boolean(post.id))
  
  useEffect(() => {
    if (Boolean(post.id)) {
      setShow(!show)
    }
  }, [post])

  const close = e => {
    setShow(false)
  }

  if (show) {
    return (
      <>
        <Alert variant="success" onClose={close} dismissible transition={Fade}>
          <Alert.Heading>Your post is up!</Alert.Heading>
          <p>
            Click{' '}
            <LinkContainer to={`/posts/${post.id}`} onClick={close}>
              <Alert.Link>HERE</Alert.Link>
            </LinkContainer>
            {' '} to see your post.
          </p>
        </Alert>
      </>
    )
  } else {
    return null;
  }
}