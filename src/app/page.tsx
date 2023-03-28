import Image from 'next/image'
import { Inter } from 'next/font/google'
import 'src/app/page.css'
import star from '../../public/star.svg'
import homeTop from '../../public/homeTop.svg'
import homeBottom from '../../public/homeBottom.svg'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className="relative">
      <div className='z-0 h-screen	w-screen absolute'>
          <Image src={homeTop} width={300} height={380} alt='blob top'
          className='blur-3xl absolute z-0  ml-28 bottom-0 right-0 image-size p-14'/>
          <Image src={homeBottom} width={300} height={380} alt='blob top' 
          className='blur-3xl absolute z-0 image-size p-14'/>
      </div>
      <h2 className='z-10 relative'>MEET YOUR FUTURE DEVELOPER</h2>
      <div className="relative">
        <h1 className='z-10 relative'>SATI</h1>
        <Image src={star} width={63} height={71} alt='star' className="z-0 relative" />
        <h1 className='z-10 relative'>ALARA</h1>
        <div>
          <Button type='primary'>CONTACT</Button>
          <Button type="primary">RECENT WORK</Button>
        </div>
      </div>
    </div>
  )
}

