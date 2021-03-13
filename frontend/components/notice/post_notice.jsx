import React, { useState, useEffect } from 'react'
import { Alert, Fade } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const PostNotice = ({ post }) => {
  const [ show, setShow ] = useState(Boolean(post.id))
  const [ timer, setTimer ] = useState(null);
  
  useEffect(() => {
    if (Boolean(post.id)) {
      setShow(!show)
    }
    const timeoutId = setTimeout(() => close(), 5000);
    setTimer(timeoutId);
  }, [post])

  const close = e => {
    setShow(false)
    clearTimeout(timer);
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