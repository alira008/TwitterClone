const express = require('express');
const { sqlQueryNoVal, sqlQuery } = require('../config/database')
const router = express.Router()

router.get('/:postID', async (req, res) => {
    const { postID } = req.params;
    const sql = 'SELECT * FROM Replies WHERE ParentID = ?';
    const values = [Number(postID)]

    await sqlQuery(sql, values, (err, results) => {
        if (err) {
            console.log(err);
        }

        const listOfPosts = results;
        res.json(results)
    });
});

router.post('/', async (req, res) => {
    const { userHandle, username, replyText, parentID } = req.body;
    const sql = 'INSERT INTO Replies(Username, UserHandle, ReplyText, ParentID) VALUES(?, ?, ?, ?)';
    const values = [username, userHandle, replyText, parentID];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" });
    });
});

module.exports = router;