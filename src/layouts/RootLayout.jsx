import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div className='roboto-slab'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;