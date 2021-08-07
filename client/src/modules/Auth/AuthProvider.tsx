import React, { createContext, useContext, useState } from 'react';
import { authTypes } from './AuthTypes';

const AuthContext = createContext<authTypes>({ isLoggedIn: false, setIsLoggedIn: () => { } })

export const AuthProvider: React.FC = ({ children }) => {
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

const useAuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return {
        isLoggedIn,
        setIsLoggedIn
    }
}
