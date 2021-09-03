const sqlQuery = require('../database/query');
const createError = require('../utils/ErrorHandling');
const { validationResult } = require('express-validator');

const getUserProfile = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { username } = req.params;

		//  Check if user exists
		const userExists = await checkUserExists(username);
		if (!userExists) {
			res.json({ Error: "User doesn't exist" });
			return;
		}

		//  If user exists proceed
		const sql = `
			SELECT username, user_handle, description, date_of_birth, location
			FROM Users 
			WHERE username = ?
		`;
		const values = [username];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not get user profile';
		next(err);
	}
};

const changeUserHandle = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid, userHandle } = req.body;

		const sql = 'UPDATE Users SET user_handle = ? WHERE uid = ?';
		const values = [userHandle, uid];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not change user handle';
		next(err);
	}
};

const changeDescription = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid, description } = req.body;

		const sql = 'UPDATE Users SET description = ? WHERE uid = ?';
		const values = [description, uid];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not change user description';
		next(err);
	}
};

const changeDOB = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid, dateOfBirth } = req.body;

		const sql = 'UPDATE Users SET date_of_birth = ? WHERE uid = ?';
		const values = [dateOfBirth, uid];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not change user date of birth';
		next(err);
	}
};

const changeLocation = async (req, res, next) => {
	try {
		//  Validate input
		const errors = validationResult(req);
		if (!errors.isEmpty()) throw createError('Invalid input', 400);

		//	Get input
		const { uid, location } = req.body;

		const sql = 'UPDATE Users SET location = ? WHERE uid = ?';
		const values = [location, uid];

		const [results, fields] = await sqlQuery(sql, values);
		res.json(results);
	} catch (err) {
		err.message = 'Could not change user location';
		next(err);
	}
};

//	Helper functions
const checkUserExists = async (username) => {
	const sql = 'SELECT * FROM Users WHERE Users.username = ?';
	const values = [username];
	const [results, fields] = await sqlQuery(sql, values);
	return results.length ? true : false;
};

module.exports = {
	getUserProfile,
	changeUserHandle,
	changeDescription,
	changeDOB,
	changeLocation,
};
