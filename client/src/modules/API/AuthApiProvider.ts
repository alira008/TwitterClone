import axios from 'axios';
import config from '../../config/config.json';

interface LoginData {
    success: string;
    uid: string;
}

export const loginService = async (username: string, password: string) => {
    const route = "/auth/login"
    const userData = { username: username, password: password };
    const response = await axios.post<LoginData>(config.ApiService + route, userData);
    const data = response.data;
    return data;
}
