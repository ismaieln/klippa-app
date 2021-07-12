import React, { useContext } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import { GlobalContext } from '../hooks/GlobalContext'


const Home = () => {
  const { user } = useContext(GlobalContext)

  return (
    <Container>
      {user ? (
        <Row className='p-1 text-info'>
        Welcome {user.name}
        <Image src='/images/002a.png' alt='game' fluid rounded  />
      </Row>) : (
        <div >
          <h2 className='blink'>Please Login To Start The Race </h2>
      <Image src='/images/001.png' alt='game' fluid rounded />
        </div>
      )}
    </Container>
  )
}

export default Home
