import { motion } from "framer-motion";

const SquareWithScale = () => {
    return (
        <motion.div
        className="w-56 h-56 bg-[#E4B544] font-[poppins] rounded-md flex items-center justify-center text-white font-semibold text-xl text-center cursor-pointer"
        whileHover={{
            scale: [1, 1.1, 1],
            x: [0, 10, -10, 0],
            y: [0, -5, 5, 0],
        }}
        transition={{
            duration: 1.5,
            ease: "easeInOut",
        }}
        >
            Authenticity
        </motion.div>
    );
};

export default SquareWithScale;
