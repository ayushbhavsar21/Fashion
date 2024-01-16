import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children})=>{

    const [token, setToken] = useState(localStorage.getItem('token'));

    const storetokenInLS = (serverToken)=>{
        return localStorage.setItem('token', serverToken);
    }

    let isLoggedIn = !!token;

    const LogOut = ()=>{
        setToken("");
        return localStorage.removeItem('token')
    }

    return(
        <AuthContext.Provider value={{storetokenInLS, isLoggedIn, LogOut}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}