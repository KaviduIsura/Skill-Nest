"use client";

import { Navbar } from "@/components/landing-page/Navbar";
import { Hero } from "@/components/landing-page/Hero";
import { Stats } from "@/components/landing-page/Stats";
import { Courses } from "@/components/landing-page/Courses";
import { Categories } from "@/components/landing-page/Categories";
import { Growth } from "@/components/landing-page/Growth";
import { Testimonials } from "@/components/landing-page/Testimonials";
import { FAQ } from "@/components/landing-page/FAQ";
import { Footer } from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Categories />
        <Growth />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
