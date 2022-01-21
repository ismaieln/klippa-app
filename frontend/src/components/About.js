import React from 'react'
import { Button, Container } from 'react-bootstrap'

const About = ({ history }) => {
  const goTo = () => history.goBack()
  return (
    <Container>
      <div className='py-3'>
        <Button onClick={goTo} className='text-decoration-none bg-none'>
          Go Back
        </Button>
      </div>
      <Container className='p-3'>
        <h1>The Game</h1>
        <p>
          After you log in, you will choose five equations, by pressing the{' '}
          <strong>Get New Questions</strong> button, so, type the answers on the
          second side of the equation.
          <br />
          The game is very simple, you just have to learn something about math.
          <br />
          You have three tries for each group of questions, the result will be
          registered on your database.
          <br />
          So enjoy this beautiful adventure
        </p>
        <h1>The Creator</h1>
        <p>
          This project has been worked on as part of the post-graduation
          training for <strong>Hack Your Future.</strong>
          <br />
          This is the effort of one student, taking into account the
          observations of HYF's mentors.
          <br />
        </p>
      </Container>
    </Container>
  )
}

export default About
