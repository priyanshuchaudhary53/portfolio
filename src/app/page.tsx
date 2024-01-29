"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import portrait from "../../public/images/portrait.jpg";
import eternitech from "../../public/images/eternitech.png";
import weanim8 from "../../public/images/weanim8.png";
import leadsSupport from "../../public/images/leads-support.png";
import anyonlinetool from "../../public/images/anyonlinetool.png";
import { FiCamera } from "react-icons/fi";
import { GoArrowUpRight, GoArrowRight } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import AnimatedTextWrapper from "@/components/AnimatedText/AnimatedTextWrapper";
import Link from "next/link";
import PortfolioGridItem from "@/components/PortfolioGridItem";
import { useState } from "react";

const opacityVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 100,
    transition: {
      duration: 0.7,
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

const portfolioItems = [
  {
    id: "p1",
    title: "Eternitech",
    description: "WordPress website for a tech startup.",
    image: eternitech,
    imageAlt: "Eternitech Website Screenshot",
    imageWidth: "w-[90%] sm:w-[75%]",
    slug: "eternitech",
  },
  {
    id: "p2",
    title: "WeAnim8",
    description: "WordPress website for an animation studio.",
    image: weanim8,
    imageAlt: "WeAnim8 Website Screenshot",
    imageWidth: "w-[75%] sm:w-[63%]",
    slug: "weanim8",
  },
  {
    id: "p3",
    title: "Leads Support",
    description: "Laravel website for CRM and lead management.",
    image: leadsSupport,
    imageAlt: "Leads Support Website Screenshot",
    imageWidth: "w-[85%] sm:w-[70%]",
    slug: "leads-support",
  },
  {
    id: "p4",
    title: "AnyOnlineTool",
    description: "Laravel website for online tools.",
    image: anyonlinetool,
    imageAlt: "AnyOnlineTool Website Screenshot",
    imageWidth: "w-[82%] sm:w-[67%]",
    slug: "anyonlinetool",
  },
];

export default function Home() {
  const mainText1 = "I'm a developer with a passion for crafting";
  const mainText2 = "exceptional digital experiences";

  const subHeading =
    "I'm Priyanshu, a Web Developer based in Lucknow, and I'm dedicated to crafting digital experiences that are user-friendly, delightful, and highly effective.";

  return (
    <>
      <section className="py-14 lg:py-20 lg:pt-10">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
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
                <a
                  className="uppercase flex gap-3 items-center font-medium transition-opacity ease-out duration-300 text-gray-800 dark:text-white hover:opacity-60"
                  href="https://twitter.com/priyanshuch53"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  twitter <GoArrowUpRight className=" text-2xl" />
                </a>
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
                <a
                  className="uppercase flex gap-3 items-center font-medium transition-opacity ease-out duration-300 text-gray-800 dark:text-white hover:opacity-60"
                  href="https://www.linkedin.com/in/priyanshuchaudhary53/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin <GoArrowUpRight className=" text-2xl" />
                </a>
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
                <a
                  className="uppercase flex gap-3 items-center font-medium transition-opacity ease-out duration-300 text-gray-800 dark:text-white hover:opacity-60"
                  href="https://github.com/priyanshuchaudhary53"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github <GoArrowUpRight className=" text-2xl" />
                </a>
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
        </div>
      </section>
      <section className="py-14 lg:py-20">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
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
                I&apos;m Priyanshu Chaudhary, a textile graduate who discovered
                a deep-rooted passion for coding. My journey as a freelance
                developer began in late 2019, but it was the unexpected twists
                of 2020 that truly ignited my commitment. Despite the
                challenges, I embraced the lockdown period to immerse myself in
                coding, emerging with newfound skills and a relentless drive to
                craft exceptional digital experiences. Let&apos;s connect and
                explore the limitless possibilities together.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-12 lg:py-20">
        <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h2
              className="text-5xl font-semibold tracking-tight text-gray-800 dark:text-white mb-16 md:mb-20 md:text-7xl"
              variants={headingVariants}
            >
              A small selection of{" "}
              <span className="text-gray-400">my work.</span>
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
        </div>
      </section>
    </>
  );
}
