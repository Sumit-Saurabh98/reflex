import React from 'react';
 import { createContext, useState } from 'react';
 import jwt_decode from "jwt-decode"
 import axios from 'axios';

 export const filterContext = createContext()

function FilterContext({children}) {
    const [auth, setAuth] = useState(false)


    const token = localStorage.getItem("token");

    if(token){
        setAuth(!auth)
    }


    const value = {auth}
    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    );
}

export default FilterContext;