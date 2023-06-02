const express = require('express')
const router = express.Router()
const ensureLoggedIn = require('../config/ensureLoggedIn')

const plannerCtrl = require('../controllers/planner')
router.get('/', ensureLoggedIn, plannerCtrl.index)
router.get('/new', ensureLoggedIn, plannerCtrl.new)
router.post('/', ensureLoggedIn, plannerCtrl.create)
router.get('/:id', plannerCtrl.show)
module.exports = router
