import { ReactNode } from "react";
import { motion } from "framer-motion";

const AnimatedTextWrapper = ({ children }: { children: ReactNode }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.025, delayChildren: 0.04 * i },
    }),
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default AnimatedTextWrapper;
