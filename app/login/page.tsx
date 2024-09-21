'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({email: '', password: ''});
    const onLogIn = async () => {
        try {
            setLoading(true);
            const res = await axios.post('/api/users/login', user);
            router.push('/home');
        } catch (e: any) {
            console.log("Error while login", e.message);
        } finally {
            setLoading(false);
        }
    };
  return (
    <div className='md:flex justify-center items-center gap-10 mx-6'>
        <div className='flex-1 justify-end items-center md:ml-16'>
            <div className='flex items-center gap-2 my-12'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sblack' />
              <p className='text-md text-sblack font-poppins font-regular'>Segment</p>
            </div>
            <h1 className='text-3xl font-poppins font-bold text-sblack'>Welcome back,</h1>
            <p className='text-xs font-regular font-poppins text-sblack text-opacity-50 my-5'>Tip: Users can store potential data such as medical data securely here</p>
            <input id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="mail" placeholder='Email' className='h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
            <input id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder='Password' className='my-3 h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none px-2 rounded-md' />
            <button onClick={onLogIn} className='h-12 md:w-[464px] w-full bg-sblack rounded-md text-xs font-poppins font-medium text-swhite'>{ loading ? <div className='flex justify-center items-center gap-2'> <Image src='/icons/loading.svg' alt='loading' height={20} width={20} className='animate-spin' /> <p className='text-xs font-poppins font-medium text-swhite'>Collecting user data</p> </div> : 'LogIn'}</button>
            <h1 className='text-xs font-poppins font-regular text-sblack text-opacity-40 my-4'>Dont't have an account? <Link href='/signup'><span className='text-sblack'>Signup here</span></Link> </h1>
        </div>
        <div className='flex-1 justify-start items-center'>
            <img src="/images/gradient-1.jpg" alt="login" className='md:h-screen object-cover' />
        </div>
    </div>
  )
}

export default LoginPage