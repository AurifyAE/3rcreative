import React, { useState } from 'react'
import byeIcon from '../assets/bei.png'
import mailFront from '../assets/mailImageUp.svg'
import mailBack from '../assets/mailImageBack.svg'
import sendIcon from '../assets/sendIcon.svg'
import rainbowLine from '../assets/rainbowLine.svg'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        project: "",
        referral: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleRadioChange = (value) => {
        setFormData((prev) => ({ ...prev, referral: value }));
    };

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);

        setTimeout(() => {
            setSubmitted(false);
        }, 2000);
    };

    return (
        <div id='contact' className='relative w-full min-h-[1600px] mt-20'>
            <img src={mailFront} alt="" className='w-9/12 absolute -bottom-110 left-1/2 -translate-x-1/2 z-30' />
            <img src={mailBack} alt="" className='w-9/12 absolute -bottom-110 left-1/2 -translate-x-1/2 z-10' />
            <div className={`absolute top-55 left-1/2 -translate-x-1/2 bg-[#FFF7E3] font-[jmhTypewriter] w-8/12 h-full rounded-[60px] shadow-2xl flex flex-col items-center justify-center gap-10 px-25 py-20 z-20 transition-transform duration-700 ease-in-out ${submitted ? "-translate-y-50" : ""}`}>
                <h2 className='w-120 font-bold text-2xl text-center'>Let us help you tell your story — the way it deserves to be told</h2>
                <img src={byeIcon} alt="" />
                <form className='space-y-6'>
                    <h2 className=' font-bold text-2xl text-[#E76F51]'>Hi There!</h2>
                    <p className='text-lg mb-16'>Just fill in a few quick details below — we'll get back to you within one business day. Prefer a conversation? Give us a call or email anytime. We're always up for a chat!</p>
                    <h3 className='font-bold text-xl text-[#E76F51]'>Let's get started:</h3>

                    <div className="flex items-center gap-4 mt-15">
                        <label htmlFor="name" className="w-1/3 text-[#1C1A1A] tracking-wider font-bold">
                            Your Name:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="What should we call you?"
                            className="bg-transparent w-2/3 font-[productSans] border-b border-[#D8D7D7] focus:outline-none placeholder-[#666464] text-xs text-[#666464]"
                        />
                    </div>

                    <div className="flex items-center gap-4 mt-12">
                        <label htmlFor="email" className="w-1/3 text-[#1C1A1A] tracking-wider font-bold">
                            Best Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Where can we send good news and updates?"
                            className="bg-transparent w-2/3 font-[productSans] border-b border-[#D8D7D7] focus:outline-none placeholder-[#666464] text-xs text-[#666464]"
                        />
                    </div>
                    <div className="flex items-center gap-4 mt-12">
                        <label htmlFor="phone" className="w-1/3 text-[#1C1A1A] tracking-wider font-bold">
                            Phone Number:
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="What should we call you?"
                            className="bg-transparent w-2/3 font-[productSans] border-b border-[#D8D7D7] focus:outline-none placeholder-[#666464] text-xs text-[#666464]"
                        />
                    </div>
                    <div className="flex items-center gap-4 mt-12">
                        <label htmlFor="company" className="w-1/3 text-[#1C1A1A] tracking-wider font-bold">
                            Company Name:
                        </label>
                        <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Who are we teaming up with?"
                            className="bg-transparent w-2/3 font-[productSans] border-b border-[#D8D7D7] focus:outline-none placeholder-[#666464] text-xs text-[#666464]"
                        />
                    </div>
                    <div className="flex items-center gap-4 mt-12">
                        <label htmlFor="project" className="w-1/3 text-[#1C1A1A] tracking-wider font-bold">
                            Project Details:
                        </label>
                        <input
                            id="project"
                            type="textarea"
                            value={formData.project}
                            onChange={handleChange}
                            placeholder="No need to write a novel  :-) — just a few sentences about what you're dreaming up!"
                            className="bg-transparent w-2/3 font-[productSans] border-b border-[#D8D7D7] focus:outline-none placeholder-[#666464] text-xs text-[#666464]"
                        />
                    </div>
                    <div className="flex items-start justify-between gap-4 mt-12">
                        <label className="w-1/3 text-[#1C1A1A] tracking-wider font-bold block mb-1">
                            How did you hear about us?
                        </label>
                        <div className='w-2/3'>
                            <p className="text-[#666464] text-xs font-[productSans] mb-4">
                                We always love hearing how good people find us!
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                {[
                                { id: "social", label: "Social Media" },
                                { id: "friends", label: "Friends & Colleagues" },
                                { id: "word", label: "Word of Mouth" },
                                ].map((option) => (
                                <label
                                    key={option.id}
                                    className="w-40 h-6 flex items-center gap-2 text-[#1C1A1A] font-[productSans] text-xs cursor-pointer border border-[#D9D9D9] rounded-4xl px-1 hover:bg-[#F4A261] hover:text-white transition-colors duration-300"
                                >
                                    <input
                                    type="radio"
                                    name="referral"
                                    value={option.id}
                                    checked={formData.referral === option.id}
                                    onChange={() => handleRadioChange(option.id)}
                                    className="accent-[#F4A261] w-4 h-4 cursor-pointer"
                                    />
                                    {option.label}
                                </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
                <div className='w-2/3 text-center mx-auto mt-64'>
                    <h2 className='text-[#299D8F] text-3xl font-bold'>Thanks a ton!</h2>
                    <p className='text-lg font-bold'>We're thrilled to connect and can't wait to work together.</p>
                </div>
            </div>
            <button 
            onClick={handleSubmit}
            className='bg-[#E9C369] w-56 h-16 flex justify-center items-center gap-4 rounded-2xl font-[productSans] text-lg font-bold text-white absolute -bottom-60 left-1/2 -translate-x-1/2 z-40 hover:bg-[#F4A261] transition-colors duration-300 shadow-inner cursor-pointer'>
                <img src={sendIcon} alt="" className='w-7 h-7' />
                Just Send
            </button>
            <img src={rainbowLine} alt="" className='absolute -bottom-139 w-full' />
        </div>
    )
}
