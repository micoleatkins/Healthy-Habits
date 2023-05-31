const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/', function (req, res, next) {
  res.redirect('/home')
})

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
  })
)
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/goals',
    failureRedirect: '/goals'
  })
)
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/home')
  })
})

module.exports = router
