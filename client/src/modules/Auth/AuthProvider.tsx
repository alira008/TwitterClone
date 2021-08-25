import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { authTypes } from './AuthTypes';

const AuthContext = createContext<authTypes>({
	isLoggedIn: undefined,
	setIsLoggedIn: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
	// const { isLoggedIn, setIsLoggedIn } = useAuthProvider();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const uid = Cookies.get('user_id');
		if (uid) {
			setIsLoggedIn(true);
		} else setIsLoggedIn(false);
	}, [isLoggedIn]);

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
			{isLoggedIn === undefined ? <h1>Loading</h1> : children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

const useAuthProvider = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return {
		isLoggedIn,
		setIsLoggedIn,
	};
};
