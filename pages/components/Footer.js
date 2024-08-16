import React from 'react'
import Layoutt from "./Layoutt"

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
     font-medium text-lg'>
        <Layoutt className='py-8 flex items-center justify-center  text-green-600'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved to Sajal Mukhopadhyay</span>
       
           
        </Layoutt>
           
        
    </footer>
  )
}

export default Footer;