import { uploadImageType } from '@/types'
import React from 'react'

import { formatSize } from '@/lib/action/filehandling';
import HoverButton from './HoverButton';

interface Props {
    uploaded: uploadImageType;
}

export const UploadedDataStack = ({uploaded}: Props) => {
  return (
    <div className='flex justify-between items-center my-6'>
        <div className='flex items-center gap-2 md:gap-4'>
            <HoverButton path={uploaded.path} name={uploaded.originalname} id={uploaded.id} hash={uploaded.hash} date={uploaded.createdAt.toString()}/>
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