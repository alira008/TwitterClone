const express = require('express');
const router = express.Router();
const {
	getAllPosts,
	getUserPosts,
	createPost,
} = require('../controllers/Posts');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const {
	getUserPostsSchema,
	createPostSchema,
} = require('../models/RouteSchemas/Posts');

router.use(authenticateToken);

router.route('/').get(getAllPosts);
router.route('/').post(checkSchema(createPostSchema), createPost);
router.route('/:username').get(checkSchema(getUserPostsSchema), getUserPosts);

module.exports = router;
