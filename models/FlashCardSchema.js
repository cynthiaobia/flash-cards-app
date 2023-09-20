const mongoose = require('mongoose');

const flashCardSchema = new mongoose.Schema({
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
  }
});

const flashCardSetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  tags: {
    type: String,
    required: true
  },
  flashCards: [flashCardSchema]
});

const FlashCardSet = mongoose.model('FlashCardSet', flashCardSetSchema);
module.exports = FlashCardSet;