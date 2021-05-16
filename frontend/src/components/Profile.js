import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
      {user && (
        <Container>
          <h1>{user.name}'s Information</h1>
          <Row>
            <Col>
              <strong>ID: </strong>
            </Col>
            <Col>{user._id}</Col>
          </Row>
          <Row>
            <Col>
              <strong>Name: </strong>
            </Col>
            <Col>{user.name}</Col>
          </Row>
          <Row>
            <Col>
              <strong>Email: </strong>
            </Col>
            <Col>{user.email}</Col>
          </Row>
          <Row>
            <Col>
              <strong>Password: </strong>
            </Col>
            <Col>{user.password} *****</Col>
          </Row>

          <Row>
            <Col>
              <strong>Play History: </strong>
            </Col>
            <Col>{user.playHistory}</Col>
          </Row>
        </Container>
      )}
    </FormContainer>
  )
}

export default Profile
