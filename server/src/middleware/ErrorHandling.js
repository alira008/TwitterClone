const errorHandler = (err, req, res, next) => {
	console.error(err);
	const status = err.status || 500;
	const message = err.message || 'Internal Server Error';
	res.status(status);
	res.json({
		error: {
			status: status,
			message: message,
		},
	});
};

module.exports = errorHandler;
