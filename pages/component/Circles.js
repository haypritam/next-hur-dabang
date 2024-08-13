import React from 'react';
import { motion, useScroll } from 'framer-motion';

export const Circles = ({ reference }) => {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ['center end', 'center center']
    });

    return (
        <figure className='absolute left-0 stroke-dark'>
            <svg width='75' height='75' viewBox='0 0 100 100'>
                <motion.circle
                    cx='75'
                    cy='50'
                    r='20'
                    className='stroke-primary stroke-1 fill-none'
                    style={{
                        pathLength: scrollYProgress
                    }}
                />
            </svg>
        </figure>
    );
}
