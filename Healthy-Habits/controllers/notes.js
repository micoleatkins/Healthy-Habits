const Goal = require('../models/goals')
const Planner = require('../models/planner')

module.exports = {
  create
}

async function create(req, res) {
  const goal = await Goal.findById(req.params.id)
  let notes = {
    content: req.body.content,
    user: req.user._id
  }
  goal.notes.push(note)
  try {
    await goal.save()
    res.redirect(`/goals/${goal._id}`)
  } catch (err) {
    res.redirect(`/goals/${goal._id}`)
  }
}
