const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const flashCard = require('./FlashCard');

const flashCardSetSchema = new Schema({
  subject: {
    type: String,
    required: true
  },
  flashCards: [flashCard]
}, {
  timestamps: true
})

module.exports = mongoose.model('FlashCardSet', flashCardSetSchema);