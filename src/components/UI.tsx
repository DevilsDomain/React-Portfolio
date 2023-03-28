import React from 'react'
import ui from '../../public/ui.svg'
import Image from 'next/image'

function UI() {
  return (
    <div className='flex flex-row items-center'>
        <Image src={ui} width={50} height={50} alt='ui svg'/>
        <h3 className='text-4xl pl-2'>UI/UX</h3>
    </div>
  )
}

export default UI