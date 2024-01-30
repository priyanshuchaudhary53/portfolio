"use client";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/Layout/SectionWrapper";
import { opacityVariants } from "@/components/Animation/Variants";

const PortfolioAbout = ({description}: {description: string}) => {
  return (
    <SectionWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="" variants={opacityVariants}>
          <div className="text-base text-gray-600 dark:text-gray-300 mb-1">About the project</div>
          <div className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">{description}</div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default PortfolioAbout;
