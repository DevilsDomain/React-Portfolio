import React from 'react'
import 'src/app/projects/page.css'
import Image from 'next/image'
import UI from './Tags/UI'
import Frontend from './Tags/Frontend'
import Backend from './Tags/Backend'

function Project() {
  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-[7rem] font-bold'>01</h1>
            <h2 className='text-white text-2xl text-justify mb-2'>PROJECT DESCRIPTION</h2>
            <div className='mx-16'>
                <p className='text-white text-justify text-sm mb-10'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
                nostrud amet.</p>
                <p className='text-white text-justify text-sm'>
                Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet eros. Fusce rutrum, 
                lectus in blandit sagittis, mi tortor ullamcorper mi, vitae vestibulum libero quam a nisi.
                 In eu mauris et neque sodales porta eu eget dui. Nunc eu quam sit amet justo elementum mollis. 
                 Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                 Sed laoreet metus nulla, in gravida urna rhoncus in. Proin laoreet semper tortorsequat purus quis 
                 lectus maximus fermentum.
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center mb-20'>
            <h1 className='text-white text-3xl text-justify mt-10'>PROJECT TITLE</h1>
            <Image src={'https://cdn.dribbble.com/userupload/5817809/file/original-5de0b1e4bd364e5845f80c46c7310fb1.png'} 
            alt='project name' width={300} height={300}/>
            <div className='flex flex-row scale-50	'>
                <UI mode='dark' />
                <Frontend mode='dark' />
                <Backend mode='dark'/>
            </div>
        </div>
    </div>
  )
}

export default Project