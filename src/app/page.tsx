"use client";

import { motion } from "framer-motion";

import AnimatedText from "@/components/AnimatedText/AnimatedText";
import AnimatedTextWrapper from "@/components/AnimatedText/AnimatedTextWrapper";

export default function Home() {
  const mainText1 = "I'm a developer with a passion for crafting";
  const mainText2 = "exceptional digital experiences";

  const subHeading =
    "I'm Priyanshu, a Web Developer based in Lucknow, and I'm dedicated to crafting digital experiences that are user-friendly, delightful, and highly effective.";

  return (
    <section className="py-[40px] lg:py-[72px]">
      <div className="px-[20px] max-w-[1440px] mx-auto md:px-[40px] lg:px-[72px]">
        <h1 className="text-6xl font-bold text-center tracking-tight text-gray-800 dark:text-white mb-[40px] md:text-left md:text-[6rem]">
          <AnimatedTextWrapper>
            <AnimatedText text={mainText1} />
            <AnimatedText text={mainText2} className="text-gray-400" />
          </AnimatedTextWrapper>
        </h1>
        <div className="flex items-baseline gap-x-8">
          <div className="flex-grow hidden md:block">
            <motion.div
              className="border-t border-gray-400"
              initial={{ width: "0" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.5, delay: 1.8 }}
            ></motion.div>
          </div>
          <motion.div
            className="w-full text-center text-[22px] md:w-2/3 md:text-left dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 2.3,
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
  );
}
