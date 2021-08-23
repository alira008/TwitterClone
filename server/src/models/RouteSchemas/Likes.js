const { postIDSchema } = require('../DataSchemas/Posts');
const { uidSchema } = require('../DataSchemas/Users');

const getLikesSchema = {
	postID: postIDSchema,
};

const likePostSchema = {
	postID: postIDSchema,
	uid: uidSchema,
};

module.exports = {
	getLikesSchema,
	likePostSchema,
};
