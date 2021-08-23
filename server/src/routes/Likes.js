const express = require('express');
const router = express.Router();
const { getLikes, likePost } = require('../controllers/Likes');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getLikesSchema,
	likePostSchema,
} = require('../models/RouteSchemas/Likes');

router.use(authenticateToken);

router.route('/:postID').get(checkSchema(getLikesSchema), getLikes);
router.route('/:postID').post(checkSchema(likePostSchema), likePost);

module.exports = router;
