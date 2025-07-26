import React from 'react'
import { IoCloseCircle } from "react-icons/io5";

function SideBar({ isSidebarOpenState, setIsSidebarOpenFunc }) {

    return (
        <>
            <div className={`absolute top-0 left-0 w-full flex h-full z-99999 transition-transform duration-300 ease-in-out ${isSidebarOpenState === true ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[80%] bg-white h-full shadow-2xl p-4'>
                    <h1>adad</h1>
                    <h1>adad</h1>
                    <h1>adad</h1>
                    <h1>adad</h1>
                </div>
                <div onClick={() => setIsSidebarOpenFunc(false)} className=' w-[20%] h-full flex justify-center'>
                    <IoCloseCircle onClick={() => setIsSidebarOpenFunc(false)} className='text-5xl mt-11 text-white' />
                </div>
            </div>
            <div className={`${isSidebarOpenState === true ? 'block' : 'hidden'} absolute h-full left-0 bg-[#0000004b] top-0 w-full z-9999`}></div>
        </>
    )
}

export default SideBar
