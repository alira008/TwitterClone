import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';
import Layout from '../layout/Layout';

interface Props {
	exact?: boolean | undefined;
	path: string;
	component: React.FC;
}

const PrivateRoute: React.FC<Props> = ({
	exact,
	path,
	component: Component,
}) => {
	const { isLoggedIn } = useAuth();

	return (
		<Route
			exact={exact}
			path={path}
			render={({ location }) =>
				isLoggedIn ? (
					<Layout>
						<Component />
					</Layout>
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
