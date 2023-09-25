
const express = require('express');
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

const router = express.Router();

// POST
router.post('/', usersCtrl.create);

router.post('/login', usersCtrl.login);

router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.put('/update', ensureLoggedIn, usersCtrl.updateUserInfo);


module.exports = router;