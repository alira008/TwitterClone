const express = require('express');
const router = express.Router();
const {
	getUserProfile,
	changeUserHandle,
	changeDescription,
	changeDOB,
	changeLocation,
} = require('../controllers/Users');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getUserProfileSchema,
	changeUserHandleSchema,
	changeDescriptionSchema,
	changeDOBSchema,
	changeLocationSchema,
} = require('../models/RouteSchemas/Users');

router.use(authenticateToken);

router
	.route('/:username')
	.get(checkSchema(getUserProfileSchema), getUserProfile);
router
	.route('/changeUserHandle')
	.post(checkSchema(changeUserHandleSchema), changeUserHandle);
router
	.route('/changeDescription')
	.post(checkSchema(changeDescriptionSchema), changeDescription);
router.route('/changeDOB').post(checkSchema(changeDOBSchema), changeDOB);
router
	.route('/changeLocation')
	.post(checkSchema(changeLocationSchema), changeLocation);

module.exports = router;
