import { useEffect, useState } from "react";

const words = [
    { text: "Branding", style: { top: "20%", left: "30%", color: '#E76F51' } },
    { text: "Website", style: { top: "50%", left: "20%", color: '#299D8F' } },
    { text: "Research", style: { bottom: "20%", left: "30%", color: '#E9C369' } },
    { text: "Revamping", style: { bottom: "20%", right: "30%", color: '#299D8F' } },
    { text: "Social media", style: { bottom: "50%", right: "20%", color: '#F4A261' } },
    { text: "Scroll to Discover", style: { bottom: "20%", right: "35%", color: '#E2E2E2' } },
];

export default function FloatingWords() {
    const [visibleIndex, setVisibleIndex] = useState(-1);

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
            className={`absolute text-white text-2xl font-normal transition-opacity duration-1000 ${
                visibleIndex === index ? "animate-fade-once" : "opacity-0"
            }`}
            style={word.style}
            >
            {word.text}
            </p>
        ))}
        </div>
    );
}
