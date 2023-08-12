import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Shared/Footer';

const Main = () => {
    
    return (
        <div>
            <Navbar />
            <Outlet />
           <Footer/>
        </div>
    );
};

export default Main;