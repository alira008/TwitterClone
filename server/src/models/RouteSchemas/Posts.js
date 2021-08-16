const { postTextSchema } = require('../DataSchemas/Posts');
const { uidSchema } = require('../DataSchemas/Users');

const createPostSchema = {
	uid: uidSchema,
	postText: postTextSchema,
};

module.exports = {
	createPostSchema,
};
