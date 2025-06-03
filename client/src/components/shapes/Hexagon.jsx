import { motion } from "framer-motion";

const Hexagon = () => {
  return (
    <motion.div
      whileHover={{
        y: [-10, 10, -10, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="w-[300px] relative cursor-pointer"
    >
      <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="#83A15E" />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[productSans] font-bold text-xl text-white text-center">
        Social Responsibility
      </div>
    </motion.div>
  );
};

export default Hexagon;
