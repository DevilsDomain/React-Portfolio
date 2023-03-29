import Image from 'next/image'
import 'src/app/page.css'
import star from '../../public/star.svg'
import homeTop from '../../public/homeTop.svg'
import homeBottom from '../../public/homeBottom.svg'
import Button from '@/components/Button/Button'
import UI from '@/components/UI'
import Frontend from '@/components/Frontend'
import Backend from '@/components/Backend'
import Link from 'next/link'




export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className='z-0 h-screen	w-screen absolute'>
          <Image src={homeTop} width={300} height={380} alt='blob top'
          className='blur-3xl absolute z-0  ml-28 bottom-0 right-0 image-size p-14'/>
          <Image src={homeBottom} width={300} height={380} alt='blob top' 
          className='blur-3xl absolute z-0 image-size p-14'/>
      </div>
      <h2 className='z-10 relative text-base font-light	leading-5 mt-20	mb-5 md:text-xl 
      md:font-extralight md:-ml-96'
      >MEET YOUR FUTURE DEVELOPER</h2>
      <div className="relative flex flex-col items-center md:items-start	">
        <div className='flex flex-col items-center md:flex md:flex-row'>
          <h1 className='z-10 relative text-6xl	font-bold
          md:text-[13rem]
          '>SATI</h1>
          <Image src={star} width={50} height={50} alt='star' className="z-0 relative	md:w-44	md:h-44 md:pl-4" />
        </div>
        <h1 className='z-10 relative text-6xl	font-bold mb-10	
        md:text-[13rem] md:ml-80 md:mb-3
        '>ALARA</h1>
        <div className='flex flex-col flex-wrap w-64 gap-y-10	items-center
        md:w-full	md:flex-row md:gap-5	md:justify-end md:-ml-16'>
          <Button type='primary' link='contact'>CONTACT</Button>
          <Button type="secondary" link='recent-work'>RECENT WORK</Button>
        </div>
        <div className='flex flex-col gap-y-8 mt-10
         md:flex-row md:gap-x-60 md:-ml-10 md:scale-90 md:mt-14'>
          <UI />
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  )
}

