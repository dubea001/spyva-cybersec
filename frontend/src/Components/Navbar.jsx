import React from 'react';
// import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
    return (
        <nav className='flex flex-col items-center md:justify-between md:flex-row'>
            <a href='#' className='mb-4 w-[10rem] md:mb-0 md:w-[15rem]'>
                <img src={assets.logo} alt='spyva logo' />
            </a>
            <div className='w-full md:w-[25rem] font-Lato'>
                <ul className='flex justify-evenly'>
                    <li className='cursor-pointer rounded-default px-2 py-1 hover:bg-background dark:hover:bg-primary-light'>
                        Get Started
                    </li>
                    <li className='cursor-pointer rounded-default px-2 py-1 hover:bg-background dark:hover:bg-primary-light'>
                        Docs
                    </li>
                    <li className='cursor-pointer rounded-default px-2 py-1 hover:bg-background dark:hover:bg-primary-light'>
                        Articles
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
