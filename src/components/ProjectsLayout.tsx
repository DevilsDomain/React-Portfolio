import React from 'react'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import 'src/app/projects/page.css'
import 'src/app/globals.css'

type ProjectLayoutProps = {
  children: React.ReactNode
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className='background'>
        <div className='hidden md:block z-40 w-full text-center pt-4'>
        <div className='inline-flex gap-100'>
            <Link className="text-sm text-white font-medium mx-4" href={'/'}>HOME</Link>
            <Link className="text-sm text-white font-medium mx-4" href={'/about'}>ABOUT</Link>
            <Link className="text-sm text-white font-medium mx-4" href={'/projects'}>PROJECTS</Link>
        </div>
        </div>

        <div className="flex flex-col h-full absolute top-36 right-20 mt-64">
        <Navbar mode='dark'/>
        </div>
      {children}
    </div>
  )
}