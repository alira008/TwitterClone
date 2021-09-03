const {
	usernameSchema,
	passwordSchema,
	userHandleSchema,
	dateOfBirthSchema,
} = require('../DataSchemas/Users');

const registrationSchema = {
	username: usernameSchema,
	userHandle: userHandleSchema,
	dateOfBirth: dateOfBirthSchema,
	password: passwordSchema,
};

const loginSchema = {
	username: usernameSchema,
	password: passwordSchema,
};

module.exports = {
	loginSchema,
	registrationSchema,
};
