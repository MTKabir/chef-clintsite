import React from 'react';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;