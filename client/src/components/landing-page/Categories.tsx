"use client";

import { Monitor, Palette, Code, Briefcase, Camera, Music, Database, PenTool } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Design", icon: Palette, color: "text-rose-500", bg: "bg-rose-50" },
  { name: "Development", icon: Code, color: "text-blue-500", bg: "bg-blue-50" },
  { name: "Marketing", icon: Briefcase, color: "text-purple-500", bg: "bg-purple-50" },
  { name: "Business", icon: Monitor, color: "text-green-500", bg: "bg-green-50" },
  { name: "Photography", icon: Camera, color: "text-orange-500", bg: "bg-orange-50" },
  { name: "Music", icon: Music, color: "text-yellow-500", bg: "bg-yellow-50" },
  { name: "Data Science", icon: Database, color: "text-teal-500", bg: "bg-teal-50" },
  { name: "Writing", icon: PenTool, color: "text-indigo-500", bg: "bg-indigo-50" },
];

export function Categories() {
  return (
    <section className="py-20 bg-[#FFF9F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
             <span className="text-primary font-semibold tracking-wide uppercase text-sm">Top Categories</span>
             <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our Categories</h2>
             <p className="text-muted-foreground">Find the right path for your career.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
                <motion.div 
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col items-center text-center gap-4 border border-border/50"
                >
                    <div className={`p-4 rounded-full ${cat.bg} ${cat.color}`}>
                        <cat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-foreground">{cat.name}</h3>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
