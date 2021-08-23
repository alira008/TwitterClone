import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { authTypes } from './AuthTypes';

const AuthContext = createContext<authTypes>({
	isLoggedIn: false,
	setIsLoggedIn: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
	const { isLoggedIn, setIsLoggedIn } = useAuthProvider();

	useEffect(() => {
		let uid = Cookies.get('user_id');
		if (uid) setIsLoggedIn(true);
	}, []);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

const useAuthProvider = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	console.log(isLoggedIn);
	return {
		isLoggedIn,
		setIsLoggedIn,
	};
};
