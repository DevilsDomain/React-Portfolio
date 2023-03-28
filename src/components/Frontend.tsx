import React from 'react'
import frontend from '../../public/frontend.svg'
import Image from 'next/image'

function Frontend() {
  return (
    <div className='flex flex-row items-center'>
        <Image src={frontend} width={50} height={50} alt='frontend svg'/>
        <h3 className='text-4xl pl-2'>FRONTEND</h3>
    </div>
  )
}

export default Frontend