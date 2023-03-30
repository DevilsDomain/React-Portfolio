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
import Link from 'next/link'
import DefaultLayout from '@/components/DefaultLayout'
import SocialLinks from '@/components/SocialLinks'


function page() {
  return (
    <DefaultLayout>
      <div className='relative flex flex-col items-center	'>
        <div className='z-0 h-screen w-screen absolute'>
            <Image src={sentTop} width={600} height={600} alt='blob top'
            className='blur-3xl absolute z-0 top-0 right-0 ml-44 zindex-1'/>
            <Image src={sentBottom} width={550} height={550} alt='blob top' 
            className='blur-3xl absolute z-0 bottom-0 left-0 mr-40 zindex-1'/>
        </div>
        <div className='relative flex flex-col overflow-x-hidden'>
          <div className='text-6xl	font-bold mx-5	mt-20 mb-10 md:text-[8rem] md:ml-52'>
            <h1 className='mb-14 md:mb-24'>GOT YOUR IDEA.</h1>
            <h1>{`LET'S MAKE IT A REALITY!`}</h1>
          </div>
          <div className='flex flex-row w-full justify-center scale-105 mb-10 md:justify-start md:ml-64 '>
            <Button type='secondary' link='/'>HOME</Button>
          </div>
          <div className='flex flex-col gap-y-3 items-center md:-mt-24 md:-mr-96 md:ml-72'>
            <div>
              <h2 className='text-base font-medium	mb-5'>ALSO FIND ME ON</h2>
            </div>
            <div className='md:flex md: flex-row md:border-b-2 md:border-slate-900 md:pb-3 md:mb-20'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default page