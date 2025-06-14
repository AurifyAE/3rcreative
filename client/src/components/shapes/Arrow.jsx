import { motion } from "framer-motion";

const Arrow = () => {
    return (
        <motion.div
        style={{ rotate: '-6deg' }} // Always tilted to the right
        whileHover={{ x: [0, 20, -20, 0] }} // Move on hover for desktop
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-[400px] h-[200px] md:w-[500px] md:h-[250px] cursor-pointer font-[poppins] font-semibold text-center"
        >
        <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        >
        {/* Shaft */}
        <rect x="71" y="40" width="130" height="120" fill="#E76F51" />


        {/* Arrowhead */}
        <polygon points="200,10 390,100 200,190" fill="#E76F51" />
        {/* Text inside shaft */}
        <text
            x="185"
            y="105"
            fill="white"
            textAnchor="middle"
            className="text-base"
        >
            Service Excellence
        </text>
        </svg>

        </motion.div>
    );
};

export default Arrow;
