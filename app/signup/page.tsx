import React from 'react'
import Image from 'next/image'

const SignupPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='flex-1 justify-start items-center pl-12'>
            <div className='flex items-center gap-2 my-6'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sblack' />
              <p className='text-md text-sblack font-poppins font-regular'>Segment</p>
            </div>
            <h1 className='text-3xl font-poppins font-semibold text-sblack leading-relaxed'>Keep your potential data <span className='text-sorange'>organized</span> and <span className='text-sorange'>secured!</span></h1>
            <p className='text-sm font-poppins font-regular text-sblack text-opacity-40 my-1'>The web application is used to store potential data which is most secured <br/> with our latest hashing system</p>
            <div className='mt-[60px] flex-row gap-3'>
                <input type="text" placeholder='Full name' className='h-12 w-[600px] bg-sgrey bg-opacity-30 text-xs font-poppins font-regular text-sblack border-2 border-sblack border-opacity-20 hover:border-sblack hover:border-opacity-30 outline-none pl-2 rounded-md' />
                <input type="mail" placeholder='Email' className='my-3 h-12 w-[600px] bg-sgrey bg-opacity-30 text-xs font-poppins font-regular text-sblack border-2 border-sblack border-opacity-20 hover:border-sblack hover:border-opacity-30 outline-none pl-2 rounded-md' />
                <input type="phone" placeholder='Phone' className='h-12 w-[600px] bg-sgrey bg-opacity-30 text-xs font-poppins font-regular text-sblack border-2 border-sblack border-opacity-20 hover:border-sblack hover:border-opacity-30 outline-none pl-2 rounded-md' />
                <input type="password" placeholder='Password' className='my-3 h-12 w-[600px] bg-sgrey bg-opacity-30 text-xs font-poppins font-regular text-sblack border-2 border-sblack border-opacity-20 hover:border-sblack hover:border-opacity-30 outline-none pl-2 rounded-md' />
            </div>
            <button className='h-12 w-[600px] bg-sorange rounded-md text-sm font-poppins font-medium text-swhite'>Sign Up</button>
        </div>
        <div className='flex-1 justify-end items-center'>
            <img src="/images/gradient.jpg" alt="signup" className='h-screen'  />
        </div>
    </div>
  )
}

export default SignupPage