import { motion } from "framer-motion";

const SwingTriangle = () => {
  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 100 100"
      className="cursor-pointer font-semibold"
      whileHover={{
        rotate: [0, -15, 15, -10, 10, 0],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
    >
      <polygon points="50,15 90,85 10,85" fill="#9747FF" />
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill="white"
        fontSize="6"
        fontFamily="Poppins, sans-serif"
      >
        Digital First
      </text>
    </motion.svg>
  );
};

export default SwingTriangle;
