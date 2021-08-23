import React from 'react';
import Layout from '../layout/Layout';
import Home from '../../pages/HomePage/Home';
import ComposeTweetPage from '../../pages/ComposeTweetPage/ComposeTweetPage';
import PrivateRoute from './PrivateRoute';

const AuthRouting: React.FC = () => {
	return (
		<Layout>
			<PrivateRoute exact path="/home" component={Home} />
			<PrivateRoute exact path="/compose/tweet" component={ComposeTweetPage} />
			{/* <PrivateRoute path="/:username" /> */}
		</Layout>
	);
};

export default AuthRouting;
