import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthRouting from './modules/routing/AuthRouting';
import NoAuthRouting from './modules/routing/NoAuthRouting';
import { AuthProvider } from './modules/Auth/AuthProvider';
import PrivateRoute from './modules/routing/PrivateRoute';

const App: React.FC = () => {

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <PrivateRoute>
            <AuthRouting />
          </PrivateRoute>
          <NoAuthRouting />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
