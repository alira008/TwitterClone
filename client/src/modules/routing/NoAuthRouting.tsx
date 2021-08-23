import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Landing from '../../pages/LandingPage/Landing';
import Login from '../../pages/LoginPage/Login';
import Register from '../../pages/RegisterPage/Register';

const NoAuthRouting: React.FC = () => {
	return (
		<>
			<Route exact path="/" component={Landing} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
			<Redirect to="/" />
		</>
	);
};

export default NoAuthRouting;
