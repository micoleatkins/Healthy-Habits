const Planner = require('../models/planner')
// const { create } = require('../models/planner')

module.exports = {
  index,
  show,
  new: newPlanner,
  create
}
async function index(req, res) {
  const goals = await Goals.find({})
  console.log(goals)
  res.render('goals/index', {
    goals
  })
}
async function show(req, res) {
  const planner = await Planner.findById(req.params.id)
  return res.render('notes/index', { title: 'Daily Planner', planner })
}

function newPlanner(req, res) {
  res.render('planner/new', { errorMsg: '' })
}

async function create(req, res) {
  try {
    await Planner.create(req.body)
    res.redirect(`/notes`)
  } catch (err) {
    console.log(err)
    res.render('planner/new', { errorMsg: err.message })
  }
}
