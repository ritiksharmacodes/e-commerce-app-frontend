import React from 'react'
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
    return (
        <div>
            <Navbar />

            <nav className='hidden md:flex px-5 shadow-xl gap-4'>
                <div className='flex items-center gap-1 cursor-pointer active:text-gray-500 h-10 w-18 justify-center hover:border-1'>
                    <RxHamburgerMenu className='text-2xl' />
                    <h1 className='font-bold'>All</h1>
                </div>
                <NavLink to="/..." className={`font-semibold capitalize active:text-gray-500 px-1 hover:border-1 flex items-center hover:ml-[-0.13rem]`}>Category1</NavLink>
            </nav>

            {/* below is for mobile screens */}
            <nav className='md:hidden px-3 py-2 shadow-xl'>
                <NavLink to="/..." className={`capitalize active:text-gray-500`}>
                    <div className='text-[0.78rem]'>shop by</div>
                    <div className='mt-[-5px]'>category</div>
                </NavLink>
            </nav>
        </div>
    )
}

export default Header;
