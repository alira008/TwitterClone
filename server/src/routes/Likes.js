const express = require('express');
const router = express.Router();
const { getLikes, likePost, unlikePost } = require('../controllers/Likes');
const authenticateToken = require('../middleware/Auth');

router.use(authenticateToken);

router.route('/:postID').get(getLikes);
router.route('/:uid/:postID').put(likePost);
router.route('/:uid/:postID').delete(unlikePost);

module.exports = router;
