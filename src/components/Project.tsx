import React from 'react'
import 'src/app/projects/page.css'
import Image from 'next/image'
import UI from './Tags/UI'
import Frontend from './Tags/Frontend'
import Backend from './Tags/Backend'

function Project({data, id}) {
  return (
    <div className='flex flex-col items-center mt-32 md:flex-row md:tems-start overflow-x-hidden'>
        <div className='flex flex-col items-center md:items-start md:-mt-60'>
            <h1 className='text-white text-[7rem] font-bold md:ml-20'>{id < 9 ? `0${id+1}` : `${id}`}</h1>
            <h2 className='text-white text-3xl text-justify mb-2 md:ml-20 md:text-center'>PROJECT DESCRIPTION</h2>
            <div className='mx-16 md:mx-20'>
                {data.projectDescription.map((p, pIndex) => {
                    return(
                <p key={pIndex} className='text-white text-justify text-sm mb-10 md:text-base md:w-96'>{p}</p>
                    );
                })}
            </div>
        </div>
        <div className='flex flex-col items-center mb-20 md:mr-10'>
            <h1 className='text-white text-3xl text-justify  mt-10 md:text-8xl'>{data.title}</h1>
            <Image src={data.imageUrl} 
            alt='project name' width={900} height={900} className='hidden md:block'/>
            <Image src={data.imageUrl} 
            alt='project name' width={350} height={350} className='md:hidden'/>
            <div className='flex flex-row scale-50 gap-x-24 mr-10'>
                {data.ui ? (<UI mode='dark' />) : null}
                {data.frontend ? (<Frontend mode='dark' />) : null}
                {data.backend ? (<Backend mode='dark'/>) : null}
            </div>
        </div>
    </div>
  )
}

export default Project