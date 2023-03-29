import Link from 'next/link';
import 'src/components/Button/Button.css';

interface optional {
  link?: string
  children: React.ReactNode
  type: string
}

function Button({children, type, link}: optional) 
{
  return (
    <Link href={`/${link}`} className={`${type} h-12 w-36 text-center pt-3`}>
        {children}
    </Link>
  )
}

export default Button