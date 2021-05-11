import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import expressions from './data/expressions.js'

import User from './models/userModel.js'
import Expression from './models/expressionModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Expression.deleteMany()
    await User.deleteMany()

    await User.insertMany(users)
    await Expression.insertMany(expressions)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Expression.deleteMany()
    await User.deleteMany()

    console.log('Data Destroyed!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
