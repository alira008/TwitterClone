import axios from 'axios';

interface LoginData {
	success: string;
	uid: string;
}

interface RegisterData {
	username: string;
	userHandle: string;
	password: string;
	dateOfBirth: string;
}

export const loginService = async (username: string, password: string) => {
	const route = '/auth/login';
	const userData = {
		username: username,
		password: password,
	};
	const response = await axios.post<LoginData>(route, userData);
	const data = response.data;
	return data;
};

export const registerService = async (
	username: string,
	userHandle: string,
	password: string,
	dateOfBirth: string
) => {
	const route = '/auth/register';
	const userData = {
		username: username,
		userHandle: userHandle,
		password: password,
		dateOfBirth: dateOfBirth,
	};

	const response = await axios.post<RegisterData>(route, userData);
	const data = response.data;
	return data;
};
