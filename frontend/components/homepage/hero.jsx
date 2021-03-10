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
          <h1>SolutionBase solve global sustainable problems</h1>
          <h3>We have more than 2500 solvers joined our platfrom,<br></br>
          currently solved more than 50 global issues.</h3>
        </Container>
      </HeroBackground>
    </div>
  )
}