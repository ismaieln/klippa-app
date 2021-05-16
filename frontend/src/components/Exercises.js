import React from 'react'
import { Col, Row } from 'react-bootstrap'

import useAnswer from '../hooks/useAnswer'

const Exercises = ({ id, expression, inState }) => {
  const [valueTyped] = useAnswer(id)

  return (
    <Row className='my-3 justify-content-between mx-auto px-2' key={id}>
      <Col md={4} xs={5} className='rounded py-2 my-auto sbq'>
        <strong>{expression}</strong>
      </Col>
      <Col lg={2} md={2} xs={1} className='text-center py-2 my-auto'>
        <h2>=</h2>
      </Col>
      <Col md={6} xs={5} className='sba'>
        <input onChange={valueTyped} value={inState[id]} className='inp' />
      </Col>
    </Row>
  )
}

export default Exercises
