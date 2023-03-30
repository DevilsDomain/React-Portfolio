import React from 'react'
import ui from '../../../public/ui.svg'
import Image from 'next/image'
import 'src/components/Tags/tags.css'

interface variant {
  mode?: string
}

function UI({mode} : variant) {
  return (
    <div className='flex flex-row items-center'>
        <Image src={ui} width={50} height={50} alt='ui svg' className={`${mode}-icon`}/>
        <h3 className={`text-4xl pl-2 ${mode}-text`}>UI/UX</h3>
    </div>
  )
}

export default UI