import React from 'react'
import ProjectLayout from '@/components/ProjectsLayout'
import 'src/app/projects/page.css'
import Image from 'next/image'
import explore from '../../../public/explore.svg'
import Project from '@/components/Project'
import star from '../../../public/star.svg'
import Link from 'next/link'
import github from '../../../public/github.svg'
import dribbble from '../../../public/dribbble.svg'
import behance from '../../../public/behance.svg'
import linkedin from '../../../public/linkedin.svg'
import { getClient } from '../../../ApolloClient'
import {gql} from '@apollo/client'

const PROJECTS_DATA = gql`
query MyQuery {
  projectDatas {
    backend
    frontend
    imageUrl
    projectDescription
    title
    updatedAt
  }
} `;

async function page() {
  const client = getClient();
  const { data } = await client.query({query: PROJECTS_DATA });
  console.log(data)
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
        <div className='flex flex-col items-center border-t border-gray-30 mb-32 md:scale-110'>
            <Image src={star} width={100} height={100} alt='star icon'className='invert scale-75 mt-10 mb-10'/>
            <p className='text-white w-28 text-justif mb-10'>HAVE AN IDEA? LETS MAKE IT A REALITY.</p>
            <div className='flex flex-col items-center gap-y-3 mb-10'>
                <Link className="text-sm text-white font-medium mx-4 text-lg " href={'/'}>HOME</Link>
                <Link className="text-sm text-white font-medium mx-4 text-lg " href={'/about'}>ABOUT</Link>
                <Link className="text-sm text-white font-medium mx-4 text-lg mb-10 " href={'/projects'}>PROJECTS</Link>
                <Link href={'/contact'} 
                className='h-12 w-36 text-center pt-3 text-white border border-gray-300 mb-10'>CONTACT</Link>
            </div>
            <div className='flex flex-row border-b border-gray-300 mb-15 pb-5'>
            <Link href={'https://github.com/DevilsDomain'} target='_blank'>
                <Image src={github} width={60} height={60} alt='github icon' className='invert'/>
              </Link>
              <Link href={'https://dribbble.com/'} target='_blank'>
                <Image src={dribbble} width={60} height={60} alt='dribbble icon' className='invert' />
              </Link>
              <Link href={'https://www.behance.net/'} target='_blank'>
                <Image src={behance} width={60} height={60} alt='behance icon' className='invert' />
              </Link>
              <Link href={'https://www.linkedin.com/in/sati-alara-erzincan-7a0348220/'} target='_blank'>
                <Image src={linkedin} width={60} height={60} alt='linkedin icon' className='invert' />
              </Link>
            </div>
        </div>
    </div>
</ProjectLayout>
  )
}

export default page
