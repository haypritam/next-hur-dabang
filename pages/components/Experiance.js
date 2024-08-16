import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'


const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center justify-between'>
        <Circles reference= {ref} />
        <div className='pt-7'>
            <h3 className=' capitalize font-bold text-xl'>{position}&nbsp;<a href={companyLink}>@{company}</a></h3>
            <span className=' capitalize font-medium text-dark/80'>
                {time} | {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </div>
    </li>
    );
};


const Experiance = () => {
    const ref = useRef(null);
    const {scrollyProgress} =useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
  return (
    <>
    <h2 className=' mt-7  font-titleFont text-4xl w-full text-center font-semibold'>Education</h2>
    <div className=' w-full h-1/2 relative  items-center justify rounded-full '>
        <div ref={ref} className='w-[75%] mx-auto relative'>
      
      <h1 className='text-center mt-3  font-titleFont text-2xl'> Ph.D. from Department of Computer Science and Engineering, NIT Durgapur in 2013</h1>
      <h4 className='text-center mt-3  font-titleFont text-2xl'> M. Tech in Computer Science and Engineering from NIT Durgapur in 2008</h4>
      <h5 className='text-center mt-3  font-titleFont text-2xl'> B. E. in Computer Science and Engineering from REC Durgapur in 1997</h5>

 

   
        </div>
        
        </div>
        </>
  )
}


export default Experiance;