"use client";

import { useState } from "react";
import { Cpu, FlaskRound as Flask, Car, Lightbulb } from "lucide-react";
import { ArticleCard } from "@/components/article-card";
import { CategoryHeader } from "@/components/category-header";

const techTags = [
  { name: "Cool Science", color: "#58CC02" },
  { name: "Robot Brain", color: "#CE82FF" },
  { name: "Fast Wheels", color: "#FF9600" },
  { name: "New Cool Stuff", color: "#FF4B4B" },
];

const articles = [
  {
    id: 1,
    title: "Meet the Robots That Can Think!",
    summary: "Discover how AI robots are learning to do amazing things and help people.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    category: "Tech",
    tag: "Robot Brain",
    originalSource: "PreStreet Kids",
    readingTime: "4 min read",
    difficulty: "Easy" as const,
  },
  // Add more articles...
];

export default function TechPage() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filteredArticles = selectedTag === "all"
    ? articles
    : articles.filter(article => article.tag === selectedTag);

  return (
    <main className="min-h-screen bg-[#FFF5F0]">
      <CategoryHeader
        title="Tech World"
        description="Explore amazing new inventions and discoveries! 🤖"
        icon={<Cpu className="w-12 h-12 text-[#1CB0F6]" />}
        tags={techTags}
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