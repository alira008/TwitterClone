import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';

interface props {
	exact?: boolean;
	path: string;
	component: React.FC;
}

const PrivateRoute: React.FC<props> = ({
	exact,
	path,
	component: Component,
}) => {
	const { isLoggedIn } = useAuth();

	return (
		<Route
			exact={exact}
			path={path}
			render={() => (isLoggedIn ? <Component /> : <Redirect to="/" />)}
		/>
	);
};

export default PrivateRoute;
