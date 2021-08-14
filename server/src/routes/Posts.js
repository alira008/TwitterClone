const express = require('express');
const router = express.Router();
const { getAllPosts, createPost } = require('../controllers/Posts');
const authenticateToken = require('../middleware/Auth');

router.use(authenticateToken);

router.route('/').get(getAllPosts);
router.route('/').post(createPost);

module.exports = router;
