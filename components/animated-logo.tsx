"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
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
      className={`${className} flex items-center justify-center gap-2`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={child} className="inline-flex">
        <FileText className="w-8 h-8 text-primary" />
      </motion.div>
      <motion.span variants={child} className="inline-block">
        Resume
      </motion.span>
      <motion.span 
        variants={child} 
        className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
      >
        AI
      </motion.span>
    </motion.div>
  );
} 