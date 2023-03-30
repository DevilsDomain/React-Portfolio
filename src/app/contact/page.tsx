import React from 'react'
import contactTop from '../../../public/contactTop.svg'
import contactBottom from '../../../public/contactBottom.svg'
import Image from 'next/image'
import 'src/app/globals.css'
import DefaultLayout from '@/components/DefaultLayout'
import Form from '@/components/Form'

function page() {
  return (
    <DefaultLayout>
        <div className='relative flex flex-col items-center'>
            <div className='z-0 h-screen w-screen absolute'>
            <Image src={contactTop} width={600} height={600} alt='blob top'
            className='blur-3xl absolute z-0 top-0 right-0 ml-44 zindex-1'/>
            <Image src={contactBottom} width={550} height={550} alt='blob top' 
            className='blur-3xl absolute z-0 bottom-0 left-0 mr-40 zindex-1'/>
        </div>
        <Form />
        </div>
    </DefaultLayout>
  )
}

export default page