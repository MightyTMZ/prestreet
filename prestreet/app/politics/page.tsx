"use client";

import { useState } from "react";
import { Vote, BookOpen, Scale, GraduationCap } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryHeader } from "@/components/category-header";

const politicsTags = [
  { name: "Rules and Laws", color: "#58CC02" },
  { name: "School and Learning", color: "#CE82FF" },
];

const articles = [
  {
    id: 10,
    title: "How Do Laws Help Keep Us Safe?",
    summary:
      "Learn about important rules that help everyone live together happily and safely. Discover how laws are like the rules in your favorite games!",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Politics",
    tag: "Rules and Laws",
    originalSource: "PreStreet Kids",
    readingTime: "4 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 11,
    title: "Why Do We Have School Rules?",
    summary:
      "Find out why schools have special rules and how they help everyone learn better together. Just like traffic lights help cars move safely!",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    category: "Politics",
    tag: "School and Learning",
    originalSource: "PreStreet Kids",
    readingTime: "5 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 12,
    title: "Meet Your Local Leaders",
    summary:
      "Learn about the people who help make rules for your town and how they work to make your neighborhood a better place to live.",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1",
    category: "Politics",
    tag: "Rules and Laws",
    originalSource: "PreStreet Kids",
    readingTime: "6 min read",
    difficulty: "Easy" as const,
  },
  {
    id: 13,
    title: "How Schools Help Everyone Learn",
    summary:
      "Discover why education is important and how schools make sure everyone gets a chance to learn cool new things every day!",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    category: "Politics",
    tag: "School and Learning",
    originalSource: "PreStreet Kids",
    readingTime: "4 min read",
    difficulty: "Easy" as const,
  },
];

export default function PoliticsPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles =
    selectedTag === "all"
      ? articles
      : articles.filter((article) => article.tag === selectedTag);

  return (
    <main className="min-h-screen">
      <CategoryHeader
        title="Rules & Learning"
        description="Discover how rules help us live and learn together! 📚"
        icon={<Vote className="w-12 h-12 text-[#1CB0F6]" />}
        tags={politicsTags}
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
