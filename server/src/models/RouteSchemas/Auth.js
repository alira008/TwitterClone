const {
	usernameSchema,
	passwordSchema,
	userHandleSchema,
} = require('../DataSchemas/Users');

const registrationSchema = {
	username: usernameSchema,
	userHandle: userHandleSchema,
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
