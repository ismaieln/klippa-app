import React, { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PlayCountContext } from '../hooks/PlayCountContext'

const Result = () => {
  const { total, setTotal, success, setSuccess, fail, setFail, flag, playCount, setPlayCount, } =
    useContext(PlayCountContext)

  let imgSrc, title,textA
  if (flag) {
    imgSrc = '/images/excited-boy.png'
    title = 'Go Back'
    textA='Yes, That is Correct'
  } else {
    imgSrc = '/images/counting.png'
    title = 'Try Again'
    textA='No, That is Wrong'
  }

  const addState = () => {
    setTotal(total + 1)
    setPlayCount(playCount+1)
    if (flag) {
      setSuccess(success + 1)
    } else {
      setFail(fail + 1)
    }
  }

  return (
    <Container>
      <div className='py-3' onClick={addState}>
        <Link to='/play' className='text-decoration-none'>
          {title}
        </Link>
      </div>
      <h2>{textA}</h2>
      <Image src={imgSrc} alt={imgSrc} fluid rounded  />
    </Container>
  )
}

export default Result
