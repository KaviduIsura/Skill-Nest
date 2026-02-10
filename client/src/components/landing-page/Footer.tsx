"use client";

import Link from "next/link";
import { Layout, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#FFF9F5] pt-20 pb-10 border-t border-border/40">
      <div className="container mx-auto px-4">
        
        {/* Newsletter Section */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/20">
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-3xl font-bold">Join our community</h3>
                <p className="text-white/80">Subscribe to our newsletter to get latest updates and offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2 bg-white/10 p-2 rounded-full border border-white/20 backdrop-blur-sm">
                <div className="flex items-center pl-4 text-white/70">
                    <Mail className="w-5 h-5" />
                </div>
                <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-transparent border-none text-white placeholder:text-white/60 focus:ring-0 w-full md:w-64 outline-none"
                />
                <Button className="rounded-full bg-white text-primary hover:bg-white/90">Subscribe</Button>
            </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4 col-span-2 md:col-span-1">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg">
                       <Layout className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">Skill Nest</span>
                </Link>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    We are dedicated to providing the best learning experience for everyone, everywhere.
                </p>
                <div className="flex gap-4">
                    <Link href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors shadow-sm"><Facebook className="w-4 h-4" /></Link>
                    <Link href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors shadow-sm"><Twitter className="w-4 h-4" /></Link>
                    <Link href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors shadow-sm"><Instagram className="w-4 h-4" /></Link>
                    <Link href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors shadow-sm"><Linkedin className="w-4 h-4" /></Link>
                </div>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-foreground">Platform</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">Browse Courses</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Mentorship</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">For Business</Link></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-foreground">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold text-foreground">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
            </div>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border/40">
            <p>© {new Date().getFullYear()} Skill Nest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
