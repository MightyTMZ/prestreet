"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Building2, Cpu, TrendingUp, Vote, Wallet, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Logo } from "./logo";
import { Mascot } from "./mascot";

const navigation = [
  { name: "Business", href: "/business", icon: Building2 },
  { name: "Tech", href: "/tech", icon: Cpu },
  { name: "Markets", href: "/markets", icon: TrendingUp },
  { name: "Politics", href: "/politics", icon: Vote },
  { name: "Money", href: "/finance", icon: Wallet },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ item, isMobile = false }: { item: typeof navigation[0], isMobile?: boolean }) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;
    return (
      <Link
        key={item.name}
        href={item.href}
        onClick={() => isMobile && setIsOpen(false)}
        className={cn(
          "inline-flex items-center text-lg font-bold transition-all duration-300 hover:text-[#1CB0F6] px-4 py-2 rounded-xl",
          isActive
            ? "text-[#1CB0F6] bg-[#DDF4FF]"
            : "text-gray-700 hover:bg-[#DDF4FF]",
          isMobile && "w-full justify-start"
        )}
      >
        <Icon className="mr-2 h-5 w-5" />
        {item.name}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-[#E5E5E5] bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Logo size="sm" />
            <Mascot size="sm" expression="happy" className="hidden md:block" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="p-2 hover:bg-[#DDF4FF] rounded-xl transition-colors">
                <Menu className="h-6 w-6 text-[#1CB0F6]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <div className="flex flex-col space-y-2 p-6">
                <div className="flex items-center space-x-3 mb-8">
                  <Logo size="sm" />
                  <Mascot size="sm" expression="happy" />
                </div>
                {navigation.map((item) => (
                  <NavLink key={item.name} item={item} isMobile />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}