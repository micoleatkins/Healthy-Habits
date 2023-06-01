const Goals = require('../models/goal')
// const { create } = require('../models/planner')

module.exports = {
  new: newGoal,
  create,
  index,
  show
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
  try {
    await Goals.create(req.body)
    res.redirect(`/goals`)
  } catch (err) {
    console.log(err)
    res.render('goals/new', { errorMsg: err.message })
  }
}
async function show(req, res) {
  const goal = await Goals.findById(req.params.id).populate({
    path: 'notes',
    populate: {
      path: 'user'
    }
  })
  res.render('goals/show', { title: 'Daily Goal', goal })
}

// async function show(req, res) {
//   const goal= await Goals.findById(req.params.id).populate
// }
