import axios, { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuth } from '../../modules/Auth/AuthProvider';
import Tweet from '../Tweet/Tweet';
import { Ul, Li } from './TweetList.styles';
// import Avatar from '../Avatar/Avatar';

interface TweetPost {
	post_id: number;
	username: string;
	user_handle: string;
	post_text: string;
	created_at: Date;
	total_likes: number;
	total_replies: number;
	uid: number;
}

interface Props {}

const TweetList: React.FC<Props> = () => {
	const [tweetsList, setTweetsList] = useState<TweetPost[]>([]);
	const { setIsLoggedIn } = useAuth();

	useEffect(() => {
		axios
			.get<TweetPost[]>('/posts')
			.then((res: AxiosResponse) => {
				setTweetsList(res.data);
			})
			.catch((err) => {
				setIsLoggedIn(false);
			});
	}, []);

	return (
		<Ul>
			{tweetsList.map((tweet: TweetPost) => (
				<Li key={tweet.post_id.toString()}>
					<Tweet
						postID={tweet.post_id}
						username={tweet.username}
						userHandle={tweet.user_handle}
						postText={tweet.post_text}
						timePosted={tweet.created_at}
						totalLikes={tweet.total_likes}
						totalReplies={tweet.total_replies}
					/>
				</Li>
			))}
		</Ul>
	);
};

export default TweetList;
