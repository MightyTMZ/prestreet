"use client";

import { motion } from "framer-motion";
import { Building2, Cpu, TrendingUp } from "lucide-react";

export function AnimatedBackground() {
  return (
    <>
      {/* Fun background patterns */}
      <div className="fixed inset-0 bg-pattern-dots opacity-30 pointer-events-none" />
      <div className="fixed inset-0 bg-pattern-circles opacity-40 pointer-events-none" />
      <div className="fixed inset-0 bg-pattern-waves opacity-30 pointer-events-none" />

      {/* Floating decorative elements */}
      <motion.div 
        className="fixed right-[10%] top-[20%] w-16 h-16 text-[#58CC02] opacity-20 pointer-events-none animate-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Building2 className="w-full h-full" />
      </motion.div>
      <motion.div 
        className="fixed left-[15%] top-[40%] w-16 h-16 text-[#CE82FF] opacity-20 pointer-events-none animate-float-delayed"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Cpu className="w-full h-full" />
      </motion.div>
      <motion.div 
        className="fixed right-[20%] top-[60%] w-16 h-16 text-[#FF9600] opacity-20 pointer-events-none animate-float"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <TrendingUp className="w-full h-full" />
      </motion.div>
    </>
  );
}