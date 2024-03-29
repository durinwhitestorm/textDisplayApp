const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  game: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Game', GameSchema)
