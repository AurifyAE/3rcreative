import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Loader from '../components/Loader'



export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a short delay
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;


    return (
        <div className=''>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Highlights />
            <Contact />
            <Footer />
        </div>
    )
}
