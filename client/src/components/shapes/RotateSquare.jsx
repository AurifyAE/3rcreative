import { motion } from "framer-motion";

const RotateSquare = () => {
    return (
        <motion.div
        className="w-56 h-56 bg-[#EC1C24] rounded-[40px] flex items-center justify-center font-[poppins] text-white font-semibold text-xl text-center cursor-pointer"
        style={{ rotate: "-8deg" }}
        whileHover={{
            rotate: [-5, 15, -15, 0],
        }}
        transition={{
            duration: 1.5,
            ease: "easeInOut",
        }}
        >
        Critical Analysis
        </motion.div>
    );  
};

export default RotateSquare;
