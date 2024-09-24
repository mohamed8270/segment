import { getAllData } from '@/lib/action'
import React from 'react'
import StackData from './StackData';


const SearchPage = async () => {
    const imagesData = await getAllData();
  return (
    <div className='md:mx-16 mx-6 mt-10'>
        <div className='md:mx-96'>
            <input type="text" id='search' placeholder='Aadhaar' className='h-10 w-full rounded-md text-xs font-poppins font-medium pl-2 text-sblack border-2 border-sblack border-opacity-10 hover:border-sblack hover:border-opacity-20 outline-none' />
        </div>
        <div className='h-9 w-full bg-sgrey bg-opacity-60 flex items-center justify-between px-3 my-10'>
            <h1 className='text-xs font-poppins font-medium text-sblack text-opacity-40'>File name</h1>
            <h1 className='text-xs font-poppins font-medium text-sblack text-opacity-40'>Hash details</h1>
        </div>
        {imagesData?.map((data) => (
            <StackData key={data._id} backend={data} />
        ))}
    </div>
  )
}

export default SearchPage