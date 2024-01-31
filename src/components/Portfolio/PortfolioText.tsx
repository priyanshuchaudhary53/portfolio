"use client";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/Layout/SectionWrapper";
import {
  opacityVariants,
  headingVariants,
} from "@/components/Animation/Variants";

const PortfolioText = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <SectionWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="text-base text-gray-600 dark:text-gray-300 mb-1"
          variants={headingVariants}
        >
          {title}
        </motion.div>
        <motion.div
          className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-800 dark:text-white"
          variants={opacityVariants}
        >
          {description}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default PortfolioText;
