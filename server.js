// Load express
const express = require('express')

// Create express app
const app = express()

app.get('/', function (req, res) {
  res.send('<h1>Healthy Habits</h2>')
})
app.listen(3000, function () {
  console.log('Listening on port 3000')
})
