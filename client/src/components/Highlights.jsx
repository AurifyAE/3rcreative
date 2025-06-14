import React from 'react'
import AnimatedCircle from './shapes/Circle'
import HoverRotateTriangle from './shapes/Triangle'
import Star from './shapes/Star'
import RotateSquare from './shapes/RotateSquare'
import SquareWithScale from './shapes/Square'
import Hexagon from './shapes/Hexagon'
import Arrow from './shapes/Arrow'

export default function Highlights() {
    return (
        <div id='highlights' className='relative w-full min-h-[2000px] md:min-h-[2400px] lg:min-h-[1600px] px-4 md:px-20 lg:px-40 pt-20 lg:pt-30 font-[poppins]'>
            <h1 className='font-[jmhTypewriter] font-black text-3xl md:text-4xl lg:text-5xl mb-6 lg:mb-10'>What Are Our Superpowers?</h1>
            <p className='text-sm md:text-base mb-20 md:mb-32 lg:mb-0'>
                A snapshot of what makes us a creative force.
            </p>
            <div className='w-full lg:w-1/2 lg:absolute lg:top-[10%] lg:right-[35%] lg:transform lg:translate-1/2 flex flex-col lg:flex-row items-center gap-8 lg:gap-10 px-4 lg:px-0 mb-8 md:mb-16 lg:mb-0'>
                <AnimatedCircle />
                <p className='w-2/3 lg:w-1/2 text-sm md:text-base'>We don't throw ideas at the wall. Every design, every word, every move is backed by insight, instinct, and strategy. It's where imagination meets intention.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:top-[25%] lg:left-40 flex flex-col lg:items-start items-center mb-24 md:mb-16 lg:mb-0'>
                <HoverRotateTriangle />
                <p className='w-2/3 lg:w-full text-sm md:text-base mt-4'>We think in pixels, scrolls, swipes, and taps. From brand to campaign to experience, everything we create is shaped for the digital world we live in.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:top-[35%] lg:right-[8%] flex flex-col lg:items-start items-center gap-5 mb-24 md:mb-20 lg:mb-0'>
                <Star />
                <p className='w-2/3 lg:w-full text-sm md:text-base mt-4'>We know our playground. Jewelry, luxury, precious metals, design-led businesses— we bring context, culture, and domain depth to every brand we build.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:top-[63%] lg:left-40 flex flex-col lg:items-start items-center gap-10 mb-24 md:mb-20 lg:mb-0'>
                <SquareWithScale />
                <p className='w-2/3 lg:w-full text-sm md:text-base mt-4'>We don't do loud for loud's sake. We dig deep into who we are, stay honest to our voice, and create brands that feel real—not just look pretty.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:top-[50%] lg:right-[35%] flex flex-col lg:items-start items-center gap-10 mb-24 md:mb-10 lg:mb-0'>
                <RotateSquare />
                <p className='w-2/3 lg:w-5/6 text-sm md:text-base mt-4'>We don't just design. We create experiences that resonate, connect, and inspire. It's about making every interaction count.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:top-[68%] lg:right-[8%] flex flex-col lg:items-start items-center mb-24 md:mb-20 lg:mb-0'>
                <Hexagon />
                <p className='w-2/3 lg:w-full text-sm md:text-base mt-4'>We care about the world we design for. From ethical storytelling to conscious partnerships, we choose to create with awareness, empathy, and impact.</p>
            </div>
            <div className='w-full lg:w-1/4 lg:absolute lg:-bottom-40 lg:right-[40%] flex flex-col items-center gap-10 lg:gap-0 mb-20 lg:mb-0'>
                <Arrow />
                <p className='w-2/3 lg:w-full text-sm md:text-base mt-4'>We're not just creatives—we're partners. We show up, stay sharp, communicate well, and treat your brand like it's our own. Every time.</p>
            </div>
        </div>
    )
}
