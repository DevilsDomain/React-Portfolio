import React from 'react'
import frontend from '../../../public/frontend.svg'
import Image from 'next/image'
import 'src/components/Tags/tags.css'


interface variant {
  mode?: string
}

function Frontend({mode} : variant) {
  return (
    <div className='flex flex-row items-center'>
        <Image src={frontend} width={50} height={50} alt='ui svg' className={`${mode}-icon`}/>
        <h3 className={`text-4xl pl-2 ${mode}-text`}>FRONTEND</h3>
    </div>
  )
}

export default Frontend