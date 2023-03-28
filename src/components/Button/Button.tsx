import 'src/components/Button/Button.css';

function Button({children, type}: {children: React.ReactNode, type: string}) 
{
  return (
    <button className={`${type} h-12 w-36 text-center`}>
        {children}
    </button>
  )
}

export default Button