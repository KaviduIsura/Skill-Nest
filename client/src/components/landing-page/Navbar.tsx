"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Layout, Search, Bell, User, LogOut } from "lucide-react";
import { Role } from "@/lib/dummy-data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface NavbarProps {
  userRole?: Role;
}

export function Navbar({ userRole }: NavbarProps) {
  return (
    <header className={`sticky top-0 z-50 w-full ${userRole ? 'bg-background border-b border-border' : 'bg-[#FFF9F5]/80 backdrop-blur-md border-b border-transparent'}`}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <Link href={userRole ? `/${userRole}` : "/"} className="flex items-center gap-2">
            <div>
              <Image src="/logo.png" alt="Logo" width={36} height={36} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Skill</span>
            <span className="text-2xl font-bold tracking-tight text-primary">Nest</span>
          </Link>
        </div>

        {/* Desktop Nav - Only show if NOT in dashboard mode */}
        {!userRole && (
          <nav className="hidden md:flex gap-8 items-center">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Course</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Blog</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>
        )}

        {/* Search Bar - Show in Dashboard */}
        {userRole && (
          <div className="hidden md:flex relative max-w-md w-full mx-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, users..."
              className="h-10 w-full rounded-full border border-border bg-background pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        )}

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {userRole ? (
            <>
              {/* Notifications */}
              <Button variant="ghost" size="icon" className="relative text-muted-foreground hover:text-primary">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
              </Button>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 border border-border">
                      <AvatarImage src="/avatars/user.png" alt="User" />
                      <AvatarFallback className="bg-primary/10 text-primary">
                        <User className="h-5 w-5" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Doe</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {userRole === 'admin' ? 'admin@test.com' : userRole === 'teacher' ? 'teacher@test.com' : 'student@test.com'}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Layout className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600 focus:text-red-600">
                    <Link href="/" className="flex items-center w-full">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            /* Login/Register Buttons */
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-base font-medium text-foreground hover:text-primary hover:bg-transparent">Sign in</Button>
              </Link>
              <Link href="/register">
                <Button className="rounded-full bg-primary text-white hover:bg-foreground/90 px-6">Create Account</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
