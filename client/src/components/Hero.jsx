import React from 'react'
import hero from '../assets/heroImage.png'
import blurLayer from '../assets/blurlayer.svg'
import parallelLines from '../assets/parallel.svg'
import serviceIcon from '../assets/btn-icon.svg'
import tornPage from '../assets/torn-page.svg'
import Card from './Card'
import { Link } from 'react-router-dom'
import ServiceCarousel from './ServiceCarousel'


export default function Hero() {
    return (
        <div className='relative w-full overflow-hidden pb-32'>
            <img src={hero} alt="hero image" width='100%' />
            <img src={blurLayer} alt="" className='hidden md:block absolute top-0 z-1 md:h-5/6 md:w-7/12 object-cover overflow-hidden' />
            <div className='w-5/6 md:w-5/12 lg:w-2/6 absolute top-40 md:top-40 left-10 md:left-20 lg:left-27 text-white space-y-6 z-[2]'>
                <h3 className='font-[jmhTypewriter] font-black text-2xl md:text-3xl'>About Us</h3>
                <p className='font-[productSans] text-sm lg:text-base md:font-normal'>In this world of boundless content possibilities, what's often missing is authenticity. The genuine connection between what a brand depicts and what it delivers is heavily lacking in today's brand communication and marketing efforts. Marketing has become a bizarre showbiz, overshadowing the real value clients receive from a product, service, or experience. This disconnect has turned into a curse rather than a boon for many brands.
                <br />
                At 3RCreative, we invest our time and effort in uncovering your real brand story, ensuring it builds meaningful connections with the right audience.</p>
            </div>
            <img src={parallelLines} alt="" className='hidden md:block absolute top-80 lg:top-150 right-0 md:w-2/3 object-cover overflow-hidden' />
            <div className='w-full absolute bottom-24 md:bottom-120 z-20 text-white font-[productSans] space-y-15'>
                <h3  className='flex font-[jmhTypewriter] font-black text-3xl pl-26 gap-5'>
                    Our Services
                    <Link to="/services" >
                        <img src={serviceIcon} alt="services" />
                    </Link>
                </h3>
                <div className="w-full overflow-hidden"> {/* Added container with width and overflow control */}
                    <ServiceCarousel />
                </div>
            </div>
            <div className='w-5/6 absolute bottom-70 left-1/2 translate-x-[-50%] z-20 lg:text-3xl text-center font-[jmhTypewriter] text-[#E76F51]'>
                Your real story is your brand.<br />
                We are here to ensure it's authentic, right, and connecting.
            </div>
            <div className='relative w-full rotate-180 z-10'>
                <img src={tornPage} alt="" className='w-full absolute -top-50 rotate-180 z-10' />
            </div>
        </div>
    )
}
