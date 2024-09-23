import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <header className='w-full bg-swhite'>
        <nav className='h-[60px] sm:px-16 px-6 flex items-center justify-between'>
          <Link href='/home'>
            <div className='flex items-center gap-2'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sorange' />
              <p className='text-md text-sblack font-poppins font-semibold'>Segment</p>
            </div>
          </Link>
          <Link href='/qrcode'>
            <div className='flex items-center justify-center gap-3 h-10 w-36 border-2 border-sgrey rounded-full'>
              <Image src='/icons/qrcode.svg' alt='qrcode' height={20} width={20} className='fill-sorange'/>
              <p className='text-xs text-sblack font-poppins font-semibold'>Scan QR</p>
            </div>
          </Link>  
        </nav>
    </header>
  )
}

export default NavBar