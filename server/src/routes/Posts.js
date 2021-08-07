const express = require('express');
const { sqlQueryNoVal, sqlQuery } = require('../config/database')
const router = express.Router()

router.get('/', async (req, res) => {
    const sql = 'SELECT * FROM Posts';

    await sqlQueryNoVal(sql, (err, results) => {
        if (err) {
            console.log(err);
        }

        const listOfPosts = results;
        res.json(results)
    });
});

router.post('/', async (req, res) => {
    const { userHandle, username, postText } = req.body;
    const sql = 'INSERT INTO Posts(Username, UserHandle, PostText) VALUES(?, ?, ?)';
    const values = [username, userHandle, postText];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

module.exports = router;