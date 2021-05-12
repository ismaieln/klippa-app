import express from 'express'
import asyncHandler from 'express-async-handler'

import Expression from '../models/expressionModel.js'
import choose from '../utils/choose.js'

const router = express.Router()

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const expressions = await Expression.find({})

    const expression = choose(expressions)
    res.json(expressions)
  })
)

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const data = await Expression.findById(req.params.id)
    if (data) {
      res.json(data)
    } else {
      res.status(404).json({ message: 'Data not found' })
    }
  })
)

export default router
