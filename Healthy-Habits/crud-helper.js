require('dotenv').config()
// Connect to the database
require('./config/database')
const Goal = require('../models/goal')
const Planner = require('./models/planner')
