const express = require('express');
const cors = require('cors');
const app = express();
const port = 4201;

app.use(cors())
app.use(express.json());

//  Routers
const postRouter = require('./routes/Posts');
const replyRouter = require('./routes/Replies');
const likesRouter = require('./routes/Likes');
const usersRouter = require('./routes/Users');
app.use('/posts', postRouter);
app.use('/replies', replyRouter);
app.use('/likes', likesRouter);
app.use('/auth', usersRouter);


app.listen(port, () => {
    console.log("Server is running");
});