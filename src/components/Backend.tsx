import React from 'react'
import backend from '../../public/backend.svg'
import Image from 'next/image'

function Backend() {
  return (
    <div className='flex flex-row items-center'>
        <Image src={backend} width={50} height={50} alt='backend svg'/>
        <h3 className='text-4xl	pl-2'>BACKEND</h3>
    </div>
  )
}

export default Backend