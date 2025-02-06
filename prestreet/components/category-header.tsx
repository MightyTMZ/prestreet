"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CategoryHeaderProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: { name: string; color: string }[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

export function CategoryHeader({
  title,
  description,
  icon,
  tags,
  selectedTag,
  onTagSelect,
}: CategoryHeaderProps) {
  return (
    <div className="bg-[#1CB0F6] py-12 mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-lg">
            {icon}
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white text-center mb-4">{title}</h1>
        <p className="text-xl text-white text-center mb-8">{description}</p>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onTagSelect("all")}
            className={cn(
              "px-4 py-2 rounded-full font-bold transition-all",
              selectedTag === "all"
                ? "bg-white text-[#1CB0F6]"
                : "bg-[#DDF4FF] text-[#1CB0F6] hover:bg-white"
            )}
          >
            All Topics
          </button>
          {tags.map((tag) => (
            <button
              key={tag.name}
              onClick={() => onTagSelect(tag.name)}
              className={cn(
                "px-4 py-2 rounded-full font-bold transition-all",
                selectedTag === tag.name
                  ? "bg-white text-[#1CB0F6]"
                  : "bg-[#DDF4FF] text-[#1CB0F6] hover:bg-white"
              )}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}