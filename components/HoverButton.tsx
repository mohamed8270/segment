'use client';

import React, {useState} from 'react'
import Image from 'next/image';
import { deleteMongoData } from '@/lib/action';

interface Props {
    path: string;
    name: string;
    id: string;
}

const HoverButton = ({path, name, id}: Props) => {
    const [hover, setHover] = useState(false);

    const copy = (e: any) => {
        navigator.clipboard.writeText(path);
    }
  return (
    <>
        <button onClick={() => setHover(!hover)} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2 rounded-md'>
            <Image src='/icons/edit.svg' alt='doc' height={25} width={25}/>
        </button>
        {hover ? <div className='flex items-center gap-1 md:gap-3'>
            <button onClick={() => copy} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/copy.svg' alt='copy' height={20} width={20}/>
            </button>
            <button onClick={() => deleteMongoData(id, path)} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/delete.svg' alt='delete' height={20} width={20}/>
            </button>
        </div> : null }
    </>
  )
}

export default HoverButton