"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div>
              <Image src="/logo.png" alt="Logo" width={36} height={36} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Skill</span>
            <span className="text-2xl font-bold tracking-tight text-primary">Nest</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">

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
            <Button className="rounded-full bg-primary text-white hover:bg-foreground/90 px-6">Create Account</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
