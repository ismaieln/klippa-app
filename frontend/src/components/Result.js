import React, { useContext } from 'react'
import { Container, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../hooks/GlobalContext'
import { PlayCountContext } from '../hooks/PlayCountContext'

const Result = ({ history }) => {
  const { user } = useContext(GlobalContext)
  const { total, setTotal, success, setSuccess, fail, setFail, flag, playCount, setPlayCount, } =
    useContext(PlayCountContext)
if(!user){
  history.push('/')
}
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

    <div>
      <Image src={imgSrc} alt={imgSrc} fluid rounded className='images' /></div>
    </Container>
  )
}

export default Result
