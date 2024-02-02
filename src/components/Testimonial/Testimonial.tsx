"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { opacityVariants } from "../Animation/Variants";
import { Testimonial } from "@/data/testimonial";

const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      className="flex flex-col-reverse md:flex-col gap-8 md:gap-6 md:border-b md:pb-12 border-gray-200 dark:border-gray-700"
      variants={opacityVariants}
    >
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <Image
              src={testimonial.image.url}
              alt={testimonial.image.alt}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-center md:text-start text-xl font-semibold text-gray-800 dark:text-white">
              {testimonial.name}
            </h3>
            {testimonial.title && (
              <p className="text-center md:text-start text-lg font-normal text-gray-600 dark:text-gray-400">
                {testimonial.title}
              </p>
            )}
          </div>
        </div>
        {testimonial.company && (
          <div>
            <a
              href={testimonial.company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={150}
                height={50}
                src={testimonial.company.logo.url}
                alt={testimonial.company.logo.alt}
                className="h-7 w-auto grayscale"
              />
            </a>
          </div>
        )}
      </div>
      <p className="text-center md:text-start text-xl text-gray-800 dark:text-white">
        {testimonial.description}
      </p>
    </motion.div>
  );
};

export default Testimonial;
