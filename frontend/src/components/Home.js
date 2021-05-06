import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import data from '../Utils/data'

const Home = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <div>
      {
        <Form onSubmit={submitHandler}>
          {data.map((item) => (
            <Row className='my-3 justify-content-between' key={item.id}>
              <Col
                sm={5}
                md={4}
                lg={3}
                as='button'
                className=' shadow bg-body rounded'
              >
                {item.question}
              </Col>
              <Col sm={5} md={7} lg={8} className='bg-light'>
                <input type='text' required />
              </Col>
            </Row>
          ))}
          <Button variant='info' type='submit'>
            Submit
          </Button>
        </Form>
      }
    </div>
  )
}

export default Home
