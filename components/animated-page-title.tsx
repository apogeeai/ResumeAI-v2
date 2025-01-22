"use client";

import { motion } from "framer-motion";

interface AnimatedPageTitleProps {
  text: string;
  gradientText?: string;
  className?: string;
  delay?: number;
}

export function AnimatedPageTitle({ text, gradientText, className = "", delay = 0 }: AnimatedPageTitleProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={child} className="inline-block">
        {text}{" "}
      </motion.span>
      {gradientText && (
        <motion.span 
          variants={child} 
          className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
        >
          {gradientText}
        </motion.span>
      )}
    </motion.div>
  );
} 