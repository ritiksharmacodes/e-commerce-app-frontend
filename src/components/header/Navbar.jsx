import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import SideBar from '../SideBar';



import { IoCloseCircle } from "react-icons/io5";



function Navbar({ props }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);


    const nameOfUser = `Ritik`;
    return (
        <>
            <nav className={`bg-white px-3 py-4 flex justify-between md:px-7 ${props}`}>
                <div className='flex items-center gap-5'>                   

                    <div id='sidebar-1' className={`absolute top-0 left-0 w-full flex h-full z-99999 transition-transform duration-300 ease-in-out ${ isSidebarOpen === true ? 'translate-x-0' : '-translate-x-full' }`}>
                        <div className='w-[80%] bg-white h-full shadow-2xl p-4'>
                            <h1>adad</h1>
                            <h1>adad</h1>
                            <h1>adad</h1>
                            <h1>adad</h1>
                        </div>
                        <div onClick={() => { }} className='bg-[#00000071] w-[20%] h-full flex justify-center'>
                            <IoCloseCircle onClick={() => setIsSidebarOpen(false)} className='text-5xl mt-11 text-white' />
                        </div>
                    </div>

                    <RxHamburgerMenu onClick={() => setIsSidebarOpen(true)} className='text-4xl md:hidden' />
                    <h1 className='text-2xl font-bold'>e-comm</h1>
                </div>

                {/* <div className='hidden font-bold md:flex md:items-center md:[&>*]:px-3'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </div> */}

                {/* below; for desktop screens search-bar */}
                <div className='hidden md:flex relative h-[50px] px-3 w-[30%]'>
                    <input placeholder='Search product' className='w-full p-4 outline-blue-400' type="text" />
                    <div className='bg-blue-400 absolute right-[14px] top-[2px] rounded-lg p-2 cursor-pointer'>
                        <CiSearch className='text-3xl text-white' />
                    </div>
                </div>

                {/* below; user-account, cart icons for mobile screens */}
                <div className='md:hidden flex cursor-pointer items-center gap-3'>
                    <div className='mr-[-13px]'> {nameOfUser.length > 5 ? nameOfUser.substring(0, 3) + "..." : nameOfUser} {`>`}</div>
                    <CiUser className='text-4xl text-black' />
                    <div className='bg-blue-400 rounded-lg p-2'>
                        <CiShoppingCart className='text-4xl text-white' />
                    </div>
                </div>

                {/* below; cart icon for dekstop */}
                <div className='hidden md:flex gap-1'>
                    <div className='bg-blue-400 flex relative rounded-lg p-2 cursor-pointer'>
                        <div className=''>
                            <CiShoppingCart className='text-4xl text-white' />
                        </div>
                        <p className='self-end text-[14px] text-white'>cart</p>
                    </div>
                </div>
            </nav>

            {/* below; search bar for mobile screens */}
            <div>
                <hr className='mt-1 mb-2 md:mb-0' />
                <div className='flex relative h-[50px] md:hidden px-3'>
                    <input placeholder='Search product' className='w-full p-4 outline-blue-400' type="text" />
                    <div className='bg-blue-400 absolute right-[14px] top-[2px] rounded-lg p-2 cursor-pointer'>
                        <CiSearch className='text-3xl text-white' />
                    </div>
                </div>
                <hr className='md:hidden mt-2' />
            </div>

        </>
    )
}

export default Navbar
