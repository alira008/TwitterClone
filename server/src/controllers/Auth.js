const sqlQuery = require('../database/query');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const createError = require('../utils/ErrorHandling');

const createUser = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//  Get input
		const { username, userHandle, password } = req.body;

		//  Hash user password
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashedPass = await bcrypt.hash(password, salt);

		//  Check if user already exists
		const userExists = await checkUserExists(username);
		if (userExists) throw createError('User already exists', 409);

		//  Create user if user doesn't exist
		const sql =
			'INSERT INTO Users(username, user_handle, password) VALUES(?, ?, ?)';
		const values = [username, userHandle, hashedPass];
		const [results, fields] = await sqlQuery(sql, values);

		//  Create user token
		await createToken(username);

		//  Send query results to client
		res.status(200).json(results);
	} catch (err) {
		next(err);
	}
};

const loginUser = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//  Get input
		const { username, password } = req.body;

		//  Check if the user exists
		const user = await getUser(username);

		if (user && (await bcrypt.compare(password, user['password']))) {
			//  Create user token
			const token = await createToken(username);

			res.cookie('auth_token', token, { secure: true, httpOnly: true });
			res.status(200).send();
		} else {
			//	If user doesn't exist or wrong username/password
			throw createError('Incorrect username or password', 401);
		}
	} catch (err) {
		next(err);
	}
};

// Helper functions
const checkUserExists = async (username) => {
	const sql = 'SELECT * FROM Users WHERE Users.username = ?';
	const values = [username];
	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

const getUser = async (username) => {
	const sql = 'SELECT * from Users WHERE Users.username = ?';
	const values = [username];
	const [results, fields] = await sqlQuery(sql, values);

	return results[0];
};

const getUserID = async (username) => {
	const sql = 'SELECT uid from Users WHERE Users.username = ?';
	const values = [username];
	const [results, fields] = await sqlQuery(sql, values);

	return results[0];
};

const createToken = async (username) => {
	//  Create user token
	const { uid } = getUserID(username);
	const token = await jwt.sign(
		{ userID: uid, username: username },
		process.env.JWT_SECRET,
		{
			expiresIn: process.env.JWT_EXPIRE_TIME,
		}
	);

	//  Update token
	const sql = 'UPDATE Users SET token = ? WHERE username = ?';
	const values = [token, username];
	await sqlQuery(sql, values);
	return token;
};

module.exports = {
	createUser,
	loginUser,
};
