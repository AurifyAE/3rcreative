import React from 'react'
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
        paragraph: "You're obsessed with the details. Whether it’s branding, digital experiences, or strategic consultancy, your approach is always polished, thoughtful, and premium—no fluff, just solid, beautiful work with high standards."
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
        <div className=' px-36 pt-20'>
            <h1 className='font-[jmhTypewriter] font-black text-5xl'>Why Choose 3RCreative?</h1>
            <p className='font-[productSans]'>We're more than a creative agency. We are your brand custodians, working tirelessly to:</p>
            <div className='relative flex flex-col gap-30 py-20'>

                <img src={curlyarrow1} alt="" className='absolute right-70 top-10' />
                <img src={curlyarrow2} alt="" className='absolute top-100 left-50' />
                <img src={curlyarrow3} alt="" className='absolute bottom-10 right-70' />

                {contents.map((content, index) => (
                    <div className={`w-5/12 flex items-center gap-8 ${index % 2 === 0 ? 'self-start' : 'self-end'}`} key={content.id}>
                        <h1 className={`font-[jmhTypewriter] text-9xl ${
                                content.id === 1
                                ? 'text-[#E76F51]'
                                : content.id === 2
                                ? 'text-[#F4A261]'
                                : 'text-[#299D8F]'
                            }`}>0{content.id}</h1>
                        <div className='space-y-5'>
                            <h1 className='font-[jmhTypewriter] text-5xl'>{content.heading}</h1>
                            <h4 className='font-[productSans] font-bold'>{content.subHeading}</h4>
                            <p className='font-[productSans]'>{content.paragraph}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
