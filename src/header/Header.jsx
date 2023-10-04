import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SiChef } from "react-icons/si";
import { UserContext } from '../authprovider/AuthProvider';



const Header = () => {

    const {user,signOutUser,loginBtnClick} = useContext(UserContext);
    console.log(user);
    return (
        <div className='d-flex justify-content-between pt-3 '>
            <div>
                <p className='fs-4 fw-bold'>Wanganama</p>
            </div>
            <div>
                <SiChef className='fs-1'></SiChef>
            </div>
            <div className='d-flex flex-row'>
                <Link className='text-decoration-none  text-black ' to='/'>Home</Link>
                <Link className='text-decoration-none ms-2 text-black ' to='/blog'>Blog</Link>
                {
                    user && loginBtnClick
                    ?
                    <div className='d-flex flex-row'>
                        <p className='ms-2'>{user.displayName}</p>
                        <Link onClick={signOutUser} className='text-decoration-none ms-2 text-black '>Logout</Link>
                    </div>
                    :
                    <Link className='text-decoration-none ms-2 text-black ' to='/login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;