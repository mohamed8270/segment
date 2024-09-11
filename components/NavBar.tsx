import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'

const NavBar = () => {
  return (
    <header className='w-full bg-swhite'>
        <nav className='h-[60px] sm:px-16 px-6 flex items-center'>
          <Link href='/'>
            <div className='flex items-center gap-2'>
              <Image src='/icons/cloud-logo.svg' alt='logo' width={26} height={26} className='fill-sorange' />
              <p className='text-md text-sblack font-poppins font-semibold'>Segment</p>
            </div>
          </Link>  
        </nav>
    </header>
  )
}

export default NavBar