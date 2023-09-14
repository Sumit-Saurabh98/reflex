import React, { createContext, useState, useEffect } from 'react';



export const authContext = createContext();

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuth(true);
        }
    }, []); 

    const logOut = () => {
        localStorage.clear();
        setAuth(false);
    }

    const toggleAuth = () => {
        setAuth(true)
    }

    console.log(auth, "from authfile")

    

    const value = { auth, logOut, toggleAuth };
    
    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContextProvider;
