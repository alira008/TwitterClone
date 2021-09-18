import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ComposeTweetPage from '../../pages/ComposeTweetPage/ComposeTweetPage';
import Home from '../../pages/HomePage/Home';
import Landing from '../../pages/LandingPage/Landing';
import Login from '../../pages/LoginPage/Login';
import Logout from '../../pages/LogoutPage/Logout';
import Register from '../../pages/RegisterPage/Register';
import UserProfile from '../../pages/UserProfilePage/UserProfile';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

interface Props {}

const Routing: React.FC<Props> = () => {
	return (
		<Switch>
			<PublicRoute exact path="/" component={Landing} />
			<PublicRoute exact path="/login" component={Login} />
			<PublicRoute exact path="/register" component={Register} />
			<PrivateRoute exact path="/home" component={Home} />
			<PrivateRoute exact path="/compose/tweet" component={ComposeTweetPage} />
			<PrivateRoute exact path="/logout" component={Logout} />
			<PrivateRoute path="/:username/:option" component={UserProfile} />
			<PrivateRoute path="/:username" component={UserProfile} />
			<Redirect to="/" />
		</Switch>
	);
};

export default Routing;
