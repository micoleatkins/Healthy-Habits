const Goal = require('../models/goal')
const Planner = require('../models/planner')

module.exports = {
  show,
  delete: deleteGoal
}

async function show(req, res) {
  const goals = await Goal.find()
  const plans = await Planner.find()
  res.render('notes/index', { title: 'Daily Goal', goals, plans })
}
function deleteGoal(req, res, next) {
  Goal.findOne({
    'notes._id': req.params.id,
    'notes.user': req.user._id
  }).then(function (goal) {
    if (!goal) return res.redirect('/goals')
    goal.notes.remove(req.params.id)
    goal
      .save()
      .then(function () {
        res.redirect(`/notes/${note._id}`)
      })
      .catch(function (err) {
        return next(err)
      })
  })
}
