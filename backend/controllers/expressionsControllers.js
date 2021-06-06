import expressAsyncHandler from 'express-async-handler'
import Expression from '../models/expressionModel.js'
import choose from '../utils/choose.js'

export const getExpressions = expressAsyncHandler(async (req, res) => {
  const expressions = await Expression.find({})

  const expression = choose(expressions)
  res.json(expression)
})

export const getExpressionById = expressAsyncHandler(async (req, res) => {
  const data = await Expression.findById(req.params.id)
  if (data) {
    res.json(data)
  } else {
    res.status(404).json({ message: 'Data not found' })
  }
})
