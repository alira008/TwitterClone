const mysql = require('mysql2/promise');
//  Create connection

const connectDB = () => {
	return mysql.createConnection({
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
	});
};

module.exports = connectDB;
