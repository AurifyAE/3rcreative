import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import rainbowSlider from '../assets/rainbowSlider.svg'
import instagram from '../assets/instagram-black.svg'
import facebook from '../assets/facebook-black.svg'
import telegram from '../assets/telegram-black.svg'
import youtube from '../assets/youtube-black.svg'


export default function SliderMenu({ isOpen, onClose }) {
    const menuItems = [
        { name: 'Home', path: '/home' },
        { name: 'About Us', action: () => document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Services', action: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' }) },
        { name: "Let's Chat", action: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="fixed right-0 top-0 h-full w-[280px] sm:w-[320px] md:w-[380px] bg-[#FFF7E3] text-black z-50 p-4 pl-10 sm:p-6 md:p-8 lg:pl-14 shadow-2xl"
                >
                    <div className="flex justify-end mb-6 sm:mb-8 mr-4 sm:mr-10">
                        <button onClick={onClose} className="text-black text-4xl sm:text-5xl cursor-pointer">
                            ×
                        </button>
                    </div>
                    
                    <nav className="space-y-4 sm:space-y-6">
                        {menuItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.path ? (
                                    <Link
                                        to={item.path}
                                        onClick={onClose}
                                        className="block text-lg sm:text-xl font-[poppins] hover:text-[#299D8F] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => {
                                            item.action();
                                            onClose();
                                        }}
                                        className="block text-lg sm:text-xl font-[poppins] hover:text-[#299D8F] transition-colors w-full text-left"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </nav>
                    <ul className="absolute bottom-10 md:bottom-15 right-8 md:right-15 flex flex-col items-center justify-center gap-4 md:gap-4">
                    <li>
                        <a href="https://www.facebook.com/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={facebook} alt="Facebook" className="w-6 md:w-7 h-6 md:h-7" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/3r_creative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={instagram} alt="Instagram" className="w-6 md:w-7 h-6 md:h-7" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={telegram} alt="Telegram" className="w-6 md:w-7 h-6 md:h-7" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/3rcreative" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img src={youtube} alt="YouTube" className="w-6 md:w-7 h-6 md:h-7 text-black" />
                        </a>
                    </li>
                    </ul>
                    <div className='absolute bottom-40 md:bottom-25  lg:bottom-35 left-0 w-full'>
                        <img src={rainbowSlider} alt="" className='w-full rotate-180 opacity-70' />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 