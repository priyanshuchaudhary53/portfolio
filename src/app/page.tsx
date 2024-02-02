"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portrait from "../../public/images/portrait.jpg";
import { FiCamera } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";

import AnimatedText from "@/components/Animation/AnimatedText";
import AnimatedTextWrapper from "@/components/Animation/AnimatedTextWrapper";
import PortfolioGridItem from "@/components/Portfolio/PortfolioGridItem";
import SectionWrapper from "@/components/Layout/SectionWrapper";
import {
  opacityVariants,
  headingVariants,
} from "@/components/Animation/Variants";
import { portfolioItems } from "@/data/portfolio";
import PortfolioProjects from "@/components/Portfolio/PortfolioProjects";
import ExternalLink from "@/components/UI/ExternalLink";
import Testimonials from "@/components/Testimonial/Testimonials";

export default function Home() {
  const mainText1 = "I'm a developer with a passion for crafting";
  const mainText2 = "exceptional digital experiences";

  const subHeading =
    "I'm Priyanshu, a Web Developer based in Lucknow, and I'm dedicated to crafting digital experiences that are user-friendly, delightful, and highly effective.";

  return (
    <>
      <SectionWrapper className="lg:pt-10">
        <h1 className="text-6xl font-bold text-center tracking-tight text-gray-800 dark:text-white mb-[40px] md:text-left md:text-[6rem]">
          <AnimatedTextWrapper>
            <AnimatedText text={mainText1} />{" "}
            <AnimatedText text={mainText2} className="text-gray-400" />
          </AnimatedTextWrapper>
        </h1>
        <div className="flex items-baseline gap-x-8 mb-10 md:mb-14">
          <div className="flex-grow hidden md:block">
            <motion.div
              className="border-t border-gray-400"
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.4, delay: 1 }}
            ></motion.div>
          </div>
          <motion.div
            className="w-full text-center text-[22px] md:w-2/3 md:text-left text-gray-600 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 1.4,
              type: "tween",
              damping: 12,
              stiffness: 100,
            }}
          >
            {subHeading}
          </motion.div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-end justify-between">
          <motion.div
            className="flex gap-4 justify-center flex-wrap md:flex-nowrap md:justify-start md:gap-10"
            initial="start"
            animate="end"
          >
            <motion.div
              variants={{
                start: { opacity: 0, y: 10 },
                end: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 1.7 },
                },
              }}
            >
              <ExternalLink
                name="twitter"
                link="https://twitter.com/priyanshuch53"
              />
            </motion.div>
            <motion.div
              variants={{
                start: { opacity: 0, y: 10 },
                end: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 1.9 },
                },
              }}
            >
              <ExternalLink
                name="linkedin"
                link="https://www.linkedin.com/in/priyanshuchaudhary53/"
              />
            </motion.div>
            <motion.div
              variants={{
                start: { opacity: 0, y: 10 },
                end: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.3, delay: 2.1 },
                },
              }}
            >
              <ExternalLink
                name="github"
                link="https://github.com/priyanshuchaudhary53"
              />
            </motion.div>
          </motion.div>
          <motion.div initial="start" animate="end">
            <motion.a
              href="skype:live:404abf3624852a8f?chat"
              className="flex items-center gap-3 text-xl leading-none font-medium py-4 px-8 rounded-full text-white bg-gray-800 dark:bg-white dark:text-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                start: { opacity: 0 },
                end: {
                  opacity: 1,
                  transition: { duration: 0.3, delay: 2.3 },
                },
              }}
            >
              Let&apos;s Talk <GoArrowRight className=" text-3xl" />
            </motion.a>
          </motion.div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <motion.div
          className="flex flex-col md:flex-row gap-8 md:gap-14 items-start"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full md:w-6/12 lg:w-5/12">
            <motion.div
              className="rounded-2xl overflow-hidden relative group"
              variants={opacityVariants}
            >
              <Image
                className="brightness-110 transition-all duration-500 ease-out md:group-hover:scale-[1.025]"
                src={portrait}
                alt="Picture of the author"
              />
              <div className="absolute right-0 top-0 bottom-0 left-auto bg-gray-400 w-[25%] mix-blend-multiply"></div>
              <div className="absolute bottom-3 left-3 text-md font-light text-white flex items-center gap-2 bg-black/60 rounded-lg px-2 py-1">
                <FiCamera />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/9sYQnkGJ1BuKWdBu5"
                >
                  Nainital, Uttarakhand
                </a>
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
              I&apos;m Priyanshu Chaudhary, a textile graduate who discovered a
              deep-rooted passion for coding. My journey as a freelance
              developer began in late 2019, but it was the unexpected twists of
              2020 that truly ignited my commitment. Despite the challenges, I
              embraced the lockdown period to immerse myself in coding, emerging
              with newfound skills and a relentless drive to craft exceptional
              digital experiences. Let&apos;s connect and explore the limitless
              possibilities together.
            </motion.p>
          </div>
        </motion.div>
      </SectionWrapper>

      <PortfolioProjects
        title="A small selection of my work."
        portfolioItems={portfolioItems}
      />

      <SectionWrapper>
        <div className="flex flex-col xl:flex-row gap-y-8 gap-x-20">
          <motion.div
            className="flex-1"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="text-4xl text-center md:text-start font-semibold tracking-tight text-gray-800 dark:text-white mb-[20px] md:text-6xl"
              variants={headingVariants}
            >
              Hear firsthand accounts and praise from clients
            </motion.h2>
          </motion.div>
          <div>
            <Testimonials />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
