import { motion } from "framer-motion";
// import "./BlurryAnimation.css";

const circles = [
  { color: "#E76F51", delay: 0, top: "15%", left: "10%" },
  { color: "#299D8F", delay: 2, top: "20%", left: "60%" },
  { color: "#E9C369", delay: 4, top: "70%", left: "30%" },
  { color: "#299D8F", delay: 1.5, top: "50%", left: "80%" },
  { color: "#E76F51", delay: 3, top: "60%", left: "10%" },
  { color: "#E9C369", delay: 2.5, top: "30%", left: "40%" },
];

const BlurryAnimation = () => {
  return (
    <div className="absolute inset-0 z-0">
      {circles.map((c, i) => (
        <motion.div
          key={i}
          className="absolute w-[300px] h-[300px] rounded-full opacity-90 blur-[100px]"
          style={{ backgroundColor: c.color, top: c.top, left: c.left }}
          animate={{
            x: ["0%", "40%", "-30%"],
            y: ["0%", "30%", "-20%"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: c.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BlurryAnimation;
