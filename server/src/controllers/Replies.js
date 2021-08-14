const sqlQuery = require('../database/query');

const getPostReplies = async (req, res) => {
	const { postID } = req.params;
	const sql = `SELECT reply_text, Users.user_handle, Users.username 
    FROM Replies
    INNER JOIN Users ON Users.uid = Replies.uid
    WHERE Replies.post_id = ?
    `;
	const values = [postID];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not get replies' });
	}
};

const getUserReplies = async (req, res) => {
	const { uid } = req.body;
	const sql = `SELECT reply_text, Users.user_handle, Users.username 
    FROM Replies
    INNER JOIN Users ON Users.uid = Replies.uid
    WHERE Replies.uid = ?
    `;
	const values = [uid];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not get replies' });
	}
};

const createReply = async (req, res) => {
	const { postID } = req.params;
	const { uid, replyText } = req.body;
	const sql = 'INSERT INTO Replies(post_id, uid, reply_text) VALUES(?, ?, ?)';
	const values = [postID, uid, replyText];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not create reply' });
	}
};

module.exports = {
	getPostReplies,
	getUserReplies,
	createReply,
};
