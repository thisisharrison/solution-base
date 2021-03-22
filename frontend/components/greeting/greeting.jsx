import React, { useState, useEffect } from 'react'
import { Alert, Fade } from 'react-bootstrap'
import styled from 'styled-components';

const FloatGreeting = styled(Alert)`
  margin-bottom: 0;
`

const Greeting = ({demo, intro, closeGreeting, demoLogin}) => {
  const [show, setShow] = useState(true);
  const [option, setOption] = useState(true);
  const [cycle, setCycle] = useState(null)

  useEffect(()=> {
    if (!demo) {
      setOption(true);
      clearInterval(cycle);
    } else {
      setCycle(() => setInterval(() => {
        setOption(option => !option);
      }, 7000));
      return(() => {
        clearInterval(cycle);
      })
    }
  }, [demo])

  const handleClose = e => {
    closeGreeting();
    setShow(false);
  };

  
  const message = {
    true: <div>Welcome to SolutionBase, <a href="https://sdgs.un.org/goals"><strong>Click here</strong></a> to learn more about the 17 Goals.</div>,
    // for demo login to showcase features
    false: <div><a href="#" onClick={demoLogin}><strong>Click here</strong></a> to login as demo account.</div>
  }
  if (show) {
    return (
      <FloatGreeting variant="info" dismissible onClose={handleClose} transition={Fade}>
        {message[option]}
      </FloatGreeting>
    )
  } else {
    return (null)
  }
}

export default Greeting;