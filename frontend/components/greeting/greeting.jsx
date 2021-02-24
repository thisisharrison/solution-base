import React from 'react'
import { Link } from 'react-router-dom'

export default function Greeting({ logout, currentUser}) {
  const unauthorized = (
    <>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </>
  )
  const authorized = (
    <>
      <button onClick={logout}>Log Out</button>
    </>
  )
  return (
    <div>
      <nav>
        Welcome to 🌐 SolutionBase{currentUser ? `, ${currentUser.username}` : null}
        {currentUser ? authorized : unauthorized}
      </nav>
    </div>
  )
}
