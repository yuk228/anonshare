import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-muted-foreground/20">
      <div className="container mx-auto px-4 h-15 flex items-center justify-between">
        <Link href="/" className="block font-bold text-xl">
          AnonShare
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
