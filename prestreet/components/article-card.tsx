"use client";

import { Article } from "@/types/article";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Star, Clock } from "lucide-react";

export function ArticleCard({ article }: { article: Article }) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-[#58CC02] text-white';
      case 'Medium':
        return 'bg-[#FF9600] text-white';
      case 'Hard':
        return 'bg-[#FF4B4B] text-white';
      default:
        return 'bg-[#58CC02] text-white';
    }
  };

  return (
    <Link href={`/article/${article.id}`}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full rounded-3xl border-2 border-[#E5E5E5] hover:border-[#1CB0F6]">
        <div className="relative">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-48 rounded-t-3xl"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${getDifficultyColor(article.difficulty)}`}>
              {article.difficulty}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-[#1CB0F6] bg-[#DDF4FF] px-4 py-1 rounded-full">
              {article.tag}
            </span>
            <div className="flex items-center text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span className="text-sm">{article.readingTime}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
          <p className="text-gray-600 text-lg line-clamp-3">
            {article.summary}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {article.originalSource}
          </div>
        </div>
      </Card>
    </Link>
  );
}