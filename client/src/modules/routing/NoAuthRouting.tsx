import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../../pages/LandingPage/Landing';
import Login from '../../pages/LoginPage/Login';
import Register from '../../pages/RegisterPage/Register';

const NoAuthRouting: React.FC = () => {

    return (
        <>
            <Route exact path="/"><Landing /></Route>
            <Route exact path="/login"><Login /></Route>
            <Route exact path="/register"><Register /></Route>
        </>
    )
};

export default NoAuthRouting
