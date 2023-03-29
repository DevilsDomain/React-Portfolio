import React from 'react'
import 'src/app/globals.css'
import sentTop from '../../../../public/sentTop.svg'
import sentBottom from '../../../../public/sentBottom.svg'
import Image from 'next/image'



function page() {
  return (
    <div className='relative flex flex-col items-center'>
      <div className='z-0 h-screen w-screen absolute'>
          <Image src={sentTop} width={600} height={600} alt='blob top'
          className='blur-3xl absolute z-0 top-0 right-0 ml-44 zindex-1'/>
          <Image src={sentBottom} width={550} height={550} alt='blob top' 
          className='blur-3xl absolute z-0 bottom-0 left-0 mr-40 zindex-1'/>
       </div>
      <h1>GOT YOUR IDEA.</h1>
      <h1>{`LET'S MAKE IT A REALITY!`}</h1>
    </div>
  )
}

export default page