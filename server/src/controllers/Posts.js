const sqlQuery = require('../database/query');

const getAllPosts = async (req, res) => {
	console.log('hello');
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

	try {
		const [results, fields] = await sqlQuery(sql);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not fetch data' });
	}
};

const createPost = async (req, res) => {
	const { uid, postText } = req.body;
	const sql = 'INSERT INTO Posts(uid, post_text) VALUES(?, ?)';
	const values = [uid, postText];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not create post' });
	}
};

module.exports = { getAllPosts, createPost };
