
const FlashCardSet = require('../../models/FlashCardSet');

// add a new flash card set in the DB
async function create(req, res) {
  try {
    const flashCardSet = await FlashCardSet.create(req.body);
    res.json(flashCardSet);
    // res.redirect('/flashcards') this throws an error
    // console.log('create')
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
}

async function index(req, res) {
  try{
    const flashCardSet = await FlashCardSet.find({});
    res.status(200).json(flashCardSet);
  }catch(err){
    res.status(400).json({ msg: err.message });
    console.log(err);
  }  
}

async function show(req, res) {
  try{
    const flashCardSet = await FlashCardSet.findById(req.params.id);
    res.status(200).json(flashCardSet);
    console.log('Showing Flash Card Set: ', flashCardSet);
  }catch(err){
    res.status(400).json({ msg: err.message });
    console.log(err);
  }  
}

async function update(req, res) {
  try {
    const updatedFlashCardSet = await FlashCardSet.findByIdAndUpdate(
      req.params.id,
      req.body, // Update with the new data
      { new: true }
    );
    res.status(200).json(updatedFlashCardSet);
  } catch (err) {
    res.status(400).json(err);
    console.error('Error updating flash card set:', err);
  }
}

async function remove(req, res) {
  try {
    await FlashCardSet.findByIdAndDelete(
      req.params.id
      // req.body 
    )
    console.log('Deletion successful');
  } catch (err) {
    console.log(err);
  }
}

/// working on this!
async function addCard(req, res) {
  console.log(req.body)
  const {id} = req.params;
  try {
    const flashCardSet = await FlashCardSet.findById(id);
    console.log(flashCardSet);
    flashCardSet.flashCards.push(req.body);
    await flashCardSet.save();
    console.log(flashCardSet);
    // const updatedFlashCardSet = await FlashCardSet.findByIdAndUpdate(id, flashCardSet, {new: true});
    res.status(200).json(flashCardSet);
    // console.log(updatedFlashCardSet)
  } catch (err) {
    console.log(err);
  }
}


// Delete a specific flash card from the set
async function removeFlashCard(req, res) {
  try {
    const flashCardSet = await FlashCardSet.findById(req.params.setId);

    const flashCard = flashCardSet.flashCards.id(req.params.cardId);

    flashCard.remove();
    await flashCardSet.save();

    return res.json({ message: 'Flash card deleted successfully' });
  } catch (err) {
    return res.status(500).json({ err: 'Internal server error' });
  }
}

module.exports = {
  // ...
  removeFlashCard,
};


module.exports = {
  create,
  show,
  index,
  update,
  remove,
  addCard,
  removeFlashCard
}