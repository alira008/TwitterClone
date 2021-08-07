import React from 'react'
import { Redirect } from 'react-router-dom';
import { useAuth } from '../Auth/AuthProvider';

const PrivateRoute: React.FC = ({ children }) => {
    const { isLoggedIn } = useAuth();
    console.log(isLoggedIn)
    return (
        <>
            {isLoggedIn ? (children) : <Redirect from="/home" to="/" />}
        </>
    )
}

export default PrivateRoute
