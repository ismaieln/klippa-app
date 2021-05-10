import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import FormContainer from './FormContainer'

const LogIn = () => {
  const { email, setEmail, password, setPassword } = useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(`${email} for ${password}`)
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-2 btn btn-block'>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LogIn
