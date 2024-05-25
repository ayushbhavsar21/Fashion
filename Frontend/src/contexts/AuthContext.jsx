import { createContext, useContext, useState, useEffect } from "react";
import { ApiError } from "../../../Backend/src/utils/ApiError";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('accessToken') || '');
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true);  

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem('accessToken', serverToken);
        setToken(serverToken);
    }

    let isLoggedIn = !!token;

    const logout = () => {
        localStorage.removeItem('accessToken');
        setToken("");
    }

    const userAuthentication = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/v1/users/user', {
                method: 'GET',
                headers: {
                    'Authorization': `${token}`
                }                
            });
    
            if (response.ok) {
                const userData = await response.json();
                setUser(userData.data);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Error in verifyJWT middleware:", error);
            throw new ApiError(401, error?.message || "Invalid access token!!");
        } finally {
            setLoading(false);  
        }
    };

    /*useEffect(() => {
        userAuthentication();
    }, [token]);*/

    return (
        <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, logout, user, loading, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}
