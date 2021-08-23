const sqlQuery = require('../database/query');
const createError = require('../utils/ErrorHandling');
const { validationResult } = require('express-validator');

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

		//	Check if post exists
		if (!(await checkIfPostExists(postID)))
			throw createError('Invalid post', 400);

		//	Check if user exists
		if (!(await checkIfUidExists(uid))) throw createError('Invalid user', 400);

		//	If post is not liked already Like post
		const sql = (await checkIfLiked(postID, uid))
			? 'DELETE FROM Likes WHERE uid = ? AND post_id = ?'
			: 'INSERT INTO Likes(uid, post_id) VALUES(?, ?)';
		const values = [uid, postID];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not like/unlike post';
		next(err);
	}
};

const checkIfPostExists = async (postID) => {
	const sql = 'SELECT * FROM Posts WHERE id = ?';
	const values = [postID];

	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

const checkIfUidExists = async (uid) => {
	const sql = 'SELECT * FROM Users WHERE uid = ?';
	const values = [uid];

	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

const checkIfLiked = async (postID, uid) => {
	const sql = 'SELECT * FROM Likes WHERE uid = ? AND post_id = ?';
	const values = [uid, postID];

	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

module.exports = { getLikes, likePost };
