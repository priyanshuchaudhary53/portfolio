import { Variants } from "framer-motion";

export const opacityVariants: Variants = {
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

export const headingVariants: Variants = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, type: "tween", damping: 12, stiffness: 100 },
  },
};
