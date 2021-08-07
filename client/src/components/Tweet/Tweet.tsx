import React from 'react';
import './Tweet.css';
import { Repeat, ChatBubbleOutlineOutlined, FavoriteBorderOutlined, ShareOutlined } from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';

interface TweetProps {
    postID: number;
    username: string;
    userHandle: string;
    postText: string;
    timePosted: Date;
}

const Tweet: React.FC<TweetProps> = ({ postID, username, userHandle, postText, timePosted }) => {
    // console.log(postID, userHandle)
    return (
        <div className="tweet-container">
            <div className="container" id="left">
                <Avatar size="md" link="/" />
            </div>
            <div className="container" id="right">
                <div className="top-user-info">
                    <div id="userHandle">{userHandle}</div>
                    @{username} · 2h</div>
                <div className="post-info">
                    {postText}
                    <div className="lower-post-details">
                        <IconButton Icon={ChatBubbleOutlineOutlined} text="2" />
                        <IconButton Icon={Repeat} text="6" hoverColor="var(--twitter-green)" bgHoverColor="var(--twitter-green-opacity)" />
                        <IconButton Icon={FavoriteBorderOutlined} text="328" hoverColor="var(--twitter-red)" bgHoverColor="var(--twitter-red-opacity)" />
                        <IconButton Icon={ShareOutlined} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet;
