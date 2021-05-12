import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { GlobalContext } from '../hooks/GlobalContext'
import FormContainer from './FormContainer'

const Profile = () => {
  const { user } = useContext(GlobalContext)
  return (
    <FormContainer>
      <div className='py-3'>
        <Link to='/' className='text-decoration-none'>
          Go Back
        </Link>
      </div>
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
