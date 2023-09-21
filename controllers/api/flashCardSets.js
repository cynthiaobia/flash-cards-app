
const FlashCardSet = require('../../models/FlashCardSet');

// add a new flash card set in the DB
async function create(req, res) {
  try {
    const flashCardSet = await FlashCardSet.create(req.body);
    res.json(flashCardSet);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
}

async function show(req, res) {
  try{
    const flashCardSet = await FlashCardSet.findById(req.params.id);
    res.status(200).json(flashCardSet);
    console.log(flashCardSet)
  }catch(err){
    res.status(400).json({ msg: err.message });
    console.log(err);
  }  
}

module.exports = {
  create,
  show
}