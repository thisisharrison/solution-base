import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const HeroBackground = styled.div`
  background-color: black;
  color: white;
  width: 100%;
  height: 22rem;
  margin-bottom: 2rem;
  & h1 {
    padding-top: 5rem;
  }
  & h3 {
    line-height: 1.3;
  }
`

export default function Hero() {
  return (
    <div>
      <HeroBackground>
        <Container>
          <h1>SolutionBase solves global sustainable problems</h1>
          <h3>We have solvers around the world joined our platfrom<br></br>
          to work on urgent issues.</h3>
        </Container>
      </HeroBackground>
    </div>
  )
}