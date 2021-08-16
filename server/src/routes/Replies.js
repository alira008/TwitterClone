const express = require('express');
const router = express.Router();
const {
	getPostReplies,
	getUserReplies,
	createReply,
} = require('../controllers/Replies');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getPostRepliesSchema,
	getUserRepliesSchema,
	createReplySchema,
} = require('../models/RouteSchemas/Replies');

router.use(authenticateToken);

router.route('/:postID').get(checkSchema(getPostRepliesSchema), getPostReplies);
router
	.route('/userReplies')
	.post(checkSchema(getUserRepliesSchema), getUserReplies);
router.route('/createReply').put(checkSchema(createReplySchema), createReply);

module.exports = router;
