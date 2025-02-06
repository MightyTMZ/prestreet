import './globals.css';
import type { Metadata } from 'next';
import { Fredoka } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { AnimatedBackground } from '@/components/animated-background';

const fredoka = Fredoka({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PreStreet - Business News for Kids',
  description: 'Making business and finance news fun and easy to understand for young minds',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fredoka.className} bg-[#FFF5F0]`}>
        <Navigation />
        <AnimatedBackground />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}