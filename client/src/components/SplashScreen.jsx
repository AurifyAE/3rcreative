import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import logoName from '../assets/logoName.svg'
import bgVideo from '../assets/bgVideo.mp4'
import FloatingText from './FloatingText'

export default function SplashScreen() {
    const navigate = useNavigate();
    const allowScroll = useRef(false);
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            allowScroll.current = true;
        }, 4000); // delay for 4 seconds

        const handleScroll = () => {
            if (allowScroll.current) {
                setFadeOut(true)
                setTimeout(() => {
                    navigate('/home', { replace: true })
                }, 1000)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate])

    return (
        <div className={`h-[110vh] relative flex flex-col justify-center items-center bg-black space-y-5 overflow-hidden transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                preload="auto"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={bgVideo} type="video/mp4" />
            </video>
            <img src={hamburger} alt="" className='absolute right-16 top-10 z-10' />
            <img src={logo} alt="3R Logo" className='z-10' />
            <div className='relative z-10 space-y-2'>
                <img src={logoName} alt="Creative" className='z-10 ' />
                <h4 className='absolute font-[AmericanTypewriter] font-normal text-xl text-neutral-500 z-10 right-0 tracking-widest'>A DIGITAL AGENCY</h4>
            </div>
            <FloatingText />
        </div>
    )
}
