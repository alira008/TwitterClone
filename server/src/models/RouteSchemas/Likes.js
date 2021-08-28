const { postIDSchema } = require('../DataSchemas/Posts');
const { uidSchema } = require('../DataSchemas/Users');

const getLikesSchema = {
	postID: postIDSchema,
};

const getLikeStatusSchema = {
	postID: postIDSchema,
	uid: uidSchema,
};

const likePostSchema = {
	postID: postIDSchema,
	uid: uidSchema,
};

module.exports = {
	getLikesSchema,
	getLikeStatusSchema,
	likePostSchema,
};
