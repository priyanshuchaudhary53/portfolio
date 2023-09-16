import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <>
      {text.split(" ").map((word, index) => {
        return (
          <>
            <span
              key={index}
              className={
                className ? className + " inline-block" : "inline-block"
              }
            >
              {word.split("").map((letter, i) => {
                return (
                  <motion.span
                    key={letter + "-" + i}
                    variants={child}
                    className="inline-block"
                  >
                    {letter}
                  </motion.span>
                );
              })}
            </span>
            {"\u00A0"}
          </>
        );
      })}
    </>
  );
};

export default AnimatedText;
