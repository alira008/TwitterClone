const replyTextSchema = {
	exists: {
		errorMessage: 'Must not be null',
		options: {
			checkNull: true,
			checkFalsy: true,
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

module.exports = {
	replyTextSchema,
};
