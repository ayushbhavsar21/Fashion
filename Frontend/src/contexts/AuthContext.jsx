import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const setCookie = (name, value, days) => {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    };

    const getCookie = (name) => {
        const cookieName = `${name}=`;
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(';');
        for (let cookie of cookieArray) {
            while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(cookieName) === 0) {
                return cookie.substring(cookieName.length, cookie.length);
            }
        }
        return '';
    };

    const removeCookie = (name) => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    };

    const [token, setToken] = useState(getCookie('accessToken') || '');
    const [user, setUser] = useState("");
    
    const storeTokenInCookie = (serverToken) => {
        setToken(serverToken);
        setCookie('accessToken', serverToken, 7); 
    }

    let isLoggedIn = !!token;

    const logout = () => {
        setToken("");
        removeCookie('accessToken');
    }

    const userAuthentication = async () => {
        try {
            // Retrieve the token from the cookie
            const token = getTokenFromCookie();
    
            if (!token) {
                // Token not found, exit early
                return;
            }
    
            // Make a GET request to the user endpoint with the token in the cookie
            const response = await fetch('http://localhost:8000/api/v1/users/user', {
                method: 'GET',
                headers: {
                    'Cookie': `accessToken=${token}`,
                }
            });
    
            if (response.ok) {
                // Response is successful, extract user data from the response
                const userData = await response.json();
                setUser(userData.data);
            } else {
                // Reset user if authentication fails
                setUser(null);
            }
        } catch (error) {
            console.log("Error in user authentication:", error);
        }
    };
    
    // Function to retrieve token from the cookie
    const getTokenFromCookie = () => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name === 'accessToken') {
                return value;
            }
        }
        return null;
    };
    

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
        <AuthContext.Provider value={{ storeTokenInCookie, isLoggedIn, logout, user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
