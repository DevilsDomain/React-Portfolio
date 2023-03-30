import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import github from '../../public/github.svg'
import dribbble from '../../public/dribbble.svg'
import behance from '../../public/behance.svg'
import linkedin from '../../public/linkedin.svg'

interface LinksTypes {
    mode?: string
}

function SocialLinks({mode}: LinksTypes) {
  return (
    <>
    <Link href={'https://github.com/DevilsDomain'} target='_blank'>
    <Image src={github} width={60} height={60} alt='github icon' className={mode ? 'invert' : ''}/>
    </Link>
    <Link href={'https://dribbble.com/'} target='_blank'>
    <Image src={dribbble} width={60} height={60} alt='dribbble icon' className={mode ? 'invert' : ''} />
    </Link>
    <Link href={'https://www.behance.net/'} target='_blank'>
    <Image src={behance} width={60} height={60} alt='behance icon' className={mode ? 'invert' : ''} />
    </Link>
    <Link href={'https://www.linkedin.com/in/sati-alara-erzincan-7a0348220/'} target='_blank'>
    <Image src={linkedin} width={60} height={60} alt='linkedin icon' className={mode ? 'invert' : ''} />
    </Link>
</>
  )
}

export default SocialLinks