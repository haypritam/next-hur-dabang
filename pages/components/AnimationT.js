import React from 'react';

const AnimationT = ({ text = "", className = "" }) => {
    return (
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
            <h1 className={`inline-block w-full text-dark font-bold capitalize text-4xl ${className}`}>
                {text.split('').map((word, index) => (
                    <span key={word + '-' + index}>{word}&nbsp;</span>
                ))}
            </h1>
        </div>
    );
}

export default AnimationT;
