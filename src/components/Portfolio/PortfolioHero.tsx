"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionWrapper from "@/components/Layout/SectionWrapper";
import { opacityVariants } from "@/components/Animation/Variants";
import Link from "next/link";
import ExternalLink from "../UI/ExternalLink";

const PortfolioHero = ({ portfolio }: { portfolio: any }) => {
  const technologies = portfolio.techstack;

  return (
    <SectionWrapper size="extended" className="lg:pt-14 xl:pt-20">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="flex flex-col xl:flex-row gap-y-6 justify-end relative items-center"
          variants={opacityVariants}
        >
          <div className="static xl:absolute xl:left-0 xl:top-24 xl:w-1/3">
            <h1 className="text-4xl text-center xl:text-start xl:text-7xl xl:leading-none md text-gray-800 font-bold uppercase xl:mix-blend-exclusion dark:text-white">
              {portfolio.title}
            </h1>
            <div className="flex flex-col items-center xl:items-start gap-1 mt-4 xl:mt-8">
              {technologies.map((technology: string, i: number) => (
                <div
                  key={i}
                  className="text-xl uppercase font-medium text-gray-500 dark:text-gray-400"
                >
                  {technology}
                </div>
              ))}
            </div>
            <div className="flex justify-center xl:justify-start mt-3 xl:mt-6">
              <ExternalLink name="visit website" link={portfolio.url} />
            </div>
          </div>
          <div className="rounded-3xl w-full max-w-full xl:max-w-[70%] aspect-[4/3] xl:aspect-auto xl:h-[45rem] overflow-clip border-2 bg-gray-200 dark:bg-gray-800 border-gray-200 dark:border-gray-800">
            <Image
              src={`/images/portfolio/${portfolio.slug}/home.jpg`}
              className="object-cover w-full h-full object-left-top"
              alt={portfolio.title}
              width={1920}
              height={1080}
            />
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default PortfolioHero;
