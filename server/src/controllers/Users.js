const sqlQuery = require('../database/query');

const getUserProfile = async (req, res) => {
	const { username } = req.params;

	try {
		//  Check if user already exists
		const userExists = await checkUserExists(username);
		if (userExists) {
			res.json({ Error: "User doesn't exist" });
			return;
		}

		//  If user exists proceed
		const sql = `SELECT username, user_handle, description, date_of_birth, location
        FROM Users 
        WHERE username = ?`;
		const values = [username];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not get user profile' });
	}
};

const changeUserHandle = async (req, res) => {
	const { uid, userHandle } = req.body;
	const sql = 'UPDATE Users SET user_handle = ? WHERE uid = ?';
	const values = [userHandle, uid];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not change user handle' });
	}
};

const changeDescription = async (req, res) => {
	const { uid, description } = req.body;
	const sql = 'UPDATE Users SET description = ? WHERE uid = ?';
	const values = [description, uid];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not change user description' });
	}
};

const changeDOB = async (req, res) => {
	const { uid, dateOfBirth } = req.body;
	const sql = 'UPDATE Users SET date_of_birth = ? WHERE uid = ?';
	const values = [dateOfBirth, uid];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not change user date of birth' });
	}
};

const changeLocation = async (req, res) => {
	const { uid, location } = req.body;
	const sql = 'UPDATE Users SET location = ? WHERE uid = ?';
	const values = [location, uid];

	try {
		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		console.error(err);
		res.json({ Error: 'Could not change user location' });
	}
};

module.exports = {
	getUserProfile,
	changeUserHandle,
	changeDescription,
	changeDOB,
	changeLocation,
};
