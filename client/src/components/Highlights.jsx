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
        <div id='highlights' className='relative w-full h-[1600px] px-40 pt-30'>
            <h1 className='font-[jmhTypewriter] font-black text-5xl mb-10'>What Are Our Superpowers?</h1>
            <p className='font-[productSans]'>
                A snapshot of what makes us a creative force.
            </p>
            <div className='w-1/2 absolute top-[10%] right-[35%] transform translate-1/2 flex items-center gap-10'>
                <AnimatedCircle />
                <p className='font-[jmhTypewriter] w-1/2'>We don't throw ideas at the wall. Every design, every word, every move is backed by insight, instinct, and strategy. It's where imagination meets intention.</p>
            </div>
            <div className='w-1/4 absolute top-[25%] left-40 gap-2 flex flex-col items-start'>
                <HoverRotateTriangle />
                <p className='font-[jmhTypewriter]'>We think in pixels, scrolls, swipes, and taps. From brand to campaign to experience, everything we create is shaped for the digital world we live in.</p>
            </div>
            <div className='w-1/4 absolute top-[35%] right-[8%] flex flex-col items-start gap-40'>
                <Star />
                <p className='font-[jmhTypewriter]'>We know our playground. Jewelry, luxury, precious metals, design-led businesses— we bring context, culture, and domain depth to every brand we build.</p>
            </div>
            <div className='w-1/4 absolute top-[63%] left-40 gap-12 flex flex-col items-start'>
                <SquareWithScale />
                <p className='font-[jmhTypewriter]'>We don't do loud for loud's sake. We dig deep into who we are, stay honest to our voice, and create brands that feel real—not just look pretty.</p>
            </div>
            <div className='w-1/4 absolute top-[50%] right-[35%] flex flex-col items-start gap-10'>
                <RotateSquare />
                <p className='font-[jmhTypewriter] w-5/6'>We don't just design. We create experiences that resonate, connect, and inspire. It's about making every interaction count.</p>
            </div>
            <div className='w-1/4 absolute top-[68%] right-[8%] gap-5 flex flex-col items-start'>
                <Hexagon />
                <p className='font-[jmhTypewriter]'>We care about the world we design for. From ethical storytelling to conscious partnerships, we choose to create with awareness, empathy, and impact.</p>
            </div>
            <div className='w-1/3 absolute -bottom-40 right-[35%] gap-5 flex flex-col items-center'>
                <Arrow />
                <p className='font-[jmhTypewriter]'>We're not just creatives—we're partners. We show up, stay sharp, communicate well, and treat your brand like it's our own. Every time.</p>
            </div>
        </div>
    )
}
