const sqlQuery = require('../database/query');
const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
	const token = req.cookies.auth_token;
	const uid = req.cookies.user_id;

	if (token == null) return res.status(401).send('Invalid token');

	try {
		//	If not correct token, throw an error
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		const isValid = await compareTokenWithUID(uid, decoded.username);
		if (!isValid) throw Error();
		next();
	} catch (err) {
		res.clearCookie('auth_token', {
			secure: true,
			httpOnly: true,
			sameSite: 'strict',
		});
		res.clearCookie('user_id', { secure: true, sameSite: 'strict' });
		res.status(401).send('Please re-login');
	}
};

// Checks if uid belongs to username and vise-versa
// False if there are no users that match uid with username
// True if there is a user that has a match of uid and username
const compareTokenWithUID = async (uid, username) => {
	const sql = 'SELECT * FROM Users WHERE Users.uid = ? AND Users.username = ?';
	const values = [uid, username];
	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

module.exports = authenticateToken;
