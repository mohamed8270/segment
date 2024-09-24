import React  from 'react'
import Image from 'next/image'
import { uploadImageType } from '@/types'
import { formatSize, maskAadhaar } from '@/lib/action/filehandling';
import Link from 'next/link';


interface Props {
    backend: uploadImageType;
}

const StackData = ({backend}: Props) => {  

  return (
    <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2 md:gap-4'>
            <Link href={`tel:+91${backend.phone}`}><Image src='/icons/call.svg' alt={backend.originalname} height={30} width={30}/></Link>
            <div className='flex-col flex justify-center items-start gap-1'>
                <h1 className='text-sm font-poppins font-regular text-sblack'>{maskAadhaar(backend.aadhaar)} 🔸 <span className='text-sblack text-opacity-40 text-xs'>{backend.originalname}</span></h1>
                <p className='text-xs font-poppins font-normal text-sblack text-opacity-40'><span>{formatSize(backend.size)}</span> 🔸 <span>{backend.mimetype}</span></p>
            </div>
        </div>
        <div className='flex-col flex items-end justify-center gap-1'>
            <h1 className='text-xs font-poppins font-medium text-sblack text-ellipsis overflow-hidden w-24 md:w-fit'>{backend.hash}</h1>
            <p className='text-xs font-poppins font-normal text-sblack text-opacity-40 truncate text-ellipsis overflow-hidden w-24 md:w-fit'>{backend.createdAt.toString()}</p>
        </div>
    </div>
  )
}

export default StackData