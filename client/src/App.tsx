import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthRouting from './modules/routing/AuthRouting';
import NoAuthRouting from './modules/routing/NoAuthRouting';
import { AuthProvider } from './modules/Auth/AuthProvider';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_SERVICE;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<div className="App">
						<AuthRouting />
						<NoAuthRouting />
					</div>
				</Switch>
			</Router>
		</AuthProvider>
	);
};

export default App;
