import React from 'react'
import ProjectLayout from '@/components/ProjectsLayout'
import 'src/app/projects/page.css'
import explore from '../../../public/explore.svg'
import Image from 'next/image'


function page() {
  return (
    <ProjectLayout>
        <div className='background flex flex-col justify-center'>
            <div className='border-b border-t border-gray-300 
            text-[5rem] leading-none mt-20 font-bold mb-10 md:text-[8rem] md:ml-52'>
                <h1 className='mb-10 mt-28 w-28	ml-5'>EXPLORE MY WORK</h1>
                <Image src={explore} height={200} width={200} alt='graphic icon' className='mb-28 ml-5'/>
            </div>
        </div>
    </ProjectLayout>
  )
}

export default page