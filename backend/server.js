import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import expressionsRoutes from './routes/expressionsRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello I am Ismaiel')
})

app.use('/api/expression/', expressionsRoutes)
app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
