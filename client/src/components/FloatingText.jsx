import { useEffect, useState } from "react";

const words = [
    { 
        text: "Branding", 
        style: { top: "20%", left: "30%", color: '#E76F51' },
        mobileStyle: { top: "25%", left: "40%", transform: "translateX(50%)", color: '#E76F51' }
    },
    { 
        text: "Website", 
        style: { top: "50%", left: "20%", color: '#299D8F' },
        mobileStyle: { top: "45%", left: "15%", color: '#299D8F' }
    },
    { 
        text: "Research", 
        style: { bottom: "20%", left: "30%", color: '#E9C369' },
        mobileStyle: { bottom: "25%", left: "40%", color: '#E9C369' }
    },
    { 
        text: "Revamping", 
        style: { bottom: "20%", right: "30%", color: '#299D8F' },
        mobileStyle: { top: "45%", right: "10%", color: '#299D8F' }
    },
    { 
        text: "Social media", 
        style: { bottom: "50%", right: "20%", color: '#F4A261' },
        mobileStyle: { top: "20%", left: "40%", color: '#F4A261' }
    },
    { 
        text: "Scroll to Discover", 
        style: { bottom: "20%", right: "35%", color: '#E2E2E2' },
        mobileStyle: { bottom: "20%", right: "10%", color: '#E2E2E2' }
    },
];

export default function FloatingWords() {
    const [visibleIndex, setVisibleIndex] = useState(-1);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setVisibleIndex(index);
            index++;

            if (index >= words.length) {
                clearInterval(interval);
            }
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute w-full h-full font-[AmericanTypewriter] tracking-widest top-0 left-0 pointer-events-none z-30">
        {words.map((word, index) => (
            <p
            key={word.text}
            className={`absolute text-base sm:text-lg md:text-xl lg:text-2xl font-normal transition-opacity duration-1000 ${
                visibleIndex === index ? "animate-fade-once" : "opacity-0"
            }`}
            style={isMobile ? word.mobileStyle : word.style}
            >
            {word.text}
            </p>
        ))}
        </div>
    );
}
