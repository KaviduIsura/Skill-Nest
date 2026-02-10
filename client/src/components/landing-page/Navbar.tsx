"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Layout, Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-lg">
                {/* Replaced Icon with text style from image if needed, but keeping icon for now */}
               <Layout className="h-6 w-6 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Skill Nest</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input 
                    type="text" 
                    placeholder="Want to learn?" 
                    className="h-10 w-64 rounded-full border border-border bg-white pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
            </div>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Course</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-base font-medium text-foreground hover:text-primary hover:bg-transparent">Sign in</Button>
          </Link>
          <Link href="/register">
            <Button className="rounded-full bg-foreground text-white hover:bg-foreground/90 px-6">Create Account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
