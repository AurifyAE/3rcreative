import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SliderMenu({ isOpen, onClose }) {
    const menuItems = [
        { name: 'Home', path: '/home' },
        { name: 'About Us', action: () => document.getElementById('highlights').scrollIntoView({ behavior: 'smooth' }) },
        { name: 'Services', path: '/services' },
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
                    className="fixed right-0 top-0 h-full w-[280px] sm:w-[320px] md:w-[380px] bg-[#e4e4e4] text-black z-50 p-4 sm:p-6 md:p-8"
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
                                        className="block text-lg sm:text-xl font-[productSans] hover:text-[#299D8F] transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => {
                                            item.action();
                                            onClose();
                                        }}
                                        className="block text-lg sm:text-xl font-[productSans] hover:text-[#299D8F] transition-colors w-full text-left"
                                    >
                                        {item.name}
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 