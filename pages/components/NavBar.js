import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className}`}>
      {title}
    </Link>
  );
};

const NavBar = () => {
  return (
    <header
      className='w-full px-32 py-9 font-semibold flex items-center justify-between 
      fixed top-0 left-0 bg-white z-50'
    >
      <nav>
        <div className='font-signatureFont font-bold text-9xl'>
          <h1 className='text-5xl'>Sajal Mukhopadhyay</h1>
        </div>
      </nav>
      <nav>
        <CustomLink href='/' title='Home' className='mr-4 font-titleFont' />
        <CustomLink href='/about' title='About' className='mx-4 font-titleFont' />
        <CustomLink href='/research' title='Publications' className='mx-4 font-titleFont' />
        <CustomLink href='/teaching' title='Teaching' className='mx-4 font-titleFont' />
        <CustomLink href='/students' title='Students' className='ml-4 font-titleFont' />
      </nav>
    </header>
  );
};

export default NavBar;
