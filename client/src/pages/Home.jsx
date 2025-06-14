import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Highlights from '../components/Highlights'
import Contact from '../components/Contact'
import Loader from '../components/Loader'



export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a short delay
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <Loader />;


    return (
        <div>
            <Hero />
            <About />
            <Services />
            <Highlights />
            <Contact />
        </div>
    )
}
