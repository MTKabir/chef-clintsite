import React from 'react';
import { SiFacebook, SiInstagram, SiTwitch } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='d-flex flex-row justify-content-between mt-4 '>
            <div>
                <address>
                    Level-4, 34, Awal Centre, Banani, Dhaka z<br/>
                    Support: Web@Programming-Hero.Com<br/>
                    Available : 10:00am To 07:00pm<br/>
                </address>

            </div>
            <div className='d-flex flex-column '>
                <Link className='text-decoration-none text-black' to="/">Home</Link>
                <Link className='text-decoration-none text-black' to="/blog">Blog</Link>
                <Link className='text-decoration-none text-black' to="/login">Login</Link>

            </div>
            <div>
                <p>Follow us</p>
                <div className='d-flex flex-row '>
                    <SiFacebook className='ms-2 fs-2'></SiFacebook>
                    <SiTwitch className='ms-2 fs-2'></SiTwitch>
                    <SiInstagram className='ms-2 fs-2'></SiInstagram>
                </div>
            </div>
        </div>
    );
};

export default Footer;