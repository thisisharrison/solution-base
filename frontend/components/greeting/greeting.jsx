import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

export default function Greeting({ logout, currentUser}) {
  const unauthorized = (
    <>
      <LinkContainer to='/signup'>
        <Nav.Link>Sign Up</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/login'>
        <Nav.Link>Log In</Nav.Link>
      </LinkContainer>
    </>
  )
  const authorized = (
    <>
      <button onClick={logout}>Log Out</button>
    </>
  )
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand>🌐 SolutionBase</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          {currentUser ? authorized : unauthorized}
          <Nav.Item>
          {currentUser ? `Welcome, ${currentUser.username}` : null}
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  )
}
