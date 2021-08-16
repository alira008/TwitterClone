const express = require('express');
const router = express.Router();
const { getLikes, likePost, unlikePost } = require('../controllers/Likes');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getLikesSchema,
	likePostSchema,
	unlikePostSchema,
} = require('../models/RouteSchemas/Likes');

router.use(authenticateToken);

router.route('/:postID').get(checkSchema(getLikesSchema), getLikes);
router.route('/:uid/:postID').put(checkSchema(likePostSchema), likePost);
router.route('/:uid/:postID').delete(checkSchema(unlikePostSchema), unlikePost);

module.exports = router;
