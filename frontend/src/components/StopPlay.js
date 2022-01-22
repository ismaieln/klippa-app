import React, { useContext } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'

const StopPlay = ({ history }) => {
  const { user } = useContext(GlobalContext)
  if (!user) {
    history.push('/')
  }
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8}>
          <h1>YOU TRIED THREE TIMES</h1>
          <h3>PLEASE SIGN OUT AND TRY AGAIN LATER</h3>
        </Col>
        <Image
          src='/images/sad.png'
          alt='{imgSrc}'
          fluid
          rounded
          className='w-50'
        />
      </Row>
    </Container>
  )
}

export default StopPlay
