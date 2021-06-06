import express from 'express'

import {
  getExpressionById,
  getExpressions,
} from '../controllers/expressionsControllers.js'

const router = express.Router()

router.get('/', getExpressions)

router.get('/:id', getExpressionById)

export default router
