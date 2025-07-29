import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaLessThanEqual, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from '@react-oauth/google';



function SignIn() {
    const { register, handleSubmit } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const googleOauthLogin = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

    return (
        <div className=''>

            <div className='p-4 bg-amber-300'>
                <p className='text-xl font-bold'>e-comm</p>
            </div>

            <div className='p-4 mt-3 flex flex-col gap-7'>
                <p className='capitalize text-2xl font-bold'>welcome back</p>
                <div className='text-sm'>
                    <p className='capitalize inline-block mr-1'>don't have an account?</p>
                    <Link className='font-bold underline' to={'/signup'}>Create an account </Link>
                </div>

                <form className='flex flex-col gap-7'>
                    <div className=''>
                        <input className='p-4 rounded-lg border-1 w-full' type="email" placeholder='Email' />
                    </div>
                    <div className='relative'>
                        <input className='p-4 rounded-lg border-1 w-full' type={`${!isPasswordVisible ? "password" : "text"}`} placeholder='Password' />
                        {!isPasswordVisible ? <FaRegEye onClick={() => setIsPasswordVisible(true)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' /> : <FaRegEyeSlash onClick={() => setIsPasswordVisible(false)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' />}
                    </div>
                    <button className='bg-blue-400 rounded-md text-white font-semibold py-3' type="submit">Sign In</button>
                    <div className='py-1 relative'>
                        <hr className='text-gray-500' />
                        <p className='absolute px-4 bg-white top-1/2 left-1/2 -translate-1/2 text-nowrap font-bold'>or continue with</p>
                    </div>
                </form>

                <div onClick={() => googleOauthLogin()} className='rounded-md text-black font-semibold py-3 border-1 flex justify-center items-center gap-2'>
                    <FaGoogle />
                    <p>Google</p>
                </div>
            </div>

        </div>
    )
}

export default SignIn
