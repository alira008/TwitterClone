import React from 'react';
import './Tweet.css';
import {
	Repeat,
	ChatBubbleOutlineOutlined,
	ShareOutlined,
} from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import LikeButton from '../LikeButton/LikeButton';

interface TweetProps {
	postID: number;
	username: string;
	userHandle: string;
	postText: string;
	timePosted: Date;
	totalLikes: number;
	totalReplies: number;
}

const Tweet: React.FC<TweetProps> = ({
	postID,
	username,
	userHandle,
	postText,
	timePosted,
	totalLikes,
	totalReplies,
}) => {
	const profileLink = '/' + username;
	const commentOnClick = () => {};

	return (
		<div className="tweet-container">
			<div className="container" id="left">
				<Avatar size="md" link={profileLink} seed={username} />
			</div>
			<div className="container" id="right">
				<a className="top-user-info" href={profileLink}>
					<div id="userHandle">{userHandle}</div>@{username} · 2h
				</a>
				<div className="post-info">
					{postText}
					<div className="lower-post-details">
						<IconButton
							Icon={ChatBubbleOutlineOutlined}
							text={totalReplies.toString()}
						/>
						<IconButton
							Icon={Repeat}
							text="0"
							hoverColor="var(--twitter-green)"
							bgHoverColor="var(--twitter-green-opacity)"
						/>
						<LikeButton postID={postID} totalLikes={totalLikes} />
						<IconButton Icon={ShareOutlined} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
