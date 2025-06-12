import React from 'react'
import arrow from '../assets/arrow.gif'
import curlyarrow1 from '../assets/curlyarrow1.svg'
import curlyarrow2 from '../assets/curlyarrow2.svg'
import curlyarrow3 from '../assets/curlyarrow3.svg'

const contents =[
    {
        id: 1,
        heading: "Reflect",
        subHeading: "Value: Authenticity & Insight",
        paragraph: "You believe every brand has a unique story and soul. Your team helps clients see their true essence by listening deeply, understanding their heritage, market, and customer, and then turning that into meaningful creative expression."
    },
    {
        id: 2,
        heading: "Refine",
        subHeading: "Value: Excellence & Craftsmanship",
        paragraph: "You're obsessed with the details. Whether it's branding, digital experiences, or strategic consultancy, your approach is always polished, thoughtful, and premium—no fluff, just solid, beautiful work with high standards."
    },
    {
        id: 3,
        heading: "Resonate",
        subHeading: "Value: Impact & Relevance",
        paragraph: "You don't just design for the now—you design to connect. Every visual, every word, every experience is meant to hit home with the intended audience, creating long-term brand affinity and business results."
    }
]

export default function About() {
    return (
        <div className='px-6 sm:px-10 md:px-16 lg:px-36 pt-8 sm:pt-10 md:pt-16 lg:pt-20'>
            <h1 className='font-[jmhTypewriter] font-black text-3xl sm:text-4xl md:text-4xl lg:text-5xl'>Why Choose 3RCreative?</h1>
            <p className='font-[productSans] text-sm sm:text-base md:text-base lg:text-lg'>We're more than a creative agency. We are your brand custodians, working tirelessly to:</p>
            <div className='relative flex flex-col gap-8 sm:gap-10 md:gap-16 lg:gap-30 py-8 sm:py-10 md:py-16 lg:py-20'>

                <img src={arrow} alt="" className='hidden md:block absolute right-5 top-25 lg:right-70 lg:top-20 w-24 md:w-32 lg:w-50' />
                <img src={arrow} alt="" className='hidden md:block absolute top-105 left-10 lg:top-120 lg:left-50 w-24 md:w-32 lg:w-50 transform scale-x-[-1]' />
                <img src={arrow} alt="" className='hidden md:block absolute bottom-25 lg:bottom-30 right-10 lg:right-70 w-24 md:w-32 lg:w-50' />

                {contents.map((content, index) => (
                    <div className={`w-full md:w-7/12 lg:w-5/12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-8 ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'}`} key={content.id}>
                        <h1 className={`font-[jmhTypewriter] text-5xl sm:text-6xl md:text-7xl lg:text-9xl ${
                                content.id === 1
                                ? 'text-[#E76F51]'
                                : content.id === 2
                                ? 'text-[#F4A261]'
                                : 'text-[#299D8F]'
                            }`}>0{content.id}</h1>
                        <div className='space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5'>
                            <h1 className='font-[jmhTypewriter] text-xl sm:text-2xl md:text-3xl lg:text-5xl'>{content.heading}</h1>
                            <h4 className='font-[productSans] font-bold text-sm sm:text-base md:text-base lg:text-lg'>{content.subHeading}</h4>
                            <p className='font-[productSans] text-sm sm:text-base md:text-base lg:text-lg'>{content.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
