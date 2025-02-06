"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={cn("flex items-center", className)}>
      <motion.div
        className={cn(
          "relative flex items-center justify-center bg-[#1CB0F6] rounded-2xl p-3",
          sizes[size]
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* P letter stylized as a coin/dollar symbol */}
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full"
        >
          <path
            d="M18 3C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z"
            fill="#FFD43B"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M13 11h7.5c2.485 0 4.5 2.015 4.5 4.5S22.985 20 20.5 20H13v-9zm0 9v5"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      
      {showText && (
        <motion.span 
          className="ml-3 font-bold text-[#1CB0F6]"
          style={{ fontSize: size === "sm" ? "1.5rem" : size === "md" ? "2rem" : "2.5rem" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          PreStreet
        </motion.span>
      )}
    </div>
  );
}