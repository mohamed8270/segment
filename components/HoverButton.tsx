'use client';

import React, {useState} from 'react'
import Image from 'next/image';

interface Props {
    path: string;
    name: string;
}

const HoverButton = ({path, name}: Props) => {
    const [hover, setHover] = useState(false);
  return (
    <>
        <button onClick={() => setHover(!hover)} className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2 rounded-md'>
            <Image src='/icons/edit.svg' alt='doc' height={25} width={25}/>
        </button>
        {hover ? <div className='flex items-center gap-1 md:gap-3'>
            <button className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/copy.svg' alt='' height={20} width={20}/>
            </button>
            <button className='bg-sgrey bg-opacity-50 flex justify-center items-center p-2.5 rounded-full'>
                <Image src='icons/delete.svg' alt='' height={20} width={20}/>
            </button>
        </div> : null }
    </>
  )
}

export default HoverButton