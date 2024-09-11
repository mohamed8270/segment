import React from 'react'
import Image from 'next/image'
import DropSection from './DropSection'

const HeroSection = () => {
  return (
    <div className='flex-col flex justify-center items-center mx-6 md:mx-16 md:mt-6 mt-16'>
        <div className='flex flex-col items-center justify-center gap-5'>
            <div className='relative'>
              <Image src="/icons/folder.svg" alt="folder" width={100} height={100}  className='flex justify-center items-center absolute top-6 left-6 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
              <Image src="/icons/curly-dot.svg" alt="curly-dot" width={150} height={150}  className='flex justify-center items-center'/>
            </div> 
            <h1 className='md:text-2xl text-xl font-poppins text-sblack font-semibold text-center md:w-[500px] sm:w-[300px] text-wrap'>Welcome to Segment, Your new collaborative automotion platform!</h1>
            <p className='text-sm font-poppins font-regular text-center text-sblack text-opacity-50 sm:w-[300px] md:w-[600px]'>To get the best experience, We recommend you to store potential data only like medical related. Hence valuable data must be protected!</p>
            <DropSection/>
        </div>
    </div>
  )
}

export default HeroSection