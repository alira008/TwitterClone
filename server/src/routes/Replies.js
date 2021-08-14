const express = require('express');
const router = express.Router();
const {
	getPostReplies,
	getUserReplies,
	createReply,
} = require('../controllers/Replies');
const authenticateToken = require('../middleware/Auth');

router.use(authenticateToken);

router.route('/:postID').get(getPostReplies);
router.route('/userReplies').post(getUserReplies);
router.route('/createReply').put(createReply);

module.exports = router;
