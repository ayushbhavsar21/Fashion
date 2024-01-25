import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LogOut = () => {

    const {logout} = useAuth();

    useEffect(()=>{
        logout();
    }, [logout]);

    return <Navigate to="/"/>
}

export default LogOut