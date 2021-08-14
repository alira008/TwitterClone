const connectDB = require('./connect');

const sqlQuery = async (sql, values = null) => {
	//  Create connection
	const conn = await connectDB();

	//  Attempt to make connection
	try {
		await conn.connect();
	} catch (err) {
		console.error('Error connecting to MySQL server: ' + err + '. \n');
		return;
	}

	//  Make query
	const results = values
		? await conn.execute(sql, values)
		: await conn.execute(sql);

	//  Close connection
	await conn.end();

	return results;
};

module.exports = sqlQuery;
