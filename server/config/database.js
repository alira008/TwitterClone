const mysql = require('mysql2');
const config = require('./config');

const sqlQueryNoVal = (sql, next) => {

    //  Create connection
    const conn = mysql.createConnection(config.database);
    conn.connect((err) => {
        if (err) {
            console.error("Error connecting to MySQL server: " + err + ". \n")
        }
    })

    //  Make query
    conn.execute(sql, (err, results, fields) => {

        //  Close the connection
        conn.end();

        if (err) {
            throw err;
        }

        //  Execute callback function
        next.apply(this, [err, results]);
    });
};

const sqlQuery = (sql, values, next) => {

    //  Create connection
    const conn = mysql.createConnection(config.database);
    conn.connect((err) => {
        if (err) {
            console.error("Error connecting to MySQL server: " + err + ". \n")
        }
    })

    //  Make query
    conn.execute(sql, values, (err, results, fields) => {
        //  Close the connection
        conn.end();

        if (err) {
            throw err;
        }

        //  Execute callback function
        next.apply(this, [err, results]);
    });
};

module.exports = { sqlQueryNoVal, sqlQuery };