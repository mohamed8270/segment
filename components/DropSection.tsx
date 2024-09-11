import React from 'react'
import Image from 'next/image'

const DropSection = () => {
  return (
    <div className='flex items-center justify-center gap-4 border-2 border-sblack h-[160px] w-full'>
        <div>
            <Image src='/icons/upload.svg' height={50} width={50} alt='drop' />
        </div>
        <div className='font-poppins'>
            <h1 className='text-md text-sblack font-medium'>Drap and drop your files here or import</h1>
            <p className='text-sm text-sblack text-opacity-40 font-regular'>Maximum file size: 50 MB</p>
            <p className='text-sm text-sblack text-opacity-40 font-regular'>Supported files: svg, png, pdf, docx, excel, jpeg, jpg</p>
        </div>
    </div>
  )
}

export default DropSection