import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Wrong = () => {
  return (
    <Container>
      <div className='py-3'>
        <Link to='/' className='text-decoration-none'>
          Go Back
        </Link>
      </div>
      <h1>This is Wrong</h1>
      <Image src='/images/wrong.jpg' alt='wrong' fluid />
    </Container>
  )
}

export default Wrong
