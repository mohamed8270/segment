'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios';

const SignupPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({firstname: "", lastname: "", email: "", phone: "", password: ""});
    const SignUp = async () => {
        try {
            const signupRoute = String(process.env.SIGNUP_ROUTE);
            const res = await axios.post(signupRoute);
            router.push('/login');
        } catch (e: any) {
            console.log("Can't create user, Please try again later", e.message);
        }
    }
  return (
    <div className='md:flex justify-center items-center md:min-h-screen mx-6'>
        <div className='md:flex-1 justify-start items-center md:pl-12'>
            <div className='flex items-center gap-2 my-12'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sblack' />
              <p className='text-md text-sblack font-poppins font-regular'>Segment</p>
            </div>
            <h1 className='md:text-3xl sm:text-2xl font-poppins font-bold text-sblack leading-relaxed'>Keep your potential data <span className='text-sorange'>organized</span> and <span className='text-sorange'>secured!</span></h1>
            <p className='text-xs font-poppins font-regular text-sblack text-opacity-40 my-5'>Our web application is used to store potential data which is most secured</p>
            <div className='mt-[60px] flex-row'>
                <div className='flex justify-start items-center gap-4'>
                    <input value={user.firstname} onChange={(e) => setUser({...user, firstname: e.target.value})} type="text" placeholder='First name' className='h-12 w-56 bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
                    <input value={user.lastname} onChange={(e) => setUser({...user, lastname: e.target.value})} type="text" placeholder='Last name' className='h-12 w-56 bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
                </div>
                <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="mail" placeholder='Email' className='my-3 h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
                <input value={user.phone} onChange={(e) => setUser({...user, phone: e.target.value})} type="phone" placeholder='Phone' className='h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none pl-2 rounded-md' />
                <input value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} type="password" placeholder='Password' className='my-3 h-12 md:w-[464px] w-full bg-sgrey bg-opacity-70 text-xs font-poppins font-regular text-sblack outline-none px-2 rounded-md' />
            </div>
            <button className='h-12 md:w-[464px] w-full bg-sblack rounded-md text-xs font-poppins font-medium text-swhite'>Sign Up</button>
            <h1 className='text-xs font-poppins font-regular text-sblack text-opacity-40 my-4'>Already have an account? <Link href='/'><span className='text-sblack'>Login here</span></Link> </h1>
        </div>
        <div className='md:flex-1 justify-end items-center md:m-6 rounded-lg'>
            <img src="/images/gradient.jpg" alt="signup" className='md:h-screen rounded-2xl object-cover'  />
        </div>
    </div>
  )
}

export default SignupPage