import React, { useState } from 'react'
import logo from '../assets/navLogo.svg'
import hamburger from '../assets/hamburger.svg'
import { Link, useNavigate } from 'react-router-dom'
import SliderMenu from './SliderMenu'

export default function Navbar() {
    const [selected, setSelected] = useState('home') // default selected
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navigate = useNavigate();

    return (
        <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-black text-white py-4 px-8 md:px-13 lg:px-26 shadow-2xl border-b-2 border-gray-700'>
            <Link to="/" >
                <img src={logo} alt="3r creative logo" className='w-35 md:w-50' />
            </Link>
            <div className='lg:flex justify-evenly items-center w-1/2 gap-3 hidden'>
                <button 
                    onClick={() => {
                        setSelected('home')
                        navigate('/home')
                    }}
                    className={`w-28 h-8 rounded-2xl transition-colors duration-300 cursor-pointer ${
                        selected === 'home' ? 'bg-[#299D8F]' : 'bg-black'
                    }`}
                >
                    Home
                </button>
                <button 
                    onClick={() => {
                        setSelected('about')
                        document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-28 h-8 rounded-2xl transition-colors duration-300 cursor-pointer ${
                        selected === 'about' ? 'bg-[#299D8F]' : 'bg-black'
                        }`}
                        >
                    About Us
                </button>
                <button 
                    onClick={() => {
                        setSelected('services')
                        navigate('/services')
                    }}
                    className={`w-28 h-8 rounded-2xl transition-colors duration-300 cursor-pointer ${
                        selected === 'services' ? 'bg-[#299D8F]' : 'bg-black'
                    }`}
                >
                    Services
                </button>
                <button 
                    onClick={() => {
                        setSelected('chat')
                        navigate('/contact')
                    }}
                    className={`w-28 h-8 rounded-2xl transition-colors duration-300 cursor-pointer ${
                        selected === 'chat' ? 'bg-[#299D8F]' : 'bg-black'
                    }`}
                >
                    Let's Chat
                </button>
            </div>
            <div className='block lg:hidden'>
                <button onClick={() => setIsMenuOpen(true)}>
                    <img src={hamburger} alt="Menu" className='w-6 md:w-10' />
                </button>
            </div>
            <SliderMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </div>
    )
}

