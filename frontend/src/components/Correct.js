import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Correct = () => {
  return (
    <Container>
      <div className='py-3'>
        <Link to='/' className='text-decoration-none'>
          Go Back
        </Link>
      </div>
      <h1>That's correct</h1>
      <Image src='/images/checkmark.jpg' alt='correct' fluid rounded />
    </Container>
  )
}

export default Correct
