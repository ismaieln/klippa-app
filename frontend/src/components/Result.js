import React, { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PlayCountContext } from '../hooks/PlayCountContext'

const Result = () => {
  const { total, setTotal, success, setSuccess, fail, setFail, flag } =
    useContext(PlayCountContext)

  let imgSrc, title
  if (flag) {
    imgSrc = '/images/checkmark.jpg'
    title = 'Go Back'
  } else {
    imgSrc = '/images/wrong.jpg'
    title = 'Try Again'
  }

  const addState = () => {
    setTotal(total + 1)
    if (flag) {
      setSuccess(success + 1)
    } else {
      setFail(fail + 1)
    }
  }

  return (
    <Container>
      <div className='py-3' onClick={addState}>
        <Link to='/' className='text-decoration-none'>
          {title}
        </Link>
      </div>
      <Image src={imgSrc} alt={imgSrc} fluid rounded />
    </Container>
  )
}

export default Result
