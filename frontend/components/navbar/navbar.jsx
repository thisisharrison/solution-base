import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

export default function NavBar({ logout, currentUser}) {
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
      <Container>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <LinkContainer to="/">
            <Navbar.Brand>🌐 SolutionBase</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto justify-content-end">
            {currentUser ? authorized : unauthorized}
            <Nav.Item>
            {currentUser ? `Welcome, ${currentUser.username}` : null}
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </>
  )
}
