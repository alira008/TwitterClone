const express = require('express');
const { sqlQuery } = require('../config/database')
const router = express.Router()

//  Get all likes of post
router.get('/:postID', async (req, res) => {
    const { postID } = req.params;
    const sql = 'SELECT * FROM Likes WHERE PostID = ?';
    const values = [postID];

    await sqlQuery(sql, values, (err, results) => {
        if (err) {
            console.log(err);
        }

        const listOfPosts = results;
        res.json(results)
    });
});

//  Like a post
router.post('/:postID', async (req, res) => {
    const { userHandle, username } = req.body;
    const { postID } = req.params;
    const sql = 'INSERT INTO Likes(Username, UserHandle, PostID) VALUES(?, ?, ?)';
    const values = [username, userHandle, postID];

    await sqlQuery(sql, values, (err) => {
        if (err) {
            console.log(err);
        }

        res.json({ "result": "success" })
    });
});

module.exports = router;