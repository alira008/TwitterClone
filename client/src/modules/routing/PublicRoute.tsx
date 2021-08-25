import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';

interface Props {
	exact?: boolean | undefined;
	path: string;
	component: React.FC;
}

const PublicRoute: React.FC<Props> = ({
	exact,
	path,
	component: Component,
}) => {
	const { isLoggedIn } = useAuth();

	console.log(isLoggedIn);
	return (
		<Route
			path={path}
			exact={exact}
			render={({ location }) =>
				isLoggedIn ? (
					<Redirect
						to={{
							pathname: '/home',
							state: { from: location },
						}}
					/>
				) : (
					<Component />
				)
			}
		/>
	);
};

export default PublicRoute;
