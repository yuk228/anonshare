import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/ui/theme-toggle";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignOut from "./signout";

export default async function Header() {
  const session = await auth();
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-muted-foreground/20">
      <div className="container mx-auto px-4 h-15 flex items-center justify-between">
        <Link href="/" className="block font-bold text-xl">
          AnonShare
        </Link>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={session?.user?.image || ""} />
            <AvatarFallback>{session?.user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <ModeToggle />
          {session && <SignOut />}
        </div>
      </div>
    </header>
  );
}
