const Planner = require('../models/planner')
// const { create } = require('../models/planner')

module.exports = {
  new: newPlanner,
  create,
  index
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
  req.body.nowShowing = !!req.body.nowShowing
  req.body.cast = req.body.cast.trim()
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/)
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  try {
    await Goals.create(req.body)
    res.redirect('/planner')
  } catch (err) {
    res.render('planner/new', { errorMsg: err.message })
  }
}
