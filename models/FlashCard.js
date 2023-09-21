const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flashCardSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

module.exports = mongoose.model('FlashCard', flashCardSchema);