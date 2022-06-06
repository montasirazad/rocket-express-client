import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../Hooks/Hook/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { signedInUser, admin } = useAuth();

    if (signedInUser.email && admin) {
        return children
    }

    return   <Navigate to='/'  />
};

export default AdminRoute;