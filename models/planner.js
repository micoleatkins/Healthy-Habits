const mongoose = require('mongoose')

const Schema = mongoose.Schema

const plannerSchema = new Schema(
  {
    date: Number,
    priorities: [String],
    reminders: [String]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Planner', plannerSchema)
