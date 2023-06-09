const express = require('express')
const router = express.Router()
const notesCtrl = require('../controllers/notes')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// router.post('goals/:id/notes', ensureLoggedIn, notesCtrl.create)
// router.post('planner/:id/notes', ensureLoggedIn, notesCtrl.create)
router.get('/', ensureLoggedIn, notesCtrl.show)
module.exports = router
