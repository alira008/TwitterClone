const express = require('express');
const router = express.Router();
const {
	getUserProfile,
	getMinimalUserInfo,
	changeUserHandle,
	changeDescription,
	changeDOB,
	changeLocation,
} = require('../controllers/Users');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getUserProfileSchema,
	getMinimalUserInfoSchema,
	changeUserHandleSchema,
	changeDescriptionSchema,
	changeDOBSchema,
	changeLocationSchema,
} = require('../models/RouteSchemas/Users');

router.use(authenticateToken);

router
	.route('/userInfo')
	.get(checkSchema(getMinimalUserInfoSchema), getMinimalUserInfo);
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
router
	.route('/:username')
	.get(checkSchema(getUserProfileSchema), getUserProfile);

module.exports = router;
