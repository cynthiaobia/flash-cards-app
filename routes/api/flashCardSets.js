
const express = require('express');
const flashCardSetsCtrl = require('../../controllers/api/flashCardSets');

const router = express.Router();

// POST
router.post('/flashcards', flashCardSetsCtrl.create);

// GET
// router.get('/flashcards/:id', flashCardSetsCtrl.show);

module.exports = router;