import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaLessThanEqual, FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import signinpgDefaultBg from "../../assets/signin pg bg.jpg"
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import environmentVars from "../../conf.js";


function SignUp() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            username: '',
            password: '',
        }
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef(null);

    const signup_handler = async (form_data) => {
        try {
            setIsLoading(true);
            
            const res = await fetch(`${environmentVars.address_of_the_server}/${environmentVars.api_version}/auth/signup`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form_data),
            });
            const res_json = await res.json();

            console.log(res_json);

            if( res_json.name === 'error' && res_json.code === '23505' && res_json.constraint === 'users_username_key' ) {
                console.log('Username already exists');
            }
            if( res_json.name === 'error' && res_json.code === '23505' && res_json.constraint === 'users_email_key' ) {
                console.log('Email already exists');
            }

            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const signup_error_handler = (err) => {
        console.log(err);
    };    

    useEffect(()=>{
        if(isLoading) {
            document.body.classList.add("overflow-y-hidden");
        }
        else {
            document.body.classList.remove("overflow-y-hidden");
        }
    }, [isLoading]);

    return (
        <>
            { isLoading ? (<Box sx={{ margin:'0', backdropFilter: 'blur(4px)', zIndex: '99999', position: 'fixed', top: '0', width: '100%', height: '100vh' }}>
                <CircularProgress sx={{ position: 'absolute', top: '50%', left: '50%', translate: '-50%' }} />
            </Box>) : <></> }

            <div className='flex'>
                <div className='md:w-2/5 md:h-full w-full'>
                    <div className='md:p-6 p-4'>
                        <p className='text-xl font-bold'>e-comm</p>
                    </div>

                    <div className='md:p-6 p-4 mt-3 flex flex-col gap-7'>
                        <p className='capitalize text-2xl font-bold'>create an account</p>
                        <div className='text-sm'>
                            <p className='capitalize inline-block mr-2'>i already have an account</p>
                            <Link className='font-bold underline' to={'/signin'}>Sign in </Link>
                        </div>

                        <form onSubmit={handleSubmit(signup_handler, signup_error_handler)} className='flex flex-col gap-7'>
                            <div className=''>
                                <input required autoComplete='off' className='p-4 rounded-lg border-1 w-full' type="email" placeholder='Email' {...register("email", {
                                    required: true,
                                    validate: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address"
                                })} />
                            </div>
                            <div className=''>
                                <input required autoComplete='off' className='p-4 rounded-lg border-1 w-full' type="text" placeholder='Username' {...register('username', {
                                    required: true
                                })} />
                            </div>
                            <div className='relative'>
                                <input required className='p-4 rounded-lg border-1 w-full' type={`${!isPasswordVisible ? "password" : "text"}`} placeholder='Password' onInput={(e) => passwordRef.current = e.target} />
                                {!isPasswordVisible ? <FaRegEye onClick={() => setIsPasswordVisible(true)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' /> : <FaRegEyeSlash onClick={() => setIsPasswordVisible(false)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' />}
                            </div>
                            <div className='relative'>
                                <input required className='p-4 rounded-lg border-1 w-full' type={`${!isConfirmPasswordVisible ? "password" : "text"}`} placeholder='Confirm password' {...register('password', {
                                    required: true,
                                    validate: (value) => value === passwordRef.current?.value || "Password did not match"
                                })} />
                                {!isConfirmPasswordVisible ? <FaRegEye onClick={() => setIsConfirmPasswordVisible(true)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' /> : <FaRegEyeSlash onClick={() => setIsConfirmPasswordVisible(false)} className='text-2xl absolute right-0 top-[50%] translate-[-50%]' />}
                            </div>
                            <button className='bg-blue-400 rounded-md text-white font-semibold py-3' type="submit">Sign Up</button>
                        </form>
                    </div>
                </div>

                <div className='hidden md:flex p-6 w-3/5 h-screen justify-center'>
                    <img src={signinpgDefaultBg} className='rounded-2xl' alt="" />
                </div>

            </div>
        </>
    )
}

export default SignUp
