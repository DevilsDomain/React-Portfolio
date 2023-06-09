import React from 'react'
import Button from './Button/Button'
import Image from 'next/image'
import star from '../../public/star.svg'

function Form() {
  return (
    <div className='relative h-screen w-11/12 flex flex-col items-center justify-center
        md:w-3/6	'>
            <Image src={star} width={100} height={100} alt='star' className="z-0 relative" />
            <form className='flex flex-col w-11/12 md:w-3/6	'>
                <label htmlFor='name' className='text-2xl mb-8 mt-10'>NAME</label>
                <input id='name' name='name' placeholder='name' 
                className='bg-transparent placeholder:text-slate-900 placeholder:font-light	 
                border-b border-slate-900	' />
                <label htmlFor='email' className='text-2xl mb-8 mt-10'>EMAIL</label>
                <input id='email' name='email' placeholder='exampple@email.com' 
                className='bg-transparent placeholder:text-slate-900 border-b 
                border-slate-900 placeholder:font-light' />
                <label htmlFor='idea' className='text-2xl mb-8 mt-12'>IDEA</label>
                <input id='idea' name='idea' placeholder='I have this crazy idea...' 
                className='bg-transparent placeholder:text-slate-900 border-b border-slate-900 placeholder:font-light' />
                <div className='flex flex-col mt-10 items-center'>
                <Button type='primary' link='contact/sent'>SEND</Button>
                </div>
            </form> 
        </div>
  )
}

export default Form