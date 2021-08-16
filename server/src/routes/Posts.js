const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/Posts');
const authenticateToken = require('../middleware/Auth');
const { checkSchema } = require('express-validator');
const { createPostSchema } = require('../models/RouteSchemas/Posts');

router.use(authenticateToken);

router.route('/').get(getAllPosts);
router.route('/').post(checkSchema(createPostSchema), createPost);

module.exports = router;
