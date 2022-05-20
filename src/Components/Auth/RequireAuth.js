import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = () => {
    const [user,loading,error] = useAuthState(auth)
    const location = useLocation()
    if(!user){
        return <Navigate to="/login" state={{from:location}} />
    }
    return <Outlet/>

};

export default RequireAuth;