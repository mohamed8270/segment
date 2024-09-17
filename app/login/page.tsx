'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const LoginPage = () => {
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({email: '', password: ''});
    const onLogIn = async () => {}
  return (
    <div className='md:flex justify-center items-center gap-10 mx-6'>
        <div className='flex-1 justify-end items-center md:ml-16'>
            <h1 className='text-3xl font-poppins font-bold text-sblack'>Welcome back,</h1>
            <p className='text-xs font-regular font-poppins text-sblack my-5'>Tip: Users can store potential data such as medical data securely here</p>
            <input id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="mail" placeholder='Email' className='h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
            <input id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder='Password' className='my-3 h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
            <button className='h-12 md:w-[464px] w-full bg-sblack rounded-md text-xs font-poppins font-medium text-swhite'>LogIn</button>
            <h1 className='text-xs font-poppins font-regular text-sblack text-opacity-40 my-4'>Dont't have an account? <Link href='/signup'><span className='text-sblack'>Signup here</span></Link> </h1>
        </div>
        <div className='flex-1 justify-start items-center'>
            <img src="/images/gradient-1.jpg" alt="login" className='md:h-screen object-cover' />
        </div>
    </div>
  )
}

export default LoginPage