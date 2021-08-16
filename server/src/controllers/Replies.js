const sqlQuery = require('../database/query');
const createError = require('../utils/ErrorHandling');

const getPostReplies = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { postID } = req.params;

		const sql = `
			SELECT reply_text, Users.user_handle, Users.username 
			FROM Replies
			INNER JOIN Users ON Users.uid = Replies.uid
			WHERE Replies.post_id = ?
    	`;
		const values = [postID];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not get replies';
		next(err);
	}
};

const getUserReplies = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid } = req.body;

		const sql = `
			SELECT reply_text, Users.user_handle, Users.username 
			FROM Replies
			INNER JOIN Users ON Users.uid = Replies.uid
			WHERE Replies.uid = ?
    	`;
		const values = [uid];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not get replies';
		next(err);
	}
};

const createReply = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { postID } = req.params;
		const { uid, replyText } = req.body;

		const sql = 'INSERT INTO Replies(post_id, uid, reply_text) VALUES(?, ?, ?)';
		const values = [postID, uid, replyText];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not create reply';
		next(err);
	}
};

module.exports = {
	getPostReplies,
	getUserReplies,
	createReply,
};
