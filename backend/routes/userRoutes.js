import express from 'express'
import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'

import User from '../models/userModel.js'

const router = express.Router()

// Get all users
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
  })
)

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      status: user.status,
      token: jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
        expiresIn: '30h',
      }),
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password,
  })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      status: user.status,
      token: jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, {
        expiresIn: '30h',
      }),
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

const updateRecord = asyncHandler(async (req, res) => {
  const { playHistory } = req.body

  const user = await User.updateOne({
    playHistory,
  })

  if (user) {
    res.status(201).json({
      playHistory: user.playHistory,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

router.post('/login', login)
router.put('/user', updateRecord)

router.route('/').post(register)

export default router
