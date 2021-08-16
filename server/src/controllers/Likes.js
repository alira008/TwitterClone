const sqlQuery = require('../database/query');
const createError = require('../utils/ErrorHandling');

const getLikes = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { postID } = req.params;

		const sql = `
			SELECT Users.user_handle, Users.username, User.description
			FROM Likes
			INNER JOIN Users ON Users.uid =  Likes.uid,
			INNER JOIN Posts ON Posts.id = Likes.post_id,
			WHERE Like.post_id = ?
		`;
		const values = [postID];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not get likes';
		next(err);
	}
};

const likePost = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { postID } = req.params;
		const { uid } = req.body;

		const sql = 'INSERT INTO Likes(uid, post_id) VALUES(?, ?)';
		const values = [uid, postID];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not like post';
		next(err);
	}
};

const unlikePost = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { postID } = req.params;
		const { uid } = req.body;

		const sql = 'DELETE FROM Likes WHERE uid = ? AND post_id = ?';
		const values = [uid, postID];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not remove like from post';
		next(err);
	}
};

module.exports = { getLikes, likePost, unlikePost };
