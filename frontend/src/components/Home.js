import React, { useContext } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
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
  } = useContext(GlobalContext)

  const submitHandler = (e) => {
    e.preventDefault()
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
    <div>
      <Form onSubmit={submitHandler}>
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
        {!flag ? (
          <Link to='/correct'>
            <Button variant='info' type='submit'>
              Submit
            </Button>
          </Link>
        ) : (
          <Link to='/wrong'>
            <Button variant='info' type='submit'>
              Submit
            </Button>
          </Link>
        )}
      </Form>
    </div>
  )
}

export default Home
