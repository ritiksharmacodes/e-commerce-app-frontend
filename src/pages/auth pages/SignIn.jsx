import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaLessThanEqual, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { useGoogleLogin } from '@react-oauth/google';
import signinpgDefaultBg from "../../assets/signin pg bg.jpg";
import environmentVars from "../../conf.js";


function SignIn() {

    const { register, handleSubmit } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const googleOauthLogin = useGoogleLogin({
        onSuccess: async code => {
            try {                
                const res = await fetch(`${environmentVars.address_of_the_server}/${environmentVars.api_version}/auth/signin`, {
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ "auth_provider": 'google', "code": code })
                });
                const json_res = await res.json();

                console.log(json_res);
                
            } catch (error) {
                console.log(error);
            }
        }, flow: 'auth-code'
    });

    useEffect(() => {
        if (isLoading) {
            document.body.classList.add("overflow-y-hidden");
        }
        else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (<Box sx={{ margin: '0', backdropFilter: 'blur(4px)', zIndex: '99999', position: 'fixed', top: '0', width: '100%', height: '100vh' }}>
                <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50%' }} />
            </Box>) : <></>}

            <div className='flex'>
                <div className='md:w-2/5 md:h-full w-full'>
                    <div className='md:p-6 p-4'>
                        <p className='text-xl font-bold'>e-comm</p>
                    </div>

                    <div className='md:p-6 p-4 mt-3 flex flex-col gap-7'>
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

                <div className='hidden md:flex p-6 w-3/5 h-screen justify-center'>
                    <img src={signinpgDefaultBg} className='rounded-2xl' alt="" />
                </div>

            </div>
        </>
    )
}

export default SignIn
