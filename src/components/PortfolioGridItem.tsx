import { motion, Variants } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

const variants = {
  offscreen: { opacity: 0, y: 0 },
  onscreen: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
};

const PortfolioGridItem = ({
  id,
  title,
  description,
  image,
  imageAlt,
  imageWidth,
  onClick,
  animationVariant,
}: {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
  imageWidth: string;
  onClick: MouseEventHandler;
  animationVariant: Variants;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-4 md:gap-6"
      initial="offscreen"
      whileInView="onscreen"
      variants={variants}
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="cursor-pointer bg-neutral-200 dark:bg-neutral-800 rounded-3xl aspect-[16/11] sm:aspect-video relative group" onClick={onClick} layoutId={id}>
        <motion.div
          className={`absolute bottom-3 left-1/2 -translate-x-1/2 ${imageWidth}`}
          variants={animationVariant}
        >
          <Image
            className="drop-shadow-xl w-full scale-105 md:scale-100 md:grayscale transition-all duration-700 ease-out md:group-hover:grayscale-0 origin-bottom md:group-hover:scale-[1.025]"
            src={image}
            alt={imageAlt}
          />
        </motion.div>
      </motion.div>
      <div>
        <motion.h3
          className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-white md:text-3xl mb-1"
          variants={animationVariant}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-600 text-lg dark:text-white"
          variants={animationVariant}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PortfolioGridItem;
