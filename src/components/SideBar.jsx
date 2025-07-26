import React, { useEffect } from 'react'
import { IoCloseCircle } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { TiHome } from "react-icons/ti";


function SideBar({ isSidebarOpenState, setIsSidebarOpenFunc }) {

    useEffect(()=>{
        if(isSidebarOpenState) {
            document.body.classList.add("overflow-y-hidden");
        }
        else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [isSidebarOpenState]);


    return (
        <>
            <div className={`absolute top-0 left-0 w-full flex h-full z-99999 transition-transform duration-300 ease-in-out ${isSidebarOpenState === true ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='w-[80%] bg-white h-full shadow-2xl overflow-y-scroll'>


                    <div className='flex flex-col gap-7 p-4'>
                        <div className='flex items-center justify-end gap-2'>
                            <p className='font-bold'>Your account </p>
                            <CiUser className='text-2xl' />
                        </div>
                        <div>
                            <p className='font-bold text-2xl'>Browse</p>
                            <p className='font-extrabold text-4xl'>e-comm</p>
                        </div>
                    </div>

                    <div>
                        
                        <div className='flex justify-between items-center p-3 border-b border-t'>
                            <p className='text-lg font-bold'>Home</p>
                            <TiHome className='text-2xl' />
                        </div>

                        <div className='capitalize p-3 flex flex-col gap-5 border-b'>
                            <h1 className='font-bold'>Top categories for you</h1>
                            <div className='flex flex-col gap-5'>
                                <p>books</p>
                                <p>mobiles</p>
                                <p className='font-medium'>See All categories</p>
                            </div>
                        </div>
                        <div className='capitalize p-3 flex flex-col gap-5 border-b'>
                            <h1 className='font-bold'>Top categories for you</h1>
                            <div className='flex flex-col gap-5'>
                                <p>books</p>
                                <p>mobiles</p>
                                <p className='font-medium'>See All categories</p>
                            </div>
                        </div>
                        <div className='capitalize p-3 flex flex-col gap-5 border-b'>
                            <h1 className='font-bold'>Top categories for you</h1>
                            <div className='flex flex-col gap-5'>
                                <p>books</p>
                                <p>mobiles</p>
                                <p className='font-medium'>See All categories</p>
                            </div>
                        </div>
                        <div className='capitalize p-3 flex flex-col gap-5 border-b'>
                            <h1 className='font-bold'>Top categories for you</h1>
                            <div className='flex flex-col gap-5'>
                                <p>books</p>
                                <p>mobiles</p>
                                <p className='font-medium'>See All categories</p>
                            </div>
                        </div>
                        <div className='capitalize p-3 flex flex-col gap-5 border-b'>
                            <h1 className='font-bold'>Top categories for you</h1>
                            <div className='flex flex-col gap-5'>
                                <p>books</p>
                                <p>mobiles</p>
                                <p className='font-medium'>See All categories</p>
                            </div>
                        </div>
                        

                    </div>


                </div>
                <div onClick={() => setIsSidebarOpenFunc(false)} className='w-[20%] h-full flex justify-center'>
                    <IoCloseCircle onClick={() => setIsSidebarOpenFunc(false)} className='text-5xl mt-11 text-white' />
                </div>
            </div>
            <div className={`${isSidebarOpenState === true ? 'block' : 'hidden'} absolute h-full left-0 bg-[#0000004b] top-0 w-full z-9999`}></div>
        </>
    )
}

export default SideBar
