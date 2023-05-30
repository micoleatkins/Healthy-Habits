const habits = require('habits')
const Schema = habits.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String
  },
  {
    timestamps: true
  }
)

module.exports = habits.model('User', userSchema)
