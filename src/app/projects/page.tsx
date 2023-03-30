import React from 'react'
import ProjectLayout from '@/components/ProjectsLayout'
import 'src/app/projects/page.css'
import Image from 'next/image'
import explore from '../../../public/explore.svg'
import Project from '@/components/Project'


function page() {
  return (
    <ProjectLayout>
    <div className='background flex flex-col justify-center'>
        <div className='border-b border-t border-gray-300 md:flex md:flex-row
        text-[5rem] leading-none mt-14 font-bold mb-10 md:text-[12rem]'>
            <h1 className='mb-10 mt-28 w-28 ml-2 text-white md:w-full md:ml-20'>EXPLORE MY WORK
            </h1>
            <Image src={explore} height={200} width={200} alt='graphic icon' className='mb-28 ml-2 md:mr-20
            md:scale-105'/>
        </div>
        <Project />
    </div>
</ProjectLayout>
  )
}

export default page