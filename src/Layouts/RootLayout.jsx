import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
         <Navbar/>

         <div className='container mx-auto'>

         <Outlet/>
         </div>
        </div>
    );
};

export default RootLayout;