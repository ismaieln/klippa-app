import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const StopPlay = () => {
  return (
    <Container>
      <Row className='justify-content-md-center bg-info'>
        <Col xs={12} md={8}>
          <h1>STOP PLAYING</h1>
          <h1>YOU TRIED THREE TIMES</h1>
          <h1>PLEAS LOGIN DIFFERENT USER</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default StopPlay
