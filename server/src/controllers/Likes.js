const sqlQuery = require('../database/query');

const getLikes = async (req, res) => {
	const { postID } = req.params;
	const sql = `SELECT Users.user_handle, Users.username, User.description
    FROM Likes
    INNER JOIN Users ON Users.uid =  Likes.uid,
    INNER JOIN Posts ON Posts.id = Likes.post_id,
    WHERE Like.post_id = ?
    `;
	const values = [postID];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not get likes' });
	}
};

const likePost = async (req, res) => {
	const { postID } = req.params;
	const { uid } = req.body;
	const sql = 'INSERT INTO Likes(uid, post_id) VALUES(?, ?)';
	const values = [uid, postID];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not like post' });
	}
};

const unlikePost = async (req, res) => {
	const { postID } = req.params;
	const { uid } = req.body;
	const sql = 'DELETE FROM Likes WHERE uid = ? AND post_id = ?';
	const values = [uid, postID];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not remove like from post' });
	}
};

module.exports = { getLikes, likePost, unlikePost };
