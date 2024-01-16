"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import portrait from "../../public/images/portrait.jpg";
import eternitech from "../../public/images/eternitech.png";
import weanim8 from "../../public/images/weanim8.png";
import { FiCamera } from "react-icons/fi";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import AnimatedTextWrapper from "@/components/AnimatedText/AnimatedTextWrapper";
import Link from "next/link";
import PortfolioGridItem from "@/components/PortfolioGridItem";

const opacityVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 100,
    transition: {
      duration: 1.0,
    },
  },
};

const headingVariants: Variants = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", damping: 12, stiffness: 100 },
  },
};

export default function Home() {
  const mainText1 = "I'm a developer with a passion for crafting";
  const mainText2 = "exceptional digital experiences";

  const subHeading =
    "I'm Priyanshu, a Web Developer based in Lucknow, and I'm dedicated to crafting digital experiences that are user-friendly, delightful, and highly effective.";

  return (
    <>
      <section className="py-[40px] lg:py-[72px]">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
          <h1 className="text-6xl font-bold text-center tracking-tight text-gray-800 dark:text-white mb-[40px] md:text-left md:text-[6rem]">
            <AnimatedTextWrapper>
              <AnimatedText text={mainText1} />{" "}
              <AnimatedText text={mainText2} className="text-gray-400" />
            </AnimatedTextWrapper>
          </h1>
          <div className="flex items-baseline gap-x-8">
            <div className="flex-grow hidden md:block">
              <motion.div
                className="border-t border-gray-400"
                initial={{ width: "0" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 1 }}
              ></motion.div>
            </div>
            <motion.div
              className="w-full text-center text-[22px] md:w-2/3 md:text-left text-gray-600 dark:text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 1.5,
                type: "tween",
                damping: 12,
                stiffness: 100,
              }}
            >
              {subHeading}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-[40px] lg:py-[72px]">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
          <motion.div
            className="flex flex-col md:flex-row gap-8 md:gap-14 items-start"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="w-full md:w-6/12 lg:w-5/12">
              <motion.div
                className="rounded-2xl overflow-hidden relative group"
                variants={opacityVariants}
              >
                <Image
                  className="grayscale brightness-110 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-[1.025]"
                  src={portrait}
                  alt="Picture of the author"
                />
                <div className="absolute right-0 top-0 bottom-0 left-auto bg-gray-400 w-32 mix-blend-multiply"></div>
                <div className="absolute bottom-3 left-3 text-md font-light text-white flex items-center gap-2 bg-black/60 rounded-lg px-2 py-1">
                  <FiCamera />
                  <Link href="#">Nainital, Uttarakhand</Link>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-6/12 lg:w-7/12">
              <motion.h2
                className="text-5xl font-semibold tracking-tight text-gray-800 dark:text-white mb-[20px] md:text-7xl"
                variants={headingVariants}
              >
                Who Am I?
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg dark:text-white"
                variants={opacityVariants}
              >
                I'm Priyanshu Chaudhary, a textile graduate who discovered a
                deep-rooted passion for coding. My journey as a freelance
                developer began in late 2019, but it was the unexpected twists
                of 2020 that truly ignited my commitment. Despite the
                challenges, I embraced the lockdown period to immerse myself in
                coding, emerging with newfound skills and a relentless drive to
                craft exceptional digital experiences. Let's connect and explore
                the limitless possibilities together.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-[40px] lg:py-[72px]">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2
              className="text-5xl font-semibold tracking-tight text-gray-800 dark:text-white mb-12 md:mb-20 md:text-7xl"
              variants={headingVariants}
            >
              A small selection of my work.
            </motion.h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <PortfolioGridItem
              title="Eternitech"
              description="WordPress website for a tech startup."
              image={eternitech}
              imageAlt="Eternitech Website Screenshot"
              imageWidth="w-3/4"
              link="#"
              animationVariant={opacityVariants}
            />
            <PortfolioGridItem
              title="WeAnim8"
              description="WordPress website for an animation studio."
              image={weanim8}
              imageAlt="WeAnim8 Website Screenshot"
              imageWidth="w-[60%]"
              link="#"
              animationVariant={opacityVariants}
            />
          </div>
        </div>
      </section>
    </>
  );
}
