const express = require('express')
const data = require('./data/data')

const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})

app.get('/api/guess', (req, res) => {
  res.json(data)
})

app.get('/api/guess/:id', (req, res) => {
  const expr = data.find((p) => p.id === req.params.id)
  res.json(expr)
})

const PORT = 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
