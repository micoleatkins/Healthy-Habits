const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plannerSchema = new mongoose.Schema({
  title: { type: String, required: true },
  priorities: { type: String, required: true },
  reminders: { type: String, required: true },
  date: {
    type: Number,
    default: function () {
      return new Date().getFullYear()
    }
  }
})

module.exports = mongoose.model('Planner', plannerSchema)
