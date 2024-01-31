"use client";

import { motion } from "framer-motion";

import SectionWrapper from "@/components/Layout/SectionWrapper";
import PortfolioGridItem from "./PortfolioGridItem";
import {
  opacityVariants,
  headingVariants,
} from "@/components/Animation/Variants";
import { PortfolioItem } from "@/data/portfolio";

const PortfolioProjects = ({
  portfolioItems,
  title
}: {
  portfolioItems: PortfolioItem[];
  title: string;
}) => {
  return (
    <SectionWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.h2
          className="text-5xl font-semibold tracking-tight text-gray-800 dark:text-white mb-16 md:mb-20 md:text-7xl"
          variants={headingVariants}
        >
          {title}
        </motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {portfolioItems.map((item) => (
          <PortfolioGridItem
            id={item.id}
            key={item.title}
            title={item.title}
            description={item.description}
            image={item.image}
            imageAlt={item.imageAlt}
            imageWidth={item.imageWidth}
            animationVariant={opacityVariants}
            slug={item.slug}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioProjects;
