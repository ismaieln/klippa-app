import React, { useContext, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'
import { PlayCountContext } from '../hooks/PlayCountContext'
import fetchQuestions from '../Utils/fetchQuestions'

import Exercises from './Exercises'
import Loader from './Loader'
import StopPlay from './StopPlay'

const Home = ({ history }) => {
  const [submitDisable, setSubmitDisable] = useState(false)
  const { total, success, fail, setFlag } = useContext(PlayCountContext)

  const {
    first,
    setFirst,
    second,
    setSecond,
    third,
    setThird,
    fourth,
    setFourth,
    fifth,
    setFifth,
    loading,
    setLoading,
    playCount,
    expressions,
    setExpressions,
    user,
    setUser,
  } = useContext(GlobalContext)

  const inState = [first, second, third, fourth, fifth]

  localStorage.setItem('answers', JSON.stringify(inState))

  const playInfo = [total, success, fail]

  localStorage.setItem('playHistory', JSON.stringify(playInfo))

  if (!user) {
    const userInfo = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null
    setUser(userInfo)
  }

  const getQuestions = async () => {
    const q = await fetchQuestions()
    setExpressions(q)
    setFirst('')
    setSecond('')
    setThird('')
    setFourth('')
    setFifth('')
  }

  const confirmHandler = (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitDisable(true)
    if (
      first === expressions[0].answer &&
      second === expressions[1].answer &&
      third === expressions[2].answer &&
      fourth === expressions[3].answer &&
      fifth === expressions[4].answer
    ) {
      setFlag(true)
    } else {
      setFlag(false)
    }
    setLoading(false)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitDisable(false)

    history.push('/result')
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
                  inState={inState}
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
          onClick={confirmHandler}
          className='sbg mb-5'
        >
          <strong className='text-info'>Confirm</strong>
        </Col>
        <Col md={4} className='sbg text-center'>
          <Button
            disabled={!submitDisable}
            type='submit'
            onClick={submitHandler}
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
