import { uploadImageType } from '@/types'
import React from 'react'
import Image from 'next/image';
import { formatSize } from '@/lib/action/filehandling';

interface Props {
    uploaded: uploadImageType;
}

export const UploadedDataStack = ({uploaded}: Props) => {
  return (
    <div className='flex justify-between items-center my-6'>
        <div className='flex items-center gap-2 md:gap-4'>
            <button className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2 rounded-md'>
                <Image src='/icons/document.svg' alt='doc' height={25} width={25}/>
            </button>
            <div className='flex-col flex justify-center items-start gap-1'>
                <h1 className='text-sm font-poppins font-medium text-sblack'>{uploaded.originalname}</h1>
                <p className='text-xs font-poppins font-normal text-sblack text-opacity-40'><span>{formatSize(uploaded.size)}</span> 🔸 <span>{uploaded.mimetype}</span></p>
            </div>
        </div>
        <div className='flex-col flex items-end justify-center gap-1'>
            <h1 className='text-sm font-poppins font-medium text-sblack text-ellipsis overflow-hidden w-24 md:w-60'>{uploaded.hash}</h1>
            <p className='text-xs font-poppins font-normal text-sblack text-opacity-40 truncate text-ellipsis overflow-hidden w-24 md:w-60'>{uploaded.createdAt.toString()}</p>
        </div>
    </div>
  )
}