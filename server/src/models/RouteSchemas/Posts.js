const { postTextSchema } = require('../DataSchemas/Posts');
const { usernameSchema, uidSchema } = require('../DataSchemas/Users');

const getUserPostsSchema = {
	username: usernameSchema,
};

const createPostSchema = {
	uid: uidSchema,
	postText: postTextSchema,
};

module.exports = {
	getUserPostsSchema,
	createPostSchema,
};
