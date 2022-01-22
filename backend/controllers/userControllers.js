import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'

// Get all users GET
export const getUsers = expressAsyncHandler(async (req, res) => {
  const users = await User.find({})
  res.json(users)
})

// login a user POST
export const login = expressAsyncHandler(async (req, res) => {
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

// register user POST
export const register = expressAsyncHandler(async (req, res) => {
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

// update user PATCH
export const updateUser = expressAsyncHandler(async (req, res) => {
  const { user } = req.body
  const userId = user._id

  const updateUser = await User.findById(userId)
  const record = updateUser.playHistory[0]
  if (updateUser) {
    record.total = user.playHistory[0].total
    record.success = user.playHistory[0].success
    record.fail = user.playHistory[0].fail
    await User.save()
    console.log(updateUser)
  } else {
    console.log('ismaielN')
  }
})
