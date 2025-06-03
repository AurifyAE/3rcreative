import { motion } from "framer-motion";

const Star = () => {
  return (
    <div className="relative w-[150px] h-[150px]">
        <motion.svg
        width="300"
        height="300"
        viewBox="0 0 100 100"
        whileHover={{
            rotate: [0, 45, -45, 0],
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
        <div className="font-[productSans] absolute -bottom-12 right-0 translate-x-1/2 -translate-y-1/2 text-white font-semibold text-xl text-center pointer-events-none">
            Niche Understanding
        </div>
    </div>

    );
};

export default Star;
