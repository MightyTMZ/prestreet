"use client";

import { useState } from "react";
import { Building2, PiggyBank, ShoppingBag, Newspaper, Home, TrendingUp, Coins, DollarSign } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryHeader } from "@/components/category-header";

const businessTags = [
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
    id: 1,
    title: "Why Do Prices Go Up and Down?",
    summary: "Learn about how prices change and why some things cost more or less at different times.",
    image: "https://images.unsplash.com/photo-1554260570-e9689a3418b8",
    category: "Business",
    tag: "Money World",
    originalSource: "PreStreet Kids",
    readingTime: "5 min read",
    difficulty: "Easy" as const,
  },
  // Add more articles...
];

export default function BusinessPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles = selectedTag === "all"
    ? articles
    : articles.filter(article => article.tag === selectedTag);

  return (
    <main className="min-h-screen bg-[#FFF5F0]">
      <CategoryHeader
        title="Business News"
        description="Learn how companies work and make money! 💼"
        icon={<Building2 className="w-12 h-12 text-[#1CB0F6]" />}
        tags={businessTags}
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