import React from 'react'
import paper from '../assets/paperpiece.svg'
import branding from '../assets/branding.jpg'

const colors = ["#299D8F", "#F4A261", "#E76F51"];

export default function Card({ id }) {
    return (
        <div className='relative w-full max-w-[300px] lg:max-w-[360px] mx-auto'>
            <img src={paper} alt="" className='absolute object-cover -left-12 -top-12 lg:-left-15 lg:-top-15 z-10 w-32 lg:w-40' />
            <div 
                className='w-full aspect-square overflow-hidden rounded-3xl border-5'
                style={{ borderColor: colors[id % 3] }}
            >
                <img 
                    src={branding} 
                    alt="Branding and Identity Development" 
                    className='w-full h-full object-cover'
                />
            </div>
            <p className='text-white text-xl md:text-2xl py-3 pl-2'>Branding & Identity Development</p>
        </div>
    )
}
