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
        <div className='px-40 pt-20'>
            <h1 className='font-[jmhTypewriter] font-black text-5xl mb-10'>Our Services</h1>
            <p className='font-[productSans]'>
                In this world of boundless content possibilities, what's often missing is 
                authenticity. The genuine connection between what a brand depicts and what it delivers is heavily lacking in today's brand communication and marketing efforts. Marketing has become a bizarre showbiz, overshadowing the real value clients receive from a product, service, or experience.
            </p>

            <div className="h-[650px] p-22 bg-black text-white mt-10 relative rounded-2xl overflow-hidden opacity-90">
                {/* Animated background */}
                <BlurryAnimation />

                <AnimatePresence mode="wait"  custom={direction}>
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
                        <div className="font-[jmhTypewriter] mb-6 p-6">
                            <div className='flex items-center gap-10'>
                                <h1 
                                    className="text-7xl font-bold mb-2"
                                    style={{ color: colors[(service.id - 1) % 3] }}
                                    >
                                    0{service.id}
                                </h1>
                                <h3 className="text-4xl font-bold mb-2">{service.title}</h3>
                            </div>
                            <p className="text-sm font-[productSans] w-2/3 leading-6">{service.description}</p>
                        </div>

                        <div className="w-full flex gap-6 overflow-x-auto py-5 card-carousel text-black">
                            {service.types.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-52 h-64 bg-[#f2f2f2] font-[productSans] p-6 rounded-3xl relative group cursor-pointer transition-all duration-300 overflow-hidden"
                                >
                                    <div className="transition-opacity duration-500 group-hover:opacity-0 py-6">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                    </div>

                                    <div className="absolute inset-0 bg-[#F4A261] text-white py-12 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-start justify-center">
                                        <p className="text-sm  line-clamp-4">{item.desc}</p>
                                    </div>

                                    <img src={serviceprop} alt="" className='absolute left-0 bottom-0 group-hover:-bottom-10 transition-all duration-500' />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="absolute top-8 right-0 px-8 flex flex-col items-center gap-2 z-20">

                    <button 
                        onClick={prevService} 
                        disabled={currentIndex === 0}
                        className="disabled:opacity-50 z-20 cursor-pointer"
                    >
                        <img src={prevBtn} alt="" />
                    </button>
                    <button 
                        onClick={nextService} 
                        disabled={currentIndex === services.length - 1}
                        className="disabled:opacity-50 z-20 cursor-pointer"
                    >
                        <img src={nextBtn} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}
