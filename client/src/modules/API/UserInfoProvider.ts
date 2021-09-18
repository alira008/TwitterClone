import axios from 'axios';

export interface UserInfoData {
	username: string;
	user_handle: string;
}

export interface UserInfoDataList extends Array<UserInfoData> {}

export const getUserInfoService = async () => {
	const route = '/users/userInfo';
	const response = await axios.get<UserInfoDataList>(route);
	const data = response.data[0];
	return data;
};
