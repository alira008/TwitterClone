import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
	UserPostsService,
	PostDataList,
} from '../../modules/API/ProfilePostsProvider';
import Tweet from '../Tweet/Tweet';
import { Li } from './ProfilePosts.styles';

interface Params {
	username: string;
	option: undefined | string;
}
interface Props {
	username: string;
}

const ProfilePosts: React.FC<Props> = ({ username }) => {
	const { option } = useParams<Params>();
	const [postList, setPostList] = useState<PostDataList>([]);

	useEffect(() => {
		if (option === undefined) {
			UserPostsService(username)
				.then((data) => {
					setPostList(data);
				})
				.catch((err) => {
					console.log(err);
				});
		} else if (option === 'with_replies') {
			setPostList([]);
		} else if (option === 'media') {
			setPostList([]);
		} else if (option === 'likes') {
			setPostList([]);
		} else {
			setPostList([]);
		}
	}, [option]);

	return (
		<ul>
			{postList.map((post) => (
				<Li key={post.post_id.toString()}>
					<Tweet
						postID={post.post_id}
						username={post.username}
						userHandle={post.user_handle}
						postText={post.post_text}
						timePosted={post.created_at}
						totalLikes={post.total_likes}
						totalReplies={post.total_replies}
					/>
				</Li>
			))}
		</ul>
	);
};

export default ProfilePosts;
