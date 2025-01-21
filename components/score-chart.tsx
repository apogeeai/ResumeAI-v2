"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface ScoreChartProps {
  score: number;
}

export function ScoreChart({ score }: ScoreChartProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const circumference = 2 * Math.PI * 90; // radius = 90
  const offset = circumference - (score / 100) * circumference;

  const chartVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: score / 100,
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeOut",
      }
    }
  };

  const scoreVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "var(--chart-1)";
    if (score >= 60) return "var(--chart-2)";
    return "var(--chart-3)";
  };

  return (
    <div className="relative w-64 h-64">
      {/* Background circle */}
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="128"
          cy="128"
          r="90"
          fill="none"
          stroke={isDark ? "hsl(var(--muted))" : "hsl(var(--accent))"}
          strokeWidth="12"
        />
        {/* Animated score circle */}
        <motion.circle
          cx="128"
          cy="128"
          r="90"
          fill="none"
          stroke={getScoreColor(score)}
          strokeWidth="12"
          strokeLinecap="round"
          variants={chartVariants}
          initial="hidden"
          animate="visible"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      {/* Score text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        variants={scoreVariants}
        initial="hidden"
        animate="visible"
      >
        <span className="text-5xl font-bold">{score}</span>
        <span className="text-sm text-muted-foreground">ATS Score</span>
      </motion.div>
    </div>
  );
}