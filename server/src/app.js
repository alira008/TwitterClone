const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//  Routers
const postRouter = require('./routes/Posts');
const usersRouter = require('./routes/Users');
const likesRouter = require('./routes/Likes');
const repliesRouter = require('./routes/Replies');
const authRouter = require('./routes/Auth');
app.use('/posts', postRouter);
app.use('/users', usersRouter);
app.use('/likes', likesRouter);
app.use('/replies', repliesRouter);
app.use('/auth', authRouter);

app.listen(port, async () => {
	console.log('Server is running');
});
