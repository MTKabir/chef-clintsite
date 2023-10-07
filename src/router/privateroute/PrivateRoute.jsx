import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../authprovider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { user, loader } = useContext(UserContext);
    if (loader) {
        return <div class="d-flex justify-content-center align-items-center text-primary">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>

    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={{ from: location }} to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;