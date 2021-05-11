import React, { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../hooks/GlobalContext'
import useFetch from '../hooks/useFetch'
import Exercises from './Exercises'
import Loader from './Loader'

const Home = () => {
  const [expressions] = useFetch()
  const {
    answOne,
    answTwo,
    answThree,
    answFour,
    answFive,
    flag,
    loading,
    setLoading,
    setFlag,
    submitDisable,
    setSubmitDisable,
  } = useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitDisable(!submitDisable)
    if (
      answOne === expressions[0].answer &&
      answTwo === expressions[1].answer &&
      answThree === expressions[2].answer &&
      answFour === expressions[3].answer &&
      answFive === expressions[4].answer
    ) {
      setFlag(true)
      console.log('correct')
    } else {
      setFlag(false)
      console.log('wrong')
    }
    setLoading(false)
    console.log(`${answOne} ${expressions[0].answer} `)
    console.log(`${answTwo}  ${expressions[1].answer} `)
    console.log(`${answThree}  ${expressions[2].answer}`)
    console.log(`${answFour}  ${expressions[3].answer}`)
    console.log(`${answFive}  ${expressions[4].answer}`)
  }

  return (
    <Container>
      {loading && <Loader />}
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
            className='shadow mb-5 bg-body rounded'
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
