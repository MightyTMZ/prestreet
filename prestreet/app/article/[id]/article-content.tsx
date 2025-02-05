"use client";

import { ArrowLeft, BookOpen } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Article = {
  title: string;
  originalSource: string;
  category: string;
  image: string;
  summary: string;
  content: string;
};

export default function ArticleContent({ article }: { article: Article | undefined }) {
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back home
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to articles
          </Button>
        </Link>

        <Card className="overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-blue-600">
                {article.category}
              </span>
              <div className="flex items-center text-gray-500">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm">Originally from {article.originalSource}</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
            
            <div className="prose prose-blue max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.trim().endsWith(':')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph}
                    </h3>
                  );
                }
                if (paragraph.trim().startsWith('•')) {
                  return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                      {paragraph.split('\n').map((item, i) => (
                        <li key={i} className="mb-2">
                          {item.replace('•', '').trim()}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}