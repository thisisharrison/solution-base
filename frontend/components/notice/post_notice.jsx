import React, { useState, useEffect } from 'react'
import { Alert, Fade } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export const PostNotice = ({ post }) => {
  const [ show, setShow ] = useState(() => Boolean(post.id))
  const [ timer, setTimer ] = useState(null);
  
  useEffect(() => {
    if (Boolean(post.id)) {
      setShow(!show)
      const timeoutId = setTimeout(() => close(), 10000);
      setTimer(timeoutId);
    }
  }, [post])

  const close = e => {
    setShow(false)
    clearTimeout(timer);
  }

  if (show) {
    return (
      <>
        <Alert variant="success" onClose={close} dismissible transition={Fade}>
            <strong>Your post is up! </strong>
            <LinkContainer to={`/posts/${post.id}`} onClick={close}>
              <Alert.Link>Click here</Alert.Link>
            </LinkContainer>
            {' '} to see your post.
        </Alert>
      </>
    )
  } else {
    return null;
  }
}