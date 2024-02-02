"use client";

import { motion } from "framer-motion";
import { Testimonials as TestimonialsData } from "@/data/testimonial";
import Testimonial from "./Testimonial";

const variants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const Testimonials = () => {
  return (
    <>
      <motion.div
        className="w-full xl:w-[600px] flex flex-col gap-12"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={variants}
      >
        {TestimonialsData.map((testimonial: Testimonial, index: number) => {
          return <Testimonial testimonial={testimonial} key={index} />;
        })}
      </motion.div>
    </>
  );
};

export default Testimonials;
