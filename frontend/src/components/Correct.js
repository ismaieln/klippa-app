import React from 'react'
import { Button } from 'react-bootstrap'

const Correct = () => {
  return (
    <div>
      <Button bg='light' variant='light' className='my-3'>
        <a href='/'> Go Back</a>
      </Button>
      <h1>That's correct</h1>
    </div>
  )
}

export default Correct
