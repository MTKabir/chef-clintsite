import React from 'react';
import { Link } from 'react-router-dom';
import { SiChef } from "react-icons/si";



const Header = () => {
    return (
        <div className='d-flex justify-content-between pt-3 '>
            <div>
                <p className='fs-4 fw-bold'>Wanganama</p>
            </div>
            <div>
                <SiChef className='fs-1'></SiChef>
            </div>
            <div>
                <Link className='text-decoration-none  text-black ' to='/'>Home</Link>
                <Link className='text-decoration-none ms-2 text-black ' to='/blog'>Blog</Link>
                <Link className='text-decoration-none ms-2 text-black ' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Header;