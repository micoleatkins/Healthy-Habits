const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/planner', function (req, res, next) {
  res.redirect('/planner')
})

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
    // prompt: 'select_account'
  })
)
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/planner',
    failureRedirect: '/'
  })
)
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/')
  })
})

module.exports = router
