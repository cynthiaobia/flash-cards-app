require('dotenv').config();
require('./database');

const FlashCardSet = require('../models/FlashCardSet');

(async function() {
  const flashCardSets = await FlashCardSet.create([
    {
      subject: 'U.S. History',
      flashCards: [
        {
          question: 'What is the capital of the United States?',
          answer: 'Washington, D.C.'
        }, 
        {
          question: 'What year was the Declaration of Independence signed?',
          answer: '1776'
        },
        {
          question: 'What was the last state to become part of the U.S.?',
          answer: 'Hawaii'
        }
      ]
    },
    {
      subject: 'Spanish',
      flashCards: [
        {
          question: 'casa',
          answer: 'house'
        }, 
        {
          question: 'Los Estados Unidos',
          answer: 'The United States'
        },
        {
          question: 'Mi nombre es ___ y soy de ___.',
          answer: 'My name is ___ and I am from ___.'
        }
      ]
    }
  ]);

  console.log(flashCardSets);

  process.exit();

})();