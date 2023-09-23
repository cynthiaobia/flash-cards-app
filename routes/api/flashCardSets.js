
const express = require('express');
const flashCardSetsCtrl = require('../../controllers/api/flashCardSets');

const router = express.Router();

// POST
router.post('/', flashCardSetsCtrl.create); // post flash card set

// GET
router.get('/', flashCardSetsCtrl.index);
router.get('/:id', flashCardSetsCtrl.show);

// PUT
router.put('/:id', flashCardSetsCtrl.update);

/**
 * Delete
 */
router.delete('/:id', flashCardSetsCtrl.remove);

router.put('/flashcards/new/:id', flashCardSetsCtrl.addCard); // post single flash card to existing set

module.exports = router;