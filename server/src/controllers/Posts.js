const sqlQuery = require('../database/query');
const createError = require('../utils/ErrorHandling');
const { validationResult } = require('express-validator');

const getAllPosts = async (req, res, next) => {
	try {
		const sql = `
			SELECT Posts.post_text, 
			Posts.created_at, 
			Users.username, 
			Users.user_handle, 
			Users.uid,
			Posts.id AS post_id, 
			COUNT(Likes.id) AS total_likes,
			COUNT(Replies.id) AS total_replies
			FROM Posts
			INNER JOIN Users ON Users.uid = Posts.uid
			LEFT JOIN Likes ON Likes.post_id = Posts.id
			LEFT JOIN Replies ON Replies.post_id = Posts.id
			GROUP BY Posts.id
    	`;

		const [results, fields] = await sqlQuery(sql);
		res.json(results);
	} catch (err) {
		// err.message = 'Could not fetch data';
		next(err);
	}
};

const createPost = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid, postText } = req.body;

		const sql = 'INSERT INTO Posts(uid, post_text) VALUES(?, ?)';
		const values = [uid, postText];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not create post';
		next(err);
	}
};

module.exports = { getAllPosts, createPost };
