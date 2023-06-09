const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../config/ensureLoggedIn')

const goalsCtrl = require('../controllers/goals')
router.get('/', ensureLoggedIn, goalsCtrl.index)
router.get('/new', ensureLoggedIn, goalsCtrl.new)
router.post('/', ensureLoggedIn, goalsCtrl.create)
router.get('/:id', goalsCtrl.show)
router.delete('/:id', goalsCtrl.delete)

module.exports = router
