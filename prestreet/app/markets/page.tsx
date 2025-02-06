"use client";

import { useState } from "react";
import { TrendingUp, ChartLine as ChartLineUp, ChartBar, ArrowUpDown, DollarSign, Bitcoin, Building, Wallet } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryHeader } from "@/components/category-header";

const marketsTags = [
  { name: "Money World", color: "#58CC02" },
  { name: "Piggy Bank", color: "#CE82FF" },
  { name: "Shopping", color: "#FF9600" },
  { name: "Big News", color: "#FF4B4B" },
  { name: "House", color: "#1CB0F6" },
  { name: "Ups & Downs", color: "#58CC02" },
  { name: "Magic Coins", color: "#CE82FF" },
  { name: "Money Swap", color: "#FF9600" },
];

const articles = [
  {
    id: 4,
    title: "What Makes Stock Prices Go Up and Down?",
    summary: "Learn how the stock market works and why prices change every day. It's like a giant store where people buy and sell pieces of companies!",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
    category: "Markets",
    tag: "Ups & Downs",
    originalSource: "PreStreet Kids",
    readingTime: "5 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 5,
    title: "Why Do People Love Bitcoin?",
    summary: "Discover the exciting world of digital money and why some people think it's the future of how we'll buy things!",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    category: "Markets",
    tag: "Magic Coins",
    originalSource: "PreStreet Kids",
    readingTime: "4 min read",
    difficulty: "Medium" as const,
  },
  {
    id: 6,
    title: "How Houses Become More Valuable",
    summary: "Find out why houses can cost more or less over time and what makes a house special in different neighborhoods.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    category: "Markets",
    tag: "House",
    originalSource: "PreStreet Kids",
    readingTime: "6 min read",
    difficulty: "Easy" as const,
  },
];

export default function MarketsPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles = selectedTag === "all"
    ? articles
    : articles.filter(article => article.tag === selectedTag);

  return (
    <main className="min-h-screen">
      <CategoryHeader
        title="Money & Markets"
        description="Learn how money moves around the world! 📈"
        icon={<TrendingUp className="w-12 h-12 text-[#1CB0F6]" />}
        tags={marketsTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}