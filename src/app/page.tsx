import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'src/app/page.css'
import star from '../../public/star.svg'
import homeTop from '../../public/homeTop.svg'
import homeBottom from '../../public/homeBottom.svg'
import Button from '@/components/Button/Button'
import UI from '@/components/UI'
import Frontend from '@/components/Frontend'
import Backend from '@/components/Backend'



export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className='z-0 h-screen	w-screen absolute'>
          <Image src={homeTop} width={300} height={380} alt='blob top'
          className='blur-3xl absolute z-0  ml-28 bottom-0 right-0 image-size p-14'/>
          <Image src={homeBottom} width={300} height={380} alt='blob top' 
          className='blur-3xl absolute z-0 image-size p-14'/>
      </div>
      <h2 className='z-10 relative text-base font-light	leading-5 mt-20	mb-5'>MEET YOUR FUTURE DEVELOPER</h2>
      <div className="relative flex flex-col items-center">
        <h1 className='z-10 relative text-6xl	font-bold'>SATI</h1>
        <Image src={star} width={63} height={71} alt='star' className="z-0 relative" />
        <h1 className='z-10 relative text-6xl	font-bold mb-10	'>ALARA</h1>
        <div className='flex flex-col flex-wrap w-64 gap-y-5	items-center '>
          <Button type='primary'>CONTACT</Button>
          <Button type="secondary">RECENT WORK</Button>
        </div>
        <div className='flex flex-col gap-y-8 mt-10 '>
          <UI />
          <Frontend />
          <Backend />
        </div>
      </div>
    </div>
  )
}

