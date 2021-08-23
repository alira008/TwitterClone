import React from 'react';
import './Tweet.css';
import {
	Repeat,
	ChatBubbleOutlineOutlined,
	FavoriteBorderOutlined,
	ShareOutlined,
} from '@material-ui/icons';
import IconButton from '../IconButton/IconButton';
import Avatar from '../Avatar/Avatar';
import axios from 'axios';
import Cookies from 'js-cookie';

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
	const likeOnClick = async () => {
		const uid = Cookies.get('user_id');
		const data = { uid: uid };
		await axios
			.post(`/likes/${postID}`, data)
			// .then(() => console.log('Request to like post sent'))
			.catch((err) => console.error(err.message));
	};

	const commentOnClick = () => {};

	return (
		<div className="tweet-container">
			<div className="container" id="left">
				<Avatar size="md" link="/" />
			</div>
			<div className="container" id="right">
				<div className="top-user-info">
					<div id="userHandle">{userHandle}</div>@{username} · 2h
				</div>
				<div className="post-info">
					{postText}
					<div className="lower-post-details">
						<IconButton
							Icon={ChatBubbleOutlineOutlined}
							text={totalReplies.toString()}
						/>
						<IconButton
							Icon={Repeat}
							text="6"
							hoverColor="var(--twitter-green)"
							bgHoverColor="var(--twitter-green-opacity)"
						/>
						<IconButton
							Icon={FavoriteBorderOutlined}
							text={totalLikes.toString()}
							hoverColor="var(--twitter-red)"
							bgHoverColor="var(--twitter-red-opacity)"
							onClick={likeOnClick}
						/>
						<IconButton Icon={ShareOutlined} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tweet;
