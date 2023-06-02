const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plannerSchema = new mongoose.Schema({
  title: { type: String }
})

module.exports = mongoose.model('Planner', plannerSchema)
