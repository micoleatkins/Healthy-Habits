const Goals = require('../models/goal')
// const { create } = require('../models/planner')

async function index(req, res) {
  const goals = await Goals.find({})
  console.log(goals)
  res.render('goals/index', {
    goals
  })
}
async function show(req, res) {
  const goal = await Goals.findById(req.params.id)
  return res.render('notes/index', { title: 'Daily Goal', goal })
}

function newGoal(req, res) {
  res.render('goals/new', { errorMsg: '' })
}
async function create(req, res) {
  try {
    await Goals.create(req.body)
    res.redirect(`/notes`)
  } catch (err) {
    console.log(err)
    res.render('goals/new', { errorMsg: err.message })
  }
}
const deleteGoal = async (req, res) => {
  await Goals.findOneAndDelete({ _id: req.params.id })
  res.redirect('/notes')
}
module.exports = {
  index,
  show,
  new: newGoal,
  create,
  delete: deleteGoal
}
// async function show(req, res) {
//   const goal= await Goals.findById(req.params.id).populate
// }
