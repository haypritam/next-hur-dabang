import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Circles } from './Circles'


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


export const Experiance = () => {
    const ref = useRef(null);
    const {scrollyProgress} =useScroll(
        {
            target: ref,
            offset: ['start end', 'center start']
        }
    )
  return (
    <>
    <h2 className=' mt-7 font-bold text-5xl w-full text-center'>Work Experiance</h2>
    <div className=' '>
        <div ref={ref} className='w-[75%] mx-auto relative'>
    

    <motion.div 
    style={{sclaeY: scrollyProgress}}
    className=' absolute left-8 top-7 w-[3px] h-full bg-dark origin-top'/>

            <ul>
                <Details
                position='Associate Professor' company='NIT, Durgapur'
                companyLink='https://nitdgp.ac.in/department/computer-science-engineering/faculty-1/sajal-mukhopadhyay'
                time='2001-Present' address='Durgapur,West Bengal, India'
                



                
                
                
                
                
                />
            </ul>
            
        </div>
        
        </div>
        </>
  )
}
