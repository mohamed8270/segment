'use client';

import React, {useState, useEffect} from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import axios from 'axios';
import { useRouter } from 'next/navigation';

const NavBar = () => {
  const router = useRouter();
  const [userData, setUserData] = useState('nothing');
  useEffect(() => {
    const getUserDetails = async () => {
      const res = await axios.get('api/users/me');
      setUserData(res.data.data._id);
    }

    getUserDetails();
  }, [])

  const logOut = async () => {
    try {
      await axios.get('/api/users/logout');
      router.push('/login');
    } catch (e: any) {
      console.log(e.message);
    }
  }
  
  return (
    <header className='w-full bg-swhite'>
        <nav className='h-[60px] sm:px-16 px-6 flex items-center justify-between'>
          <Link href='/home'>
            <div className='flex items-center gap-2'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sorange' />
              <p className='text-md text-sblack font-poppins font-semibold'>Segment</p>
            </div>
          </Link>
          <div className='flex justify-center items-center gap-5'>
            <Link href='/qrcode'>
              <div className='flex items-center justify-center gap-3 h-10 w-36 border-2 border-sgrey rounded-full'>
                <Image src='/icons/data.svg' alt='qrcode' height={20} width={20} className='fill-sorange'/>
                <p className='text-xs text-sblack font-poppins font-semibold'>Search data</p>
              </div>
            </Link> 
            <div className='flex-col flex gap-1 items-start justify-center'>
              <p className='text-xs font-poppins font-medium text-sblack'>{userData === 'nothing' ? 'Nothing' : userData}</p>
              <p onClick={() => logOut()} className='text-xs font-poppins font-medium text-sblack text-opacity-40 hover:text-sorange cursor-pointer'>Logout</p>
            </div>
          </div> 
        </nav>
    </header>
  )
}

export default NavBar