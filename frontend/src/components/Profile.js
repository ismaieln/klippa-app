import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import FormContainer from './FormContainer'

const Profile = () => {
  const { user } = useContext(GlobalContext)
  return (
    <FormContainer>
      <Button bg='light' variant='light' className='my-3'>
        <a href='/'> Go Back</a>
      </Button>
      <h1>{user.name}</h1>
      <p>
        <strong>Name: </strong>
        {user.name}
      </p>
      <p>
        <strong>Email: </strong>
        {user.email}
      </p>
      <p>
        <strong>Password: </strong>
        {user.password} *....*
      </p>
      <p>
        <strong>Status: </strong>
        {user.status}
      </p>
      <p>
        <strong>Play History: </strong>
      </p>
    </FormContainer>
  )
}

export default Profile
