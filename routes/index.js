const express = require('express')
const router = express.Router()
const passport = require('passport')

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
    successRedirect: '/header',
    failureRedirect: '/header'
  })
)
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/home')
  })
})
