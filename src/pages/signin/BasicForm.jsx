import React from 'react';
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";


function BasicForm() {
    const {register, handleSubmit} = useForm();

    return (
        <form className='flex flex-col gap-7'>
            <div className=''>
                <input className='p-4 rounded-lg border-1 w-full' type="email" placeholder='Email' />
            </div>
            <div className='relative'>
                <input className='p-4 rounded-lg border-1 w-full' type="password" placeholder='Password'/>
                <FaRegEye className='text-2xl absolute right-0 top-[50%] translate-[-50%]' />
                {/* <FaRegEyeSlash className='text-2xl absolute right-0 top-[50%] translate-[-50%]' /> */}
            </div>
        </form>
    )
}

export default BasicForm
