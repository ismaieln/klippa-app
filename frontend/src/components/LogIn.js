import React, { useContext, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import FormContainer from './FormContainer'
import axios from 'axios'
import Message from './Message'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const LogIn = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser, error, setError, loading, setLoading } =
    useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()

    const fetchUser = async () => {
      try {
        setLoading(true)
        const { data } = await axios.post(
          '/api/user/login',
          { email, password },
          { headers: { 'Content-Type': 'application/json' } }
        )
        localStorage.setItem('userInfo', JSON.stringify(data))
        setLoading(false)
        setUser(data)
        setError('')
        history.push('/')
      } catch (error) {
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        )
        setLoading(false)
      }
    }
    fetchUser()
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
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

        <Button type='submit' variant='info' className='mt-2 btn btn-block'>
          Sign In
        </Button>

        <Row className='py-3'>
          <Col>
            New Customer? <Link to='/register'>Register</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  )
}

export default LogIn
