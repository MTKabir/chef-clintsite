import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SiChef } from "react-icons/si";
import { UserContext } from '../authprovider/AuthProvider';
import './Header.css'
const Header = () => {
    const { user, signOutUser } = useContext(UserContext);
    console.log(user);

    return (
        <div className='d-flex justify-content-between pt-3'>
            <div>
                <p className='fs-4 fw-bold'>Wanganama</p>
            </div>
            <div>
                <SiChef className='fs-1'></SiChef>
            </div>
            <div className='d-flex flex-row align-items-center'>
                <NavLink className=' text-black ' to='/'>Home</NavLink>
                <NavLink className=' ms-2 text-black ' to='/blog'>Blog</NavLink>
                {user ? (
                    <div
                        className='d-flex flex-row align-items-center'
                    >
                        <img className='ms-2 rounded-circle' src={user.photoURL} alt="" width="32" height="32" />
                        <NavLink onClick={signOutUser} className=' ms-2 text-black '>Logout</NavLink>
                    </div>
                ) : (
                    <NavLink className=' ms-2 text-black ' to='/login'>Login</NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
