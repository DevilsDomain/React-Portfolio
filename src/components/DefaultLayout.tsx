import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
        <div className='hidden md:block z-40 w-full text-center pt-4'>
        <div className='inline-flex gap-100'>
            <Link className="text-sm text-stone-900 font-medium mx-4" href={'/'}>HOME</Link>
            <Link className="text-sm text-stone-900 font-medium mx-4" href={'/about'}>ABOUT</Link>
            <Link className="text-sm text-stone-900 font-medium mx-4" href={'/projects'}>PROJECTS</Link>
        </div>
        </div>

        <div className="flex flex-col h-full absolute top-36 right-20 mt-64">
        <Navbar />
        </div>
      {children}
    </div>
  )
}