import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const CustomLink = ({href, title, className=""}) =>{
  const router = useRouter();
  
  return(
    <Link href={href} className={`${className}`}>
    {title}
    

    <span className={`h-[1px] inline-block bg-dark absolute  left-0 -bottom-0.5
    group-hover:w-full
     transition-[width] ease duration-300 ${router.asPath === href ? 'w-full' : 'w-0'}
     `}>&nbsp;</span>
    
    </Link>
  )
}


const NavBar = () => {
  return (
   <header
   className='w-full px-32 py-9 font-semibold flex items-center justify-between '
   >
    <nav>
      <h1 className='text-3xl font'>Sajal Mukhopadhyay</h1>
    </nav>
    <nav>
      <CustomLink href='/' title='Home' className='mr-4'/>
      <CustomLink href='/about' title='About' className='mx-4' />
      <CustomLink href='/research' title='Research' className='mx-4' />
      <CustomLink href='/teaching' title='Teaching' className='mx-4'/>
      <CustomLink href='/students' title='Students' className='ml-4'/>
      
    </nav>
   </header>
  )
}

export default NavBar