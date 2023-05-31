// Load express
const express = require('express')
const path = require('path')
// Create express app
const app = express()
const session = require('express-session')
const passport = require('passport')

require('dotenv').config()
require('./config/database')
require('./config/passport')

const indexRouter = require('./routes/index')
const goalsRouter = require('./routes/goals')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(function (req, res, next) {
  res.locals.user = req.user
})

app.use('/', indexRouter)
app.use('/goals', goalsRouter)

app.use(function (req, res, next) {
  res.locals.user = req.user
  next()
})

// app.get('/', function (req, res) {
//   res.send('<h1>Healthy Habits</h2>')
// })

// app.get('/home', function (req, res) {
//   res.render('home')
// })

app.listen(3000, function () {
  console.log('Listening on port 3000')
})
