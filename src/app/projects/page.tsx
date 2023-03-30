import React from 'react'
import ProjectLayout from '@/components/ProjectsLayout'
import 'src/app/projects/page.css'
import Image from 'next/image'
import explore from '../../../public/explore.svg'
import Project from '@/components/Project'
import star from '../../../public/star.svg'
import { getClient } from '../../../ApolloClient'
import {gql} from '@apollo/client'
import NavbarDark from '@/components/NavbarDark'
import SocialLinks from '@/components/SocialLinks'


const PROJECTS_DATA = gql`
query MyQuery {
  projectDatas {
    ui
    backend
    frontend
    imageUrl
    projectDescription
    title
  }
} `;

export interface ProjectData {
  ui: boolean;
  backend: boolean;
  frontend: boolean;
  imageUrl: string;
  projectDescription: string[];
  title: string;
}

async function page() {
  const client = getClient();
  const { data } = await client.query({query: PROJECTS_DATA});
  return (
    <ProjectLayout>
    <div className='background flex flex-col justify-center overflow-x-hidden'>
        <div className='border-b border-t border-gray-300 md:flex md:flex-row
        text-[5rem] leading-none mt-14 font-bold mb-10 md:text-[12rem]'>
            <h1 className='mb-10 mt-28 w-28 ml-2 text-white md:w-full md:ml-20'>EXPLORE MY WORK
            </h1>
            <Image src={explore} height={200} width={200} alt='graphic icon' className='mb-28 ml-2 md:mr-20
            md:scale-105'/>
        </div>
        {data.projectDatas.map((project: ProjectData, projectId: number) => {
          return(<Project key={projectId} id={projectId} data={project}/>);
        })}
        <div className='flex flex-col items-center border-t border-gray-30 mb-32 md:scale-110'>
            <Image src={star} width={100} height={100} alt='star icon'className='invert scale-75 mt-10 mb-10'/>
            <p className='text-white w-28 text-justif mb-10'>HAVE AN IDEA? LETS MAKE IT A REALITY.</p>
            <NavbarDark />
            <div className='flex flex-row border-b border-gray-300 mb-15 pb-5'>
            <SocialLinks mode='dark' />
            </div>
        </div>
    </div>
</ProjectLayout>
  )
}

export default page
