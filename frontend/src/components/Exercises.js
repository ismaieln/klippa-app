import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import useAnswer from '../hooks/useAnswer'

const Exercises = ({ _id, expression }) => {
  const [valueTyped] = useAnswer(_id)

  return (
    <Form.Group
      as={Row}
      className='my-3 justify-content-between mx-auto px-2'
      key={_id}
    >
      <Form.Label column md={4} className=' shadow bg-body rounded my-2'>
        {expression}
      </Form.Label>
      <Col>
        <Form.Control
          onChange={valueTyped}
          plaintext
          className=' shadow bg-body rounded my-2 px-2'
        />
      </Col>
    </Form.Group>
  )
}

export default Exercises
