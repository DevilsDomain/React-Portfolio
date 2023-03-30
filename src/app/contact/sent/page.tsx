import React from 'react'
import 'src/app/globals.css'
import sentTop from '../../../../public/sentTop.svg'
import sentBottom from '../../../../public/sentBottom.svg'
import Image from 'next/image'
import Button from '@/components/Button/Button'
import github from '../../../../public/github.svg'
import dribbble from '../../../../public/dribbble.svg'
import behance from '../../../../public/behance.svg'
import linkedin from '../../../../public/linkedin.svg'



function page() {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='z-0 h-screen w-screen absolute'>
          <Image src={sentTop} width={600} height={600} alt='blob top'
          className='blur-3xl absolute z-0 top-0 right-0 ml-44 zindex-1'/>
          <Image src={sentBottom} width={550} height={550} alt='blob top' 
          className='blur-3xl absolute z-0 bottom-0 left-0 mr-40 zindex-1'/>
       </div>
       <div className='relative flex flex-col items-center'>
        <div className='text-6xl	font-bold mx-5	mt-20 mb-10 md:text-[11rem]'>
          <h1 className='mb-14'>GOT YOUR IDEA.</h1>
          <h1>{`LET'S MAKE IT A REALITY!`}</h1>
        </div>
        <div className='flex flex-row w-full justify-center scale-105 mb-10	'>
          <Button type='secondary' link='home'>HOME</Button>
        </div>
        <h2 className='text-base font-medium	mb-5'>ALSO FIND ME ON</h2>
        <div className='flex flex-col gap-y-3'>
          <Image src={github} width={60} height={60} alt='github icon' />
          <Image src={dribbble} width={60} height={60} alt='dribbble icon' />
          <Image src={behance} width={60} height={60} alt='behance icon' />
          <Image src={linkedin} width={60} height={60} alt='linkedin icon' />
        </div>
       </div>
    </div>
  )
}

export default page