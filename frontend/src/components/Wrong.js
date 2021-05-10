import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import Images from '../images/Images'

const Wrong = () => {
  return (
    <Container>
      <Button bg='light' variant='light' className='my-3'>
        <a href='/'> Try Again</a>
      </Button>
      <h1>This is Wrong</h1>
      <Image src={Images[0].src} alt='wrong' fluid />
    </Container>
  )
}

export default Wrong
