import "./globals.css";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/animated-background";
import { Analytics } from "@vercel/analytics/react";

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PreStreet - Business News for Kids",
  description:
    "Making business and finance news fun and easy to understand for young minds",
  keywords: [
    "kids finance",
    "business for children",
    "money education",
    "financial literacy",
    "kids business news",
    "learn about money",
    "kids investing",
    "financial education",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-[#FFF5F0]`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <Navigation />
        <AnimatedBackground />
        <Analytics />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
