import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <nav className='bg-foreground border-b border-b-primary mb-4'>
            <div className='flex items-center justify-between px-4 py-4 md:px-20'>
                <h1 className='text-[1.2rem] md:text-[2rem] font-medium text-primary'>
                    Admin
                </h1>
                <img src={assets.logo} alt='logo' className='w-48 md:w-64' />
            </div>
            <div className='flex justify-between items-center px-4 md:px-20 my-4 mx-2 md:w-1/2'>
                <NavLink
                    to='/requestsPage'
                    className='px-4 md:px-10 border border-primary hover:bg-primary text-primary hover:text-primary-content py-2 rounded-sm transition ease-in-out duration-300'
                >
                    Requests
                </NavLink>

                <NavLink
                    to='/GenerateIdPage'
                    className='px-4 md:px-10 border border-primary hover:bg-primary text-primary hover:text-primary-content py-2 rounded-sm transition ease-in-out duration-300'
                >
                    Generate ID
                </NavLink>

                <NavLink
                    to='/manageIdPage'
                    className='px-4 md:px-10 border border-primary hover:bg-primary text-primary hover:text-primary-content py-2 rounded-sm transition ease-in-out duration-300'
                >
                    Manage ID's
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
