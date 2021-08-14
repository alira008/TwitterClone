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

router.use(authenticateToken);

router.route('/:username').get(getUserProfile);
router.route('/changeUserHandle').post(changeUserHandle);
router.route('/changeDescription').post(changeDescription);
router.route('/changeDOB').post(changeDOB);
router.route('/changeLocation').post(changeLocation);

module.exports = router;
