import React from 'react'
import {  Link } from "react-router-dom";
import BasicForm from './BasicForm';

function SignIn() {
    return (
        <div className=''>

            <div className='p-4 bg-amber-300'>
                <p className='text-xl font-bold'>e-comm</p>
            </div>

            <div className='p-4 mt-3 flex flex-col gap-5'>
                <p className='capitalize text-2xl font-bold'>welcome back</p>
                <div className='text-sm'>
                    <p className='capitalize inline-block mr-1'>don't have an account?</p>
                    <Link className='font-bold underline' to={'/signup'}>Create an account </Link>
                </div>
                <BasicForm />
            </div>

        </div>
    )
}

export default SignIn
