import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

import axios from 'axios'

const Home = () => {
  const [expressions, setExpressions] = useState([])
  const [answOne, setAnswOne] = useState([])
  const [answTwo, setAnswTwo] = useState([])
  const [answThree, setAnswThree] = useState([])
  const [answFour, setAnswFour] = useState([])
  const [answFive, setAnswFive] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    let count
    if (answOne === expressions[0].answer) {
      count = count + 1
    }
    if (answTwo === expressions[1].answer) {
      count = count + 1
    }
    if (answThree === expressions[2].answer) {
      count = count + 1
    }
    if (answFour === expressions[3].answer) {
      count = count + 1
    }
    if (answFive === expressions[4].answer) {
      count = count + 1
    }
    console.log(count)
    if (count < 5) {
      console.log('wrong')
    } else {
      console.log('Correct')
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/guess')
      setExpressions(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Form onSubmit={submitHandler}>
        {expressions.length !== 0 && (
          <>
            <Form.Group
              as={Row}
              className='my-3 justify-content-between mx-auto px-2'
              key={expressions[0].id}
            >
              <Form.Label
                column
                md={4}
                className=' shadow bg-body rounded my-2'
              >
                {expressions[0].question}
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={(e) => setAnswOne(e.target.value)}
                  plaintext
                  className=' shadow bg-body rounded my-2'
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='my-3 justify-content-between mx-auto px-2'
              key={expressions[1].id}
            >
              <Form.Label
                column
                md={4}
                className=' shadow bg-body rounded my-2'
              >
                {expressions[1].question}
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={(e) => setAnswTwo(e.target.value)}
                  plaintext
                  className=' shadow bg-body rounded my-2'
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='my-3 justify-content-between mx-auto px-2'
              key={expressions[2].id}
            >
              <Form.Label
                column
                md={4}
                className=' shadow bg-body rounded my-2'
              >
                {expressions[2].question}
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={(e) => setAnswThree(e.target.value)}
                  plaintext
                  className=' shadow bg-body rounded my-2'
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='my-3 justify-content-between mx-auto px-2'
              key={expressions[3].id}
            >
              <Form.Label
                column
                md={4}
                className=' shadow bg-body rounded my-2'
              >
                {expressions[3].question}
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={(e) => setAnswFour(e.target.value)}
                  plaintext
                  className=' shadow bg-body rounded my-2'
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className='my-3 justify-content-between mx-auto px-2'
              key={expressions[4].id}
            >
              <Form.Label
                column
                md={4}
                className=' shadow bg-body rounded my-2'
              >
                {expressions[4].question}
              </Form.Label>
              <Col>
                <Form.Control
                  onChange={(e) => setAnswFive(e.target.value)}
                  plaintext
                  className=' shadow bg-body rounded my-2'
                />
              </Col>
            </Form.Group>
          </>
        )}
        <Button variant='info' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Home
