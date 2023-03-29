import Image from 'next/image'
import 'src/app/page.css'
import star from '../../public/star.svg'
import homeTop from '../../public/homeTop.svg'
import homeBottom from '../../public/homeBottom.svg'
import Button from '@/components/Button/Button'
import UI from '@/components/UI'
import Frontend from '@/components/Frontend'
import Backend from '@/components/Backend'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'




export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className='hidden md:block z-40'>
            <div className='flex flex-row gap-100 pt-4'>
                <Link className="text-sm text-stone-900 font-medium" href={'/'}>HOME</Link>
                <Link className="text-sm text-stone-900 font-medium" href={'/about'}>ABOUT</Link>
                <Link className="text-sm text-stone-900 font-medium" href={'/projects'}>PROJECTS</Link>
            </div>
        </div>
      <div className='z-0 h-screen	w-screen absolute'>
          <Image src={homeTop} width={300} height={380} alt='blob top'
          className='blur-3xl absolute z-0  ml-28 bottom-0 right-0 image-size p-14'/>
          <Image src={homeBottom} width={300} height={380} alt='blob top' 
          className='blur-3xl absolute z-0 image-size p-14'/>
      </div>
      <h2 className='z-10 relative text-base font-light	leading-5 mt-20	mb-5 md:text-3xl 
      md:font-extralight'
      >MEET YOUR FUTURE DEVELOPER</h2>
      <div className="relative flex flex-col items-center">
        <h1 className='z-10 relative text-6xl	font-bold'>SATI</h1>
        <Image src={star} width={63} height={71} alt='star' className="z-0 relative" />
        <h1 className='z-10 relative text-6xl	font-bold mb-10	'>ALARA</h1>
        <div className='flex flex-col flex-wrap w-64 gap-y-5	items-center '>
          <Button type='primary' link='contact'>CONTACT</Button>
          <Button type="secondary" link='recent-work'>RECENT WORK</Button>
        </div>
        <div className='flex flex-col gap-y-8 mt-10'>
          <UI />
          <Frontend />
          <Backend />
        </div>
      </div>
      <div className="flex flex-col h-full absolute top-36 right-20 mt-64">
        <Navbar />
      </div>
    </div>
  )
}

