import axios from 'axios';

export interface PostData {
	post_id: number;
	username: string;
	user_handle: string;
	post_text: string;
	created_at: Date;
	total_likes: number;
	total_replies: number;
	uid: number;
}

export interface PostDataList extends Array<PostData> {}

export const UserPostsService = async (username: string) => {
	const route = `/posts/${username}`;
	const response = await axios.get<PostDataList>(route);
	const data = response.data;
	return data;
};
