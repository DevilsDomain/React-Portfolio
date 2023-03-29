import React from 'react'
import Image from 'next/image'
import aboutTop from '../../../public/aboutBottom.svg'
import aboutBottom from '../../../public/aboutTop.svg'
import 'src/app/globals.css'
import star from '../../../public/star.svg'
import Link from 'next/link'

function page() {
  return (
    <div className="relative flex flex-col items-center">
        <div className=' h-screen	w-screen absolute'>
          <Image src={aboutTop} width={800} height={820} alt='blob top'
          className='blur-3xl absolute ml-96 bottom-0 right-0  p-14 zindex-1'/>
          <Image src={aboutBottom} width={550} height={780} alt='blob top' 
          className='blur-3xl absolute p-14 -mt-44 zindex-1'/>
      </div>
      <div className='flex flex-col items-center mx-8 mt-10 md:flex md:flex-row'>
            <div className='pb-9 pt-16'>
                <div className='flex flex-row justify-between'>
                    <h1 className='z-10 relative text-6xl	font-bold
                    md:text-[13rem]
                    '>I</h1>
                    <div className='flex flex-row'>
                        <h1 className='z-10 relative text-6xl	font-bold
                        md:text-[13rem]'>AM</h1>
                        <Image src={star} width={50} height={50} alt='star' className="z-0 relative	md:w-44	md:h-44 md:pl-4" />
                        <h1 className='z-10 relative text-6xl	font-bold
                        md:text-[13rem]'>A</h1>
                    </div>
                </div>
                <h1 className='z-10 relative text-6xl	font-bold
                md:text-[13rem]'>CREATIVE DEVELOPER</h1>
            </div>
            <div className='font-light leading-7 text-justify pb-20'>
                <p className='pb-5'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                sunt nostrud amet.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu fermentum augue,
                sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. Nulla facilisi. 
                Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. Integer 
                varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. Aliquam 
                faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea 
                dictumst. Nunc vitae dui quis risus elementum auctor.</p>
            </div>
             <div className='flex flex-col gap-y-7 text-4xl font-bold'>
                <Link href={'https://github.com/DevilsDomain'} target='_blank' 
                className='hover:underline'>GITHUB</Link>
                <Link href={'https://dribbble.com/'} target='_blank'
                className='hover:underline'>DRIBBBLE</Link>
                <Link href={'https://www.behance.net/'} target='_blank'
                className='hover:underline'>BEHANCE</Link>
                <Link href={'https://www.linkedin.com/in/sati-alara-erzincan-7a0348220/'} target='_blank'
                className='hover:underline'>LINKEDIN</Link>
             </div>
        </div>
    </div>
  )
}

export default page