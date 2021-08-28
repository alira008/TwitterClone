const express = require('express');
const router = express.Router();
const { getLikes, getLikeStatus, likePost } = require('../controllers/Likes');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getLikesSchema,
	getLikeStatusSchema,
	likePostSchema,
} = require('../models/RouteSchemas/Likes');

router.use(authenticateToken);

router.route('/:postID').get(checkSchema(getLikesSchema), getLikes);
router
	.route('/status/:postID')
	.post(checkSchema(getLikeStatusSchema), getLikeStatus);
router.route('/:postID').post(checkSchema(likePostSchema), likePost);

module.exports = router;
