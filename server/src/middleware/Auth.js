const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
	const token = req.cookies.auth_token;

	if (token == null) return res.status(401).send('Invalid token');

	try {
		//	If not correct token, throw an error
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		next();
	} catch (err) {
		console.log(err);
		res.status(401).send('Please re-login');
	}
};

module.exports = authenticateToken;
