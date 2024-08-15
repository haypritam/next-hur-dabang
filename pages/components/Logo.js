import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion';

const MotionLink = motion(Link);


export const Logo = () => {
  return (
    <div className='flex items-end justify-center mt-2'>
    <MotionLink href="/" 
    className="w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full
    text-2xl font-bold"
    whileHover={{
        backgroundColor:["#60a5fa", "#0ea5e9",'#1e40af',],
        transition:{duration:1, repeat: Infinity}
    }}
    >NIT</MotionLink>


</div>
)
}