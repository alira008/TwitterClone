const express = require('express');
const { sqlQueryNoVal, sqlQuery } = require('../config/database')
const router = express.Router()

//  Get profile
router.get('/basic_info', async (req, res) => {
    const sql = 'SELECT * FROM Users';

    await sqlQueryNoVal(sql, (err, results) => {
        if (err) {
            console.log(err);
        }

        const listOfPosts = results;
        res.json(results)
    });
});

//  Login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT uid FROM Users WHERE username = ? AND hashpass = ?';
    const values = [username, password];

    await sqlQuery(sql, values, (err, results) => {
        if (err) {
            console.log(err);
        }

        if (!results[0]) {
            res.json({ "result": "Error: User does not exist.", "uid": "null" });
        }
        else {
            const user = results[0].uid;
            res.json({ "result": "success", "uid": user });
        }
    });
});

//  Create user
router.post('/new_user', async (req, res) => {
    const { userHandle, username, userDescription, userDOB, userLocation } = req.body;
    const sql = 'INSERT INTO Users(Username, UserHandle, UserDescription, UserDOB, UserLocation) VALUES(?, ?, ?, ?, ?)';
    const values = [username, userHandle, userDescription, userDOB, userLocation];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

//  Change user handle
router.post('/change_name', async (req, res) => {
    const { userHandle, username } = req.body;
    const sql = 'UPDATE Users SET UserHandle = ? WHERE Username = ?';
    const values = [userHandle, username];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

//  Change description
router.post('/change_description', async (req, res) => {
    const { userDescription, username } = req.body;
    const sql = 'UPDATE Users SET UserDescription = ? WHERE Username = ?';
    const values = [userDescription, username];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

//  Change date of birth
router.post('/change_dob', async (req, res) => {
    const { userDOB, username } = req.body;
    const sql = 'UPDATE Users SET UserDOB = ? WHERE Username = ?';
    const values = [userDOB, username];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

//  Change location
router.post('/change_location', async (req, res) => {
    const { userLocation, username } = req.body;
    const sql = 'UPDATE Users SET UserLocation = ? WHERE Username = ?';
    const values = [userLocation, username];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

module.exports = router;