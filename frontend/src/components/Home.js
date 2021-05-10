import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../hooks/GlobalContext'
import useFetch from '../hooks/useFetch'
import Exercises from './Exercises'

const Home = () => {
  const [expressions] = useFetch()
  const {
    answOne,
    answTwo,
    answThree,
    answFour,
    answFive,
    flag,
    setFlag,
    submitDisable,
    setSubmitDisable,
  } = useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitDisable(!submitDisable)
    if (
      answOne === expressions[0].answer &&
      answTwo === expressions[1].answer &&
      answThree === expressions[2].answer &&
      answFour === expressions[3].answer &&
      answFive === expressions[4].answer
    ) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }

  return (
    <Container>
      {expressions.length !== 0 && (
        <Container>
          <Exercises
            _id={expressions[0].id}
            expression={expressions[0].question}
          />
          <Exercises
            _id={expressions[1].id}
            expression={expressions[1].question}
          />
          <Exercises
            _id={expressions[2].id}
            expression={expressions[2].question}
          />
          <Exercises
            _id={expressions[3].id}
            expression={expressions[3].question}
          />
          <Exercises
            _id={expressions[4].id}
            expression={expressions[4].question}
          />
        </Container>
      )}
      <Row className='px-3'>
        <Col>
          <Button
            variant='info'
            type='submit'
            size='lg'
            onClick={submitHandler}
            className='shadow mb-5 bg-body rounded'
          >
            Confirm
          </Button>
        </Col>
        <Col>
          <Button
            variant='info'
            type='submit'
            size='lg'
            disabled={!submitDisable}
            onClick={submitHandler}
            className='shadow mb-5 bg-body rounded text-decoration-none'
          >
            {flag ? (
              <Link to='/correct' className='text-decoration-none'>
                Submit
              </Link>
            ) : (
              <Link to='/wrong' className='text-decoration-none'>
                Submit
              </Link>
            )}
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
