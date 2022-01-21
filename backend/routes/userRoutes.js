import express from 'express'

import {
  getUsers,
  login,
  register,
  updateUser,
} from '../controllers/userControllers.js'

const router = express.Router()

router.get('/', getUsers)

router.put('/:id', updateUser)

router.post('/login', login)

router.route('/').post(register)

export default router
