const usernameSchema = {
	exists: {
		errorMessage: 'Must not be empty',
		options: {
			checkNull: true,
			checkFalsy: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'Must be more than 4 characters',
		options: { min: 4, max: 20 },
	},
	trim: true,
	escape: true,
};

const passwordSchema = {
	exists: {
		errorMessage: 'Must not be empty',
		options: {
			checkNull: true,
			checkFalsy: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'Must be more than 4 characters',
		options: { min: 4 },
	},
	trim: true,
	escape: true,
};

const userHandleSchema = {
	exists: {
		errorMessage: 'Must not be empty',
		options: {
			checkNull: true,
			checkFalsy: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'Must be more than 4 characters',
		options: { min: 4, max: 20 },
	},
	trim: true,
	escape: true,
};

const uidSchema = {
	exists: {
		errorMessage: 'Must not be empty',
		options: {
			checkNull: true,
			checkFalsy: true,
		},
	},
	isInt: true,
};

const descriptionSchema = {
	exists: {
		errorMessage: 'Must not be null',
		options: {
			checkNull: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'A maximum of 300 characters is allowed',
		options: {
			max: 300,
		},
	},
	trim: true,
	escape: true,
};

const dateOfBirthSchema = {
	exists: {
		errorMessage: 'Must not be null',
		options: {
			checkNull: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'Must be maximum of 10 characters',
		options: { max: 10 },
	},
	trim: true,
	escape: true,
};

const locationSchema = {
	exists: {
		errorMessage: 'Must not be null',
		options: {
			checkNull: true,
		},
	},
	isString: true,
	isLength: {
		errorMessage: 'Must be maximum of 30 characters',
		options: { max: 30 },
	},
	trim: true,
	escape: true,
};

module.exports = {
	usernameSchema,
	passwordSchema,
	userHandleSchema,
	uidSchema,
	descriptionSchema,
	dateOfBirthSchema,
	locationSchema,
};
