'use client';

import React, {useState} from 'react'
import Image from 'next/image';
import { deleteMongoData } from '@/lib/action';

interface Props {
    path: string;
    name: string;
    id: string;
    hash: string;
    date: string;
}

const HoverButton = ({path, name, id, hash, date}: Props) => {
    const [hover, setHover] = useState(false);

    const copy = () => {
        const res = {
            'ID': id,
            'Original name': name,
            'Download link': path,
            'Hash code': hash,
            'Uploaded': date,
        };
        navigator.clipboard.writeText(JSON.stringify(res));
    }
  return (
    <>
        <button onClick={() => setHover(!hover)} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2 rounded-md'>
            <Image src='/icons/edit.svg' alt='doc' height={25} width={25}/>
        </button>
        {hover ? <div className='flex items-center gap-1 md:gap-3 ease-in-out duration-300'>
            <button onClick={() => copy()} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/copy.svg' alt='copy' height={20} width={20}/>
            </button>
            <button onClick={() => deleteMongoData(id, path)} className='bg-sgrey bg-opacity-50 hover:bg-sred flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/delete.svg' alt='delete' height={20} width={20}/>
            </button>
        </div> : null }
    </>
  )
}

export default HoverButton