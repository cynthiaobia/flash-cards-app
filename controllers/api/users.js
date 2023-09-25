
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// create a new user in the db
async function create(req, res) {

  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err)
  }
  
}

async function login(req, res) {
  try {
    // find a user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();

    // comparing password
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();

    // create new token
    const token = createJWT(user);
    res.json(token);

  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function checkToken(req, res) {
  console.log(req.user);
  res.json(req.exp);
}

async function updateUserInfo(req, res) {
  try {
    // Find the user by ID and update their information
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id, // Assuming you have user data in req.user
      req.body, // Data to update (e.g., { name: req.body.name, email: req.body.email })
      { new: true }
    );

    // Send the updated user object as a response
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}



// helper fxn to create a jwt token

function createJWT(user) {
  return jwt.sign({user}, process.env.SECRET, {expiresIn: '24h'});
}

module.exports = {
  create, 
  login,
  checkToken,
  updateUserInfo
}