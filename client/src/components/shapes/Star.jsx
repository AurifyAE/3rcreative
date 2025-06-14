import { motion } from "framer-motion";
import { useState } from "react";

const Star = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        animate={{
            rotate: isHovered ? [0, 45, -45, 0] : 0
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
        }}
        className="absolute top-0 left-0 cursor-pointer"
        >
        <polygon
            points="
            50,5
            68,38
            98,38
            74,60
            82,92
            50,72
            18,92
            26,60
            2,38
            32,38
            "
            fill="#299D8F"
        />
        </motion.svg>
        <motion.div 
            className="font-[poppins] absolute bottom-36 md:bottom-40 left-1/2 -translate-x-1/2 text-white font-semibold text-base md:text-lg text-center pointer-events-none whitespace-nowrap"
            animate={{
                rotate: isHovered ? [0, 45, -45, 0] : 0
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
            }}
        >
            Niche Understanding
        </motion.div>
    </div>
    );
};

export default Star;
