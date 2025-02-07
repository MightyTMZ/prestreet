"use client";

import { useState } from "react";
import { Wallet, PiggyBank, GiftIcon, CreditCard } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryHeader } from "@/components/category-header";

const moneyTags = [
  { name: "Saving & Spending", color: "#58CC02" },
  { name: "Earning & Gifts", color: "#CE82FF" },
  { name: "Cards and Coins", color: "#FF9600" },
];

const articles = [
  {
    id: 7,
    title: "Smart Ways to Save Your Money",
    summary: "Learn fun tricks to save your money and watch it grow! From piggy banks to special accounts, discover how to make your money last longer.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e",
    category: "Money",
    tag: "Saving & Spending",
    originalSource: "PreStreet Kids",
    readingTime: "4 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 8,
    title: "Fun Ways to Earn Money as a Kid",
    summary: "Discover creative ways to earn money while having fun! From lemonade stands to helping neighbors, there are lots of ways to make your own money.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    category: "Money",
    tag: "Earning & Gifts",
    originalSource: "PreStreet Kids",
    readingTime: "5 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 9,
    title: "All About Bank Cards and Money",
    summary: "Learn how bank cards work and why they're different from cash. Discover the magic of digital money and how to use it safely!",
    image: "https://images.unsplash.com/photo-1559589689-577aabd1db4f",
    category: "Money",
    tag: "Cards and Coins",
    originalSource: "PreStreet Kids",
    readingTime: "6 min read",
    difficulty: "Medium" as const,
  },
];

export default function MoneyPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles = selectedTag === "all"
    ? articles
    : articles.filter(article => article.tag === selectedTag);

  return (
    <main className="min-h-screen">
      <CategoryHeader
        title="Money Basics"
        description="Learn smart ways to handle your money! 💰"
        icon={<Wallet className="w-12 h-12 text-[#1CB0F6]" />}
        tags={moneyTags}
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