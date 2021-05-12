import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import useAnswer from '../hooks/useAnswer'

const Exercises = ({ _id, expression }) => {
  const [valueTyped] = useAnswer(_id)

  return (
    <Row className='my-3 justify-content-between mx-auto px-2' key={_id}>
      <Col md={4} className=' shadow bg-body rounded my-2'>
        <strong>{expression}</strong>
      </Col>
      <Col>
        <Form.Control
          onChange={valueTyped}
          plaintext
          placeholder='.....'
          className=' shadow bg-body rounded my-2 px-2'
        />
      </Col>
    </Row>
  )
}

export default Exercises
