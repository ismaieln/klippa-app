import express from 'express'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import expressionsRoutes from './routes/expressionsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './utils/errorMessages.js'

dotenv.config()
connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/expression/', expressionsRoutes)
app.use('/user', userRoutes)

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running.... here')
  })
}

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
