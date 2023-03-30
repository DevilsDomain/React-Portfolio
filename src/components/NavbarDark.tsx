import React from 'react'
import Link from 'next/link'

function NavbarDark() {
  return (
    <div className='flex flex-col items-center gap-y-3 mb-10'>
        <Link className="text-sm text-white font-medium mx-4 text-lg " href={'/'}>HOME</Link>
        <Link className="text-sm text-white font-medium mx-4 text-lg " href={'/about'}>ABOUT</Link>
        <Link className="text-sm text-white font-medium mx-4 text-lg mb-10 " href={'/projects'}>PROJECTS</Link>
        <Link href={'/contact'} 
        className='h-12 w-36 text-center pt-3 text-white border border-gray-300 mb-10'>CONTACT</Link>
    </div>
  )
}

export default NavbarDark