const {
	usernameSchema,
	userHandleSchema,
	uidSchema,
	descriptionSchema,
	dateOfBirthSchema,
	locationSchema,
} = require('../DataSchemas/Users');

const getUserProfileSchema = {
	username: usernameSchema,
};

const getMinimalUserInfoSchema = {
	user_id: uidSchema,
};

const changeUserHandleSchema = {
	uid: uidSchema,
	userHandle: userHandleSchema,
};

const changeDescriptionSchema = {
	uid: uidSchema,
	description: descriptionSchema,
};

const changeDOBSchema = {
	uid: uidSchema,
	dateOfBirth: dateOfBirthSchema,
};

const changeLocationSchema = {
	uid: uidSchema,
	location: locationSchema,
};

module.exports = {
	getUserProfileSchema,
	getMinimalUserInfoSchema,
	changeUserHandleSchema,
	changeDescriptionSchema,
	changeDOBSchema,
	changeLocationSchema,
};
