import React, { useState } from 'react'
import serviceprop from '../assets/serviceprop.svg'
import BlurryAnimation from "./BlurryAnimation";
import nextBtn from '../assets/nextbtn.svg'
import prevBtn from '../assets/prevbtn.svg'
import { motion, AnimatePresence } from "framer-motion";
import services from '../data/serviceData';

const colors = ["#299D8F", "#F4A261", "#E76F51"];

export default function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next"); 

    const nextService = () => {
        if (currentIndex < services.length - 1) {
        setDirection("next");
        setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevService = () => {
        if (currentIndex > 0) {
        setDirection("prev");
        setCurrentIndex((prev) => prev - 1);
        }
    };

    const variants = {
        initial: (dir) => ({
        opacity: 0,
        x: dir === "next" ? 50 : -50,
        }),
        animate: { opacity: 1, x: 0 },
        exit: (dir) => ({
        opacity: 0,
        x: dir === "next" ? -50 : 50,
        }),
    };

    const service = services[currentIndex];

    return (
        <div id='services' className='px-4 sm:px-8 md:px-20 lg:px-40 pt-10 lg:pt-20'>
            <h1 className='font-[jmhTypewriter] font-black text-3xl sm:text-4xl lg:text-5xl mb-6 lg:mb-10'>Our Services</h1>
            <p className='font-[poppins] text-sm sm:text-base md:text-lg'>
            At 3RCreative, we blend strategy, creativity, and technology to help purpose-driven brands grow, connect meaningfully, and make a lasting impact in a fast-evolving digital world.
            </p>

            <div className="h-auto min-h-[500px] lg:min-h-[650px] p-4 sm:p-8 lg:px-22 lg:py-16 bg-black text-white mt-6 lg:mt-10 relative rounded-2xl overflow-hidden opacity-90">
                {/* Animated background */}
                <BlurryAnimation />

                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={service.id}
                        custom={direction}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.4 }}
                        className="w-full"
                        >
                        <div className="font-[jmhTypewriter] mb-4 lg:mb-6 p-4 md:px-9 lg:px-6 lg:py-0">
                            <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 lg:gap-10 mb-8 lg:mb-10 lg:w-4/5'>
                                <h1 
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2"
                                    style={{ color: colors[(service.id - 1) % 3] }}
                                    >
                                    {service.id < 10 ? `0${service.id}` : service.id}
                                </h1>
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">{service.title}</h3>
                            </div>
                            <p className="text-xs sm:text-sm lg:text-base font-[poppins] font-semibold w-full mb-3 lg:mb-8 leading-6">{service.subtitle}</p>
                            <p className="text-xs sm:text-sm lg:text-base font-[poppins] w-full lg:w-[95%] leading-6">{service.description}</p>
                        </div>

                        <div className="w-full flex gap-4 lg:gap-6 overflow-x-auto py-4 lg:py-5 card-carousel text-black px-2 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            {service.types.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-40 sm:w-48 lg:w-52 h-56 sm:h-60 lg:h-64 bg-[#f2f2f2] font-[poppins] p-4 lg:p-6 rounded-3xl relative group cursor-pointer transition-all duration-300 overflow-hidden flex-shrink-0"
                                >
                                    <div className="transition-opacity duration-500 group-hover:opacity-0 py-2 px-1 lg:pr-1">
                                        <h3 className="text-base lg:text-lg font-semibold">{item.title}</h3>
                                    </div>
                                        <img src={item.icon} alt="" className='absolute bottom-20 right-5 w-13 h-13' />

                                    <div className="absolute inset-0 bg-[#F4A261] text-white py-8 lg:py-8 px-4 lg:px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-center">
                                        <p className="text-xs lg:text-base text-black line-clamp-4">{item.desc}</p>
                                    </div>

                                    <img src={serviceprop} alt="" className='absolute left-0 bottom-0 group-hover:-bottom-10 transition-all duration-500 w-auto' />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-4 sm:top-8 right-0 px-4 sm:px-8 flex flex-col items-center gap-2 z-20">
                    <button 
                        onClick={prevService} 
                        disabled={currentIndex === 0}
                        className="disabled:opacity-50 z-20 cursor-pointer w-8 h-8 lg:w-auto lg:h-auto"
                    >
                        <img src={prevBtn} alt="" className="w-full h-full" />
                    </button>
                    <button 
                        onClick={nextService} 
                        disabled={currentIndex === services.length - 1}
                        className="disabled:opacity-50 z-20 cursor-pointer w-8 h-8 lg:w-auto lg:h-auto"
                    >
                        <img src={nextBtn} alt="" className="w-full h-full" />
                    </button>
                </div>
            </div>
        </div>
    )
}
