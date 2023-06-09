
import React from 'react'
import Image from 'next/image'
import aboutTop from '../../../public/aboutBottom.svg'
import aboutBottom from '../../../public/aboutTop.svg'
import 'src/app/globals.css'
import star from '../../../public/star.svg'
import Link from 'next/link'
import Button from '@/components/Button/Button'
import DefaultLayout from '@/components/DefaultLayout'
import { getClient } from '../../../ApolloClient'
import {gql} from '@apollo/client'

const SOCIAL_LINKS = gql`
query MyQuery {
    contactLinks {
      socialMediaLink
    }
  }
  
`
interface ContactLink {
    __typename: string;
    socialMediaLink: [string, string];
  }

async function page() {
  const client = getClient();
  const { data } = await client.query({query: SOCIAL_LINKS});
  return (
    <DefaultLayout>
        <div className="relative flex flex-col items-center">
            <div className=' h-screen	w-screen absolute'>
            <Image src={aboutTop} width={800} height={820} alt='blob top'
            className='blur-3xl absolute ml-96 bottom-0 right-0  p-14 zindex-1'/>
            <Image src={aboutBottom} width={550} height={780} alt='blob top' 
            className='blur-3xl absolute p-14 -mt-44 zindex-1'/>
        </div>
        <div className='flex flex-col items-center mx-8 mt-10 md:mx-52	'>
                <div className='pb-9 pt-16'>
                    <div className='flex flex-row justify-between'>
                        <h1 className='z-10 relative text-6xl	font-bold
                        md:text-[11rem]
                        '>I</h1>
                        <div className='flex flex-row'>
                            <h1 className='z-10 relative text-6xl	font-bold
                            md:text-[11rem]'>AM</h1>
                            <Image src={star} width={50} height={50} alt='star' className="z-0 relative	md:w-44	md:h-44 md:pl-4" />
                            <h1 className='z-10 relative text-6xl	font-bold
                            md:text-[11rem]'>A</h1>
                        </div>
                    </div>
                    <h1 className='z-10 relative text-6xl	font-bold
                    md:text-[11rem]'>CREATIVE DEVELOPER</h1>
                </div>
                <div className='font-light leading-7 text-justify pb-14 md:text-xl md:leading-10'>
                    <p className='pb-5 md:w-10/12'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat 
                    sunt nostrud amet.</p>
                    <p className='md:w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean eu fermentum augue, sit amet convallis augue. Integer eu iaculis sem, sed euismod eros. 
                    Nulla facilisi. Proin luctus odio nunc, sed laoreet est bibendum vitae. Sed a eleifend ex. 
                    Integer varius rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula. 
                    Aliquam faucibus erat ut tincidunt cursus. Cras et ullamcorper velit. In hac habitasse platea dictumst.
                    Nunc vitae dui quis risus elementum auctor.</p>
                </div>
                    <div className='flex flex-row w-full justify-center mb-20 scale-105
                    md:scale-125 md:justify-end md:mr-96 md:w-10/12'>
                        <Button type='secondary' link='contact'>CONTACT</Button>
                    </div>
                <div className='flex flex-col gap-y-7 text-4xl font-bold md:flex-row md:gap-x-10 md:mb-20'>
                    {data.contactLinks.map((link: ContactLink, linkIndex: number) => {
                        return(
                        <Link key={linkIndex} href={link.socialMediaLink[1]} target='_blank' 
                        className='hover:underline uppercase'>{link.socialMediaLink[0]}</Link>
                        );
                    })}
                </div>
            </div>
        </div>
    </DefaultLayout>
  )
}

export default page