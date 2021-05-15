import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import fetchQuestions from '../hooks/fetchQuestions'
import Exercises from './Exercises'
import Loader from './Loader'
import StopPlay from './StopPlay'

const Home = ({ history }) => {
  const [submitDisable, setSubmitDisable] = useState(false)

  const {
    answOne,
    answTwo,
    answThree,
    answFour,
    answFive,
    loading,
    setLoading,
    playCount,
    setPlayCount,
    expressions,
    setExpressions,
    user,
    flag,
    setFlag,
  } = useContext(GlobalContext)

  const getQuestions = async () => {
    const q = await fetchQuestions()
    setExpressions(q)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitDisable(true)
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
    setLoading(false)
  }

  const confirmHandler = (e) => {
    e.preventDefault()
    setSubmitDisable(false)
    if (flag) {
      setPlayCount(0)
      history.push('/correct')
    } else {
      setPlayCount(playCount + 1)
      history.push('/wrong')
    }
  }

  return (
    <Container>
      <Row>
        <Button
          variant='info'
          className='sbga'
          disabled={!user}
          onClick={getQuestions}
        >
          Get Questions
        </Button>
      </Row>
      {playCount > 5 && <StopPlay />}
      {loading && <Loader />}
      {user && (
        <Container>
          <Row>
            <h3 className='px-2 py-4'>Enter the answers in the empty places</h3>
          </Row>
          <Row className='my-3 justify-content-between mx-auto text-info'>
            <Col as='h4' md={4} xs={5} className='text-center'>
              Questions
            </Col>
            <Col lg={2} md={2} xs={1}></Col>
            <Col as='h4' md={6} xs={5} className='text-center'>
              Answers
            </Col>
          </Row>
          {expressions.length !== 0 && (
            <>
              {expressions.map((item) => (
                <Exercises
                  key={item._id}
                  id={expressions.indexOf(item)}
                  expression={item.question}
                />
              ))}
            </>
          )}
        </Container>
      )}
      <Row className='px-3 justify-content-center'>
        <Col
          as='button'
          type='submit'
          disabled={!user}
          md={4}
          onClick={submitHandler}
          className='sbg mb-5'
        >
          <strong className='text-info'>Confirm</strong>
        </Col>
        <Col md={4} className='sbg'>
          <Button
            disabled={!submitDisable}
            type='submit'
            onClick={confirmHandler}
            className='sbg mb-5 bg-light'
          >
            <strong className='text-info'>Submit</strong>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
