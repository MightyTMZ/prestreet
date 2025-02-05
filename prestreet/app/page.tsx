"use client";

import { Card } from "@/components/ui/card";
import { Newspaper, TrendingUp, Globe2 } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Why Everyone's Talking About AI",
    originalSource: "Wall Street Journal",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    summary: "Artificial Intelligence is like a super-smart computer helper that can do amazing things. Companies are using it to create new tools and games!"
  },
  {
    id: 2,
    title: "How Electric Cars Are Changing the World",
    originalSource: "Bloomberg",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    summary: "More people are buying cars that run on electricity instead of gas. This helps keep our air clean and saves money!"
  },
  {
    id: 3,
    title: "Space Company Makes History",
    originalSource: "Business Insider",
    category: "Science",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",
    summary: "A new rocket company just sent their biggest spacecraft to space! This could mean more exciting space adventures in the future."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            KidsFinanceNews
          </h1>
          <p className="text-xl text-gray-600">
            Big news made simple for young minds! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Newspaper className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Easy to Read</h3>
            <p className="text-gray-600">Complex news explained simply</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <h3 className="text-lg font-semibold mb-2">Learn Finance</h3>
            <p className="text-gray-600">Understand money and business</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Globe2 className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">World News</h3>
            <p className="text-gray-600">Stay updated on global events</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link href={`/article/${article.id}`} key={article.id}>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {article.originalSource}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{article.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.summary}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}