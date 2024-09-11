'use client';

import React,{useRef, useState} from 'react'
import Image from 'next/image'

const DropSection = () => {
    const [SelectedFile, setSelectedFile] = useState(null);
    const [Uploaded, setUploaded] = useState(null);
    const inputRef = useRef(null);
  return (
    <div className='flex items-center justify-center md:gap-7 gap-2 border-2 border-dashed border-sblack border-opacity-10 h-[160px] w-full rounded-md cursor-pointer relative'>
        <input accept='*' type="file" className='absolute w-full h-full m-0 p-0 cursor-pointer outline-none opacity-0' />
        <div>
            <Image src='/icons/upload.svg' height={35} width={35} alt='drop'/>
        </div>
        <div className='font-poppins flex flex-col justify-center items-start gap-1'>
            <h1 className='text-sm text-sblack font-medium'>Import or drap and drop your files here</h1>
            <p className='text-xs text-sblack text-opacity-40 font-regular'>Maximum file size: 50 MB</p>
            <p className='text-xs text-sblack text-opacity-40 font-regular'>Supported files: svg, png, pdf, docx, excel, jpeg, jpg</p>
        </div>
    </div>
  )
}

export default DropSection