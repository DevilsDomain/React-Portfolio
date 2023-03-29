import React from 'react'
import Image from 'next/image'
import aboutTop from '../../../public/aboutBottom.svg'
import aboutBottom from '../../../public/aboutTop.svg'
import 'src/app/globals.css'

function page() {
  return (
    <div className="relative flex flex-col items-center">
        <div className=' h-screen	w-screen absolute'>
          <Image src={aboutTop} width={800} height={820} alt='blob top'
          className='blur-3xl absolute ml-96 bottom-0 right-0  p-14 zindex-1'/>
          <Image src={aboutBottom} width={550} height={780} alt='blob top' 
          className='blur-3xl absolute p-14 -mt-44 zindex-1'/>
      </div>
    </div>
  )
}

export default page