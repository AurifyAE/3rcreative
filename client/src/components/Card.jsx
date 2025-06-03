import React from 'react'
import paper from '../assets/paperpiece.svg'
import branding from '../assets/branding.jpg'

const colors = ["#299D8F", "#F4A261", "#E76F51"];


export default function Card({ id }) {
    return (
        <div className='relative'>
            <img src={paper} alt="" className='absolute object-cover -left-16 -top-16 z-10' />
            <div 
                className='w-90 h-90 overflow-hidden rounded-3xl border-5'
                style={{ borderColor: colors[id % 3] }}
                >
                <img src={branding} alt="Branding and Identity Development" />
            </div>
            <p className='text-white text-2xl py-3 pl-2'>Branding & Identity Development</p>
        </div>
    )
}
