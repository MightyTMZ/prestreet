"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MascotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  expression?: "happy" | "thinking" | "excited";
}

export function Mascot({ className, size = "md", expression = "happy" }: MascotProps) {
  const sizes = {
    sm: "h-16",
    md: "h-24",
    lg: "h-32"
  };

  const expressions = {
    happy: {
      eyes: "M 15,20 Q 17,23 19,20",
      mouth: "M 13,25 Q 17,28 21,25"
    },
    thinking: {
      eyes: "M 15,20 Q 17,23 19,20",
      mouth: "M 13,25 Q 17,24 21,25"
    },
    excited: {
      eyes: "M 15,18 Q 17,21 19,18",
      mouth: "M 13,24 Q 17,30 21,24"
    }
  };

  return (
    <motion.div
      className={cn("relative", sizes[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        {/* Body */}
        <circle cx="20" cy="20" r="18" fill="#58CC02" />
        <circle cx="20" cy="20" r="15" fill="#76DE43" />

        {/* Face */}
        <motion.path
          d={expressions[expression].eyes}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.path
          d={expressions[expression].mouth}
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Graduation cap */}
        <path
          d="M12 15l8-4 8 4-8 4z"
          fill="#1CB0F6"
        />
        <path
          d="M16 17v4l4 2 4-2v-4"
          stroke="#1CB0F6"
          strokeWidth="2"
        />
      </svg>
    </motion.div>
  );
}