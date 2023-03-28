import Link from 'next/link';
import 'src/components/Button/Button.css';


function Button({children, type, link}: {children: React.ReactNode, type: string, link: string}) 
{
  return (
    <Link href={`/${link}`} className={`${type} h-12 w-36 text-center pt-3`}>
        {children}
    </Link>
  )
}

export default Button