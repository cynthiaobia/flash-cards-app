
const express = require('express');
const flashCardSetsCtrl = require('../../controllers/api/flashCardSets');

const router = express.Router();

// POST
router.post('/', flashCardSetsCtrl.create);

// GET
router.get('/', flashCardSetsCtrl.index);
router.get('/:id', flashCardSetsCtrl.show);

// router.get('/:id', flashCardSetsCtrl.findById)

// PUT
router.put('/:id', flashCardSetsCtrl.update);

module.exports = router;