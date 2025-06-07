import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Shared/Loading';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }

    return children;
};

export default PrivateRoutes;