import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ComposeTweetPage from '../../pages/ComposeTweetPage/ComposeTweetPage';
import Home from '../../pages/HomePage/Home';
import Landing from '../../pages/LandingPage/Landing';
import Login from '../../pages/LoginPage/Login';
import Register from '../../pages/RegisterPage/Register';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

interface Props {}

const Routing: React.FC<Props> = () => {
	return (
		<Switch>
			<PrivateRoute exact path="/home" component={Home} />
			<PrivateRoute exact path="/compose/tweet" component={ComposeTweetPage} />
			<PublicRoute exact path="/" component={Landing} />
			<PublicRoute exact path="/login" component={Login} />
			<PublicRoute exact path="/register" component={Register} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routing;