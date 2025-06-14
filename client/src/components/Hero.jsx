import React from 'react'
import hero from '../assets/hero.jpg'
import blurLayer from '../assets/blurlayer.svg'
import parallelLines from '../assets/parallel.svg'
import serviceIcon from '../assets/btn-icon.svg'
import tornPage from '../assets/torn-page.svg'
import arrow from '../assets/arrow.gif'
import Card from './Card'
import { Link } from 'react-router-dom'
import ServiceCarousel from './ServiceCarousel'
import { useEffect, useState, useRef } from "react";



export default function Hero() {
    const fullText = "Your real story is your brand.\nWe are here to ensure it's authentic, right, and connecting.";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [start, setStart] = useState(false);
    const textRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) setStart(true);
        },
        { threshold: 0.5 }
        );

        if (textRef.current) {
        observer.observe(textRef.current);
        }

        return () => {
        if (textRef.current) observer.unobserve(textRef.current);
        };
    }, []);

    useEffect(() => {
        if (start && index < fullText.length) {
        const timeout = setTimeout(() => {
            setText((prev) => prev + fullText.charAt(index));
            setIndex(index + 1);
        }, 40);
        return () => clearTimeout(timeout);
        }
    }, [start, index]);


    return (
        <div className='relative w-full overflow-hidden pb-32 md:pb-56'>
            <img src={hero} alt="hero image" width='100%' />
            <img src={blurLayer} alt="" className='hidden md:block absolute top-0 z-1 md:h-5/12 lg:h-7/12 md:w-7/12 object-cover overflow-hidden' />
            <img src={arrow} alt="" className='hidden md:block md:absolute top-130 lg:top-120 left-[53%] lg:left-1/2 -translate-x-2/3 -translate-y-1/2 z-20 md:w-25 md:h-25 lg:w-50 lg:h-50' />
            <div className='w-5/6 md:w-5/12 lg:w-2/6 absolute top-40 md:top-40 left-10 md:left-20 lg:left-27 text-white space-y-6 z-[2]'>
                <h3 className='font-[jmhTypewriter] font-black text-2xl md:text-3xl'>About Us</h3>
                <p className='font-[poppins] text-[13px] lg:text-base'>In this world of boundless content possibilities, what's often missing is authenticity. The genuine connection between what a brand depicts and what it delivers is heavily lacking in today's brand communication and marketing efforts. Marketing has become a bizarre showbiz, overshadowing the real value clients receive from a product, service, or experience. This disconnect has turned into a curse rather than a boon for many brands.
                <br /><br />
                At 3RCreative, we invest our time and effort in uncovering your real brand story, ensuring it builds meaningful connections with the right audience.</p>
            </div>

            <img src={parallelLines} alt="" className='hidden md:block absolute top-80 lg:top-150 right-0 md:w-2/3 object-cover overflow-hidden' />

            <div className='w-full bg-black lg:bg-transparent -mt-1 md:-mt-44 lg:mt-0 lg:absolute md:bottom-0 lg:bottom-125 z-20 text-white font-[poppins] py-20 md:py-0 space-y-15'>
                <h3 className='flex font-[jmhTypewriter] font-black md:text-3xl text-2xl px-10 md:px-10 lg:px-26 gap-5'>
                    Our Services
                    <Link to="/services" >
                        <img src={serviceIcon} alt="services" />
                    </Link>
                </h3>
                <div className="w-full">
                    <ServiceCarousel />
                </div>
            </div>

            <div 
            ref={textRef}
            className='w-5/6 absolute bottom-25 md:bottom-30 lg:bottom-70 left-1/2 translate-x-[-50%] z-20 lg:text-3xl text-center font-[jmhTypewriter] text-[#E76F51] whitespace-pre-line'>
                {text}
            </div>
            <div className='relative w-full rotate-180 z-10'>
                <img src={tornPage} alt="" className='w-full absolute -top-30 md:-top-65 lg:-top-53 rotate-180 z-10' />
            </div>
        </div>
    )
}
