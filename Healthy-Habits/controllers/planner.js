const Planner = require('../models/planner')
// const { create } = require('../models/planner')

module.exports = {
  new: newPlanner,
  create,
  index,
  show
}
function index(req, res) {
  const planner = Planner.find({})
  console.log(planner)
  res.render('planner/index', { title: 'planner', planner })
}

function newPlanner(req, res) {
  res.render('planner/new', { errorMsg: '' })
}

async function create(req, res) {
  try {
    await Planner.create(req.body)
    res.redirect(`/planner`)
  } catch (err) {
    console.log(err)
    res.render('planner/new', { errorMsg: err.message })
  }
}
async function show(req, res) {
  const planner = await Planner.findById(req.params.id).populate({
    path: 'notes',
    populate: {
      path: 'user'
    }
  })
  res.render('planner/show', { title: 'Daily Plans', plan })
}
