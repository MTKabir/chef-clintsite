import React from 'react';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;