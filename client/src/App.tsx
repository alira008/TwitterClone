import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './modules/Auth/AuthProvider';
import axios from 'axios';
import Routing from './modules/routing/Routing';

axios.defaults.baseURL = process.env.REACT_APP_API_SERVICE;
axios.defaults.withCredentials = true;

const App: React.FC = () => {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Routing />
				</Router>
			</AuthProvider>
		</div>
	);
};

export default App;
