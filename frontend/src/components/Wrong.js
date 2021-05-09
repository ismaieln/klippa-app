import React from 'react'
import { Button } from 'react-bootstrap'

const Wrong = () => {
  return (
    <div>
      <Button bg='light' variant='light' className='my-3'>
        <a href='/'> Go Back</a>
      </Button>
      <h1>This is Wrong</h1>
    </div>
  )
}

export default Wrong
