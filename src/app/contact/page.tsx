import React from 'react'
import contactTop from '../../../public/contactTop.svg'
import contactBottom from '../../../public/contactBottom.svg'
import Image from 'next/image'
import star from '../../../public/star.svg'
import 'src/app/globals.css'
import Button from '@/components/Button/Button'

function page() {
  return (
    <div className='relative flex flex-col items-center'>
        <div className='z-0 h-screen w-screen absolute'>
          <Image src={contactTop} width={600} height={600} alt='blob top'
          className='blur-3xl absolute z-0 top-0 right-0 ml-44 zindex-1'/>
          <Image src={contactBottom} width={550} height={550} alt='blob top' 
          className='blur-3xl absolute z-0 bottom-0 left-0 mr-40 zindex-1'/>
       </div>
       <div className='relative flex flex-col items-center'>
        <Image src={star} width={100} height={100} alt='star' className="z-0 relative" />
        <form className='flex flex-col'>
            <label htmlFor='name'>NAME</label>
            <input id='name' name='name' placeholder='name' />
            <label htmlFor='email'>EMAIL</label>
            <input id='email' name='email' placeholder='exampple@email.com' />
            <label htmlFor='idea'>IDEA</label>
            <input id='idea' name='idea' placeholder='I have this crazy idea...' />
            <Button type='primary'>SEND</Button>
        </form> 
       </div>
    </div>
  )
}

export default page