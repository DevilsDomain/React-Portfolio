import React from 'react'
import backend from '../../../public/backend.svg'
import Image from 'next/image'
import 'src/components/Tags/tags.css'

interface variant {
  mode?: string
}

function Backend({mode}: variant) {
  return (
    <div className='flex flex-row items-center'>
    <Image src={backend} width={50} height={50} alt='ui svg' className={`${mode}-icon`}/>
    <h3 className={`text-4xl pl-2 ${mode}-text`}>UI/UX</h3>
  </div>
  )
}

export default Backend