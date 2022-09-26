const mongoose = require('mongoose')

const FactSchema = new mongoose.Schema({
  game: {
    type: String,
    required: true,
  },
  fact: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Fact', FactSchema)
