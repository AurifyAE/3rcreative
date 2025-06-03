import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCircle = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [firstAnimate, setFirstAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setFirstAnimate(true);
      setTimeout(() => setFirstAnimate(false), 1300); // reset for hover reuse
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-60 h-60 font-[productSans] font-bold rounded-full bg-[#F4A261] flex items-center justify-center text-white text-xl text-center cursor-pointer"
      animate={firstAnimate ? { scale: [1, 1.2, 1], x: [0, 10, 0] } : {}}
      whileHover={{ scale: [1, 1.2, 1], x: [0, 10, 0] }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      Creative Intelligence
    </motion.div>
  );
};

export default AnimatedCircle;
