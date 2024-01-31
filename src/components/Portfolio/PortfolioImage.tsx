"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { opacityVariants } from "../Animation/Variants";

const scaleVariants: Variants = {
  offscreen: { scale: 1.25, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, type: "tween", damping: 12, stiffness: 100 },
  },
};

const PortfolioImage = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      className={` h-[19rem] sm:h-[28rem] md:h-[70vh] ${className} `}
    >
      <motion.div className="overflow-clip h-full w-full rounded-xl border-2 border-gray-200 dark:border-gray-800 shadow" variants={opacityVariants}>
        <motion.div className="h-full w-full" variants={scaleVariants}>
          <Image
            className="w-full h-full object-cover object-center"
            src={image}
            alt=""
            width="1920"
            height="1080"
            quality={95}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioImage;
