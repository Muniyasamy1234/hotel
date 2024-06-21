import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext();

export default function AuthProvider(props) {
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);

    const login = (user,admin) => {
        setUser(user);
        setAdmin(admin);
    }

    const logout = () => {
        setUser(null);
        setAdmin(null);
    }

    return (
        <div>
            <AuthContext.Provider value={{ admin ,user, login, logout }}>
                {props && props.children}
            </AuthContext.Provider>
        </div>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}


