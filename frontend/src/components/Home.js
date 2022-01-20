import React, { useContext } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'

const Home = () => {
  const { user } = useContext(GlobalContext)

  return (
    <Container>
      {user ? (
        <Row>
          <h5 className='p-1 text-info'>Welcome {user.name} </h5>
          <Col>
            <p>To continue,</p>
            <p>Please click on play </p>
            <p>
              Then click on <strong>Get New Questions</strong>{' '}
            </p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <Image
              src='/images/happy-child.png'
              alt='happy-child'
              className='images'
              fluid
            />
          </Col>
        </Row>
      ) : (
        <Row>
          <h2 className=''>Please Login To Start The Race </h2>
          <Col>
            <p>Welcome guest, </p>
            <p>
              If you would like to enjoy solving math expressions, please sign
              up or sign in if you have an existing account
            </p>
          </Col>
          <Col md={{ span: 5, offset: 1 }}>
            <Image
              src='/images/thinking-child.png'
              alt='thinking-child'
              className='images'
              fluid
            />
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default Home
