"use client";

import { Card } from "@/components/ui/card";
import { Building2, Cpu, TrendingUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Mascot } from "@/components/mascot";
import { motion } from "framer-motion";

const featuredArticles = [
  {
    id: 1,
    title: "OpenAI at the Superbowl",
    originalSource: "Wall Street Journal",
    category: "Business",
    image: "/openai_super_bowl.avif",

    summary:
      "OpenAI, the company behind ChatGPT, is planning to air its first TV commercial during the Super Bowl this Sunday.",
    tag: "Big News",
    publishedAt: "2025-02-05",
    difficulty: "Medium" as const,
  },
  {
    id: 2,
    title: "Why Everyone's Talking About AI",
    originalSource: "Wall Street Journal",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    summary:
      "Artificial Intelligence is like a super-smart computer helper that can do amazing things. Companies are using it to create new tools and games!",
    publishedAt: "2025-01-05",
  },
  {
    id: 3,
    title: "How Electric Cars Are Changing the World",
    originalSource: "Bloomberg",
    category: "Business",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    summary:
      "More people are buying cars that run on electricity instead of gas. This helps keep our air clean and saves money!",
    publishedAt: "2025-01-19",
  },
  {
    id: 4,
    title: "Space Company Makes History",
    originalSource: "Business Insider",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7",
    summary:
      "A new rocket company just sent their biggest spacecraft to space! This could mean more exciting space adventures in the future.",
    publishedAt: "2024-12-01",
  },
];

const categories = [
  {
    name: "Business News",
    description: "Learn about companies and how they work",
    icon: Building2,
    color: "text-[#58CC02]", // Duolingo green
  },
  {
    name: "Tech World",
    description: "Discover cool new gadgets and inventions",
    icon: Cpu,
    color: "text-[#CE82FF]", // Duolingo purple
  },
  {
    name: "Money & Markets",
    description: "Understanding how money works",
    icon: TrendingUp,
    color: "text-[#FF9600]", // Duolingo orange
  },
];

function isNew(publishedAt: string): boolean {
  const publishDate = new Date(publishedAt);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - publishDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 7;
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden bg-[#1CB0F6] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white relative z-10">
            <motion.div
              className="flex items-center justify-center mb-8"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/*              <Logo size="lg" className="mr-4" />
               */}{" "}
              <Mascot size="lg" expression="excited" />
            </motion.div>
            <motion.p
              className="text-2xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Where Big Ideas Become Child's Play
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600')] opacity-10" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-3xl border-2 border-[#E5E5E5] hover:border-[#1CB0F6] bg-white/90 backdrop-blur-sm">
                  <div
                    className={cn(
                      "w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center",
                      "bg-white shadow-lg"
                    )}
                  >
                    <Icon className={cn("w-10 h-10", category.color)} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">
          Today's Fun Stories! 📚
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={`/article/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full rounded-3xl border-2 border-[#E5E5E5] hover:border-[#1CB0F6] bg-white/90 backdrop-blur-sm">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-48 rounded-t-3xl"
                    />
                    {isNew(article.publishedAt) && (
                      <div className="absolute top-4 left-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="bg-[#FF4B4B] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                          NEW! 🎉
                        </motion.div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-[#1CB0F6] bg-[#DDF4FF] px-4 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-sm text-gray-500">
                        {article.originalSource}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                    <p className="text-gray-600 text-lg line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
