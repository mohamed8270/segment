import React from 'react'
import {UploadedDataStack} from './UploadedDataStack'
import { getAllData, getSessionData } from '@/lib/action'
import { getSession } from 'next-auth/react'

const FileStack = async () => {
    const session = await getSession();
    const data = await getSessionData(session);
  return (
    <div className='mx-6 md:mx-80 mt-10 mb-3'>
        <div className='h-9 w-full bg-sgrey bg-opacity-60 flex items-center justify-between px-3'>
            <h1 className='text-xs font-poppins font-medium text-sblack text-opacity-40'>File name</h1>
            <h1 className='text-xs font-poppins font-medium text-sblack text-opacity-40'>Hash details</h1>
        </div>
        {data?.map((uploadeddata) => (
            <UploadedDataStack key={uploadeddata._id} uploaded={uploadeddata}/>
        ))}
    </div>
  )
}

export default FileStack