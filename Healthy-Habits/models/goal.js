const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new mongoose.Schema({
  title: { type: String },
  date: {
    type: Number,
    default: function () {
      return new Date().getFullYear()
    }
  }
})

module.exports = mongoose.model('Goal', goalSchema)
