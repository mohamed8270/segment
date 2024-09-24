'use client';

import React,{ useState} from 'react'
import Image from 'next/image'
import { uploadToMongo } from '@/lib/action';
import { formatSize, handleHashing, handleUpload } from '@/lib/action/filehandling';
import axios from 'axios';


const DropSection = () => {

    const [isLoading, setisLoading] = useState(false);
    const [fileName, setfileName] = useState('');
    const [fileType, setfileType] = useState('');
    const [fileSize, setfileSize] = useState(0);

    const onChange = async (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        const file = e?.currentTarget?.files?.[0];
        try {
            setisLoading(true);
            setfileName(file?.name!);
            setfileType(file?.type!);
            setfileSize(file?.size!);
            const publickUrl = await handleUpload(file);
            const hash = await handleHashing(file);
            const res = await axios.get('/api/users/me');
            const phone = res.data.data.phone;
            const aadhaar = res.data.data.aadhaar;
            await uploadToMongo(publickUrl, file?.name, file?.size, file?.type, hash, phone, aadhaar);
        } catch (e: any) {
            console.log("Client side error", e.message);
        } finally {
            setisLoading(false);
        }
    }
   
  return (
    <div className='flex items-center justify-center md:gap-7 gap-2 border-2 border-dashed border-sblack border-opacity-10 h-[160px] w-full rounded-md cursor-pointer relative'>
        <input accept='*' type="file" multiple onChange={onChange} className='absolute w-full h-full m-0 p-0 cursor-pointer outline-none opacity-0' />
        <div>
            <Image src={`${isLoading ? '/icons/loading.svg': '/icons/upload.svg'}`} height={35} width={35} alt='drop' className={`${isLoading ? 'animate-spin': ''}`}/>
        </div>
        <div className='font-poppins flex flex-col justify-center items-start gap-1'>
            <h1 className='text-sm text-sblack font-medium'>{isLoading ? `Hold on, Uploading your ${fileName} file` : 'Import or drap and drop your files here'}</h1>
            <p className='text-xs text-sblack text-opacity-40 font-regular'>{isLoading ? formatSize(fileSize) : 'Maximum file size: 50 MB'}</p>
            <p className='text-xs text-sblack text-opacity-40 font-regular'>{isLoading ? `${fileType}` : 'Supported files: svg, png, pdf, docx, excel, jpeg, jpg'}</p>
        </div>
    </div>
  )
}

export default DropSection