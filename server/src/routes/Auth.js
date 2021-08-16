const express = require('express');
const router = express.Router();
const { checkSchema } = require('express-validator');
const { createUser, loginUser } = require('../controllers/Auth');
const {
	registrationSchema,
	loginSchema,
} = require('../models/RouteSchemas/Auth');

router.route('/register').post(checkSchema(registrationSchema), createUser);
router.route('/login').post(checkSchema(loginSchema), loginUser);

module.exports = router;
