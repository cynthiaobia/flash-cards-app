
const express = require('express');
const flashCardSetsCtrl = require('../../controllers/api/flashCardSets');

const router = express.Router();

// POST
router.post('/', flashCardSetsCtrl.create);

// GET
router.get('/', flashCardSetsCtrl.index);
router.get('/:id', flashCardSetsCtrl.show);

// PUT
// used in update flash card set form
router.put('/:id', flashCardSetsCtrl.update);

// PUT create and add card to set
/// working on this!!!
router.put('/add-card/:id', flashCardSetsCtrl.addCard);

/**
 * Delete
 */
router.delete('/:id', flashCardSetsCtrl.remove);



module.exports = router;