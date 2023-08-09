import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    const location=useLocation();
    const noHeaderFooter= location.pathname.includes('/login')|| location.pathname.includes('/Register')
    console.log('path',noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
           {noHeaderFooter ||  <Footer/>}
        </div>
    );
};

export default Main;