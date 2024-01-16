import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LogOut = () => {

    const {LogOut} = useAuth();

    useEffect(()=>{
        LogOut();
    }, [LogOut]);

    return <Navigate to="/"/>
}

export default LogOut