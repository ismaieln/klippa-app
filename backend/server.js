import express from 'express'
import dotenv from 'dotenv'
import expression from './data/expression.js'

const app = express()

app.get('/', (req, res) => {
  res.send('hello I am Ismaiel')
})

app.get('/api/guess', (req, res) => {
  res.json(expression)
})

app.get('/api/guess/:id', (req, res) => {
  const data = expression.find((p) => p.id === req.params.id)
  res.json(data)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
