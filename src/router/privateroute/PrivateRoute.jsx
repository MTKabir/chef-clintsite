import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../authprovider/AuthProvider';

const PrivateRoute = ({children}) => {
    const location = useLocation();

    const {user,loginBtnClick} = useContext(UserContext);
    console.log(loginBtnClick,user);
    if(user && loginBtnClick === true){
        return children;
    }
    return (
        <Navigate state={{from:location}} to='/login'>

        </Navigate>
    );
};

export default PrivateRoute;