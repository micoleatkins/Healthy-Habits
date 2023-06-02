const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new mongoose.Schema({
  title: { type: String, required: true }
})

module.exports = mongoose.model('Goal', goalSchema)
