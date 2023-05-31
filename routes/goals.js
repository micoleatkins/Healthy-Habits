const express = require('express')
const router = express.Router()

const goalsCtrl = require('../controllers/goals')
router.get('/', goalsCtrl.index)
router.get('/new', goalsCtrl.new)

router.post('/', goalsCtrl.create)

module.exports = router
