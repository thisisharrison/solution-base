import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Logo from './logo_sb.svg';
import styled from 'styled-components'

const MyContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`

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
      <MyContainer>
        <Navbar bg="light" variant="light" className="justify-content-between">
          <LinkContainer to="/">
            <Navbar.Brand><Logo/></Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto justify-content-end">
            {currentUser ? authorized : unauthorized}
            <Nav.Item>
            {currentUser ? `Welcome, ${currentUser.username}` : null}
            </Nav.Item>
          </Nav>
        </Navbar>
      </MyContainer>
    </>
  )
}
