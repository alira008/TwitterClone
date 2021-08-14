const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require('../controllers/Auth');

router.route('/register').post(createUser);
router.route('/login').post(loginUser);

module.exports = router;
