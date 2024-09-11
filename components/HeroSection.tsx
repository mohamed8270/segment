import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div >
        <div className='flex flex-col items-center justify-center gap-5'>
            <Image src="/icons/folder.svg" alt="hero" width={100} height={100}  className='flex justify-center items-center'/>
            <h1 className='text-2xl font-poppins text-sblack font-semibold text-center'>Welcome to Segment, Your new<br />collaborative automotion platform!</h1>
            <p className='text-sm font-poppins font-regular text-center text-sblack text-opacity-50'>To get the best experience, We recommend you to store <br/> potential data only like medical related. Hence valuable data must be protected!</p>
        </div>
    </div>
  )
}

export default HeroSection