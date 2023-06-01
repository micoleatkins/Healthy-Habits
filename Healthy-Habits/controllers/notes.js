const Goal = require('../models/goal')
const Planner = require('../models/planner')

module.exports = {
  show
}

async function show(req, res) {
  const goals = await Goal.find()
  const plans = await Planner.find()
  res.render('notes/index', { title: 'Daily Goal', goals, plans })
}
