const Goals = require('../models/goal')
// const { create } = require('../models/planner')

module.exports = {
  new: newGoal,
  create,
  index
}
function index(req, res) {
  const goals = Goals.find({})
  console.log(goals)
  res.render('goals/index', {
    goals
  })
}

function newGoal(req, res) {
  res.render('goals/new', { errorMsg: '' })
}

async function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  req.body.cast = req.body.cast.trim()
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    await Goals.create(req.body)
    res.redirect('/goals')
  } catch (err) {
    res.render('goals/new', { errorMsg: err.message })
  }
}
