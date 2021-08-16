const { postIDSchema } = require('../DataSchemas/Posts');
const { uidSchema } = require('../DataSchemas/Users');
const { replyTextSchema } = require('../DataSchemas/Replies');

const getPostRepliesSchema = {
	postID: postIDSchema,
};

const getUserRepliesSchema = {
	uid: uidSchema,
};

const createReplySchema = {
	postID: postIDSchema,
	uid: uidSchema,
	replyTextSchema: replyTextSchema,
};

module.exports = {
	getPostRepliesSchema,
	getUserRepliesSchema,
	createReplySchema,
};
