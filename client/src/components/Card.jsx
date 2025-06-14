import React from 'react'
import paper from '../assets/paperpiece.svg'

const colors = ["#299D8F", "#F4A261", "#E76F51"];

export default function Card({ card }) {
    return (
        <div className='relative w-full max-w-[300px] lg:max-w-[360px] mx-auto'>
            <img src={paper} alt="" className='absolute object-cover -left-12 -top-12 lg:-left-15 lg:-top-15 z-10 w-32 lg:w-40' />
            <div 
                className='w-full aspect-square overflow-hidden rounded-3xl border-5'
                style={{ borderColor: colors[card.id % 3] }}
            >
                <img 
                    src={card.image} 
                    alt={card.title} 
                    className='w-full h-full object-cover'
                />
            </div>
            <p className='text-white font-[poppins] text-center text-xl md:text-2xl py-3 pl-2'>{card.title}</p>
        </div>
    )
}
