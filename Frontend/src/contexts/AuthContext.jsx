import { createContext, useContext, useState, useEffect } from "react";

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
            console.log("Error in user authentication:", error);
        } finally {
            setLoading(false);  
        }
    };

    useEffect(() => {
        userAuthentication();
    }, [token]);

    return (
        <AuthContext.Provider value={{ storeTokenInLS, isLoggedIn, logout, user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext);
}
