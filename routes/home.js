const express = require('express')
const router = express.Router()

const homeCtrl = require('../controllers/home')
router.get('/', homeCtrl.index)
router.get('/new', homeCtrl.new)

router.post('/', homeCtrl.create)

module.exports = router
