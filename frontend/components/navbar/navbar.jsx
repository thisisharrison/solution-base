import React from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Logo from './logo_sb.svg';
import styled from 'styled-components'
import { WhiteNavbar } from './navbar_style'
import Divider from '@material-ui/core/Divider';

const MyContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`

export default function NavBar({ logout, currentUser}) {
  const unauthorized = (
    <>
      <LinkContainer to='/login'>
        <Nav.Link>LOG IN</Nav.Link>
      </LinkContainer>
      <Divider orientation="vertical" flexItem="true"/>
      <LinkContainer to='/signup'>
        <Nav.Link>SIGN UP</Nav.Link>
      </LinkContainer>
    </>
  )
  const authorized = (
    <>
      <Nav.Link as="button" onClick={logout} className="logout">LOG OUT</Nav.Link>
    </>
  )
  return (
    <>
      <WhiteNavbar bg="light" variant="light" className="justify-content-between">
        <MyContainer>
          <LinkContainer to="/">
            <Navbar.Brand><Logo/></Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto justify-content-end">
            {currentUser ? authorized : unauthorized}
            <Nav.Link>
            {currentUser && `${currentUser.username}`}
            </Nav.Link>
          </Nav>
        </MyContainer>
      </WhiteNavbar>
    </>
  )
}
