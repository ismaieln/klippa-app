import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Images from '../images/Images'

const Correct = () => {
  return (
    <Container>
      <Button bg='light' variant='light' className='my-3'>
        <a href='/'> Go Back</a>
      </Button>
      <h1>That's correct</h1>
      <Image src={Images[1].src} alt='correct' fluid rounded />
    </Container>
  )
}

export default Correct
