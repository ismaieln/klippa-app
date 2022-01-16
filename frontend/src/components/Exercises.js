import React from 'react'
import { Col, Row } from 'react-bootstrap'

import useAnswer from '../hooks/useAnswer'

const Exercises = ({ id, expression, inState }) => {
  const [valueTyped] = useAnswer(id)

  return (
    <Row className='my-3 mx-auto align-items-center' key={id}>
      <Col md={4} xs={12} className='rounded py-2 my-auto sbq'>
        <strong>{expression}</strong>
      </Col>
      <Col lg={2} md={2} xs={12} className='text-center py-2 my-auto'>
        <h2>=</h2>
      </Col>
      <Col md={6} xs={12} className='sba'>
        <input onChange={valueTyped} value={inState[id]} className='inp' />
      </Col>
    </Row>
  )
}

export default Exercises
