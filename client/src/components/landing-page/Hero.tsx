"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full bg-[#FFF9F5] pt-12 pb-24 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        {/* Top Right Green Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-transparent z-0 overflow-hidden pointer-events-none">
             <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#20B486]/10 rounded-full blur-3xl"></div>
        </div>
         {/* Orange Shape */}
        <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="space-y-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white border border-primary/20 text-primary font-semibold text-sm shadow-sm"
            >
                Never Stop Learning
            </motion.div>
            
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]"
            >
                Smart Learning <br />
                Deeper & More <br />
                <span className="text-primary">-Amazing</span>
            </motion.h1>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-md leading-relaxed"
            >
                Develop skills with courses from top instructors and companies. 
                We provide high-quality, accessible & engaging education.
            </motion.p>
            
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
            >
                <Button className="h-14 px-8 rounded-full bg-secondary hover:bg-secondary/90 text-white text-lg shadow-lg shadow-secondary/25">
                    Join Free
                </Button>
                
                <button className="flex items-center gap-3 group">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-5 h-5 text-primary ml-1 fill-current" />
                    </div>
                    <span className="font-semibold text-foreground">Play Show</span>
                </button>
            </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
        >
            {/* Green Card Background behind image */}
            <div className="absolute top-10 right-10 w-3/4 h-3/4 bg-[#20B486] rounded-[40px] rotate-6 z-0"></div>
             {/* Orange Triangle/Shape */}
            <div className="absolute bottom-20 -left-10 w-24 h-24 bg-primary/20 rounded-full blur-xl z-10"></div>

            <div className="relative z-10 mx-auto w-full max-w-md aspect-[4/5]">
                 {/* Main Student Image */}
                <Image
                    src="/hero-student.png"
                    alt="Happy Student"
                    fill
                    className="object-cover object-top drop-shadow-2xl mask-image-gradient"
                    priority
                />
                
                {/* Floating Elements mimicking the design */}
                <div className="absolute top-20 -left-8 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce duration-[3000ms]">
                   <div className="bg-yellow-100 p-2 rounded-full">
                        <span className="text-xl">🎓</span>
                   </div>
                   <div>
                       <p className="text-xs text-muted-foreground">Tutors</p>
                       <p className="font-bold text-sm">250+</p>
                   </div>
                </div>

                <div className="absolute bottom-32 -right-4 bg-white p-4 rounded-2xl shadow-xl animate-pulse">
                     <div className="flex items-center gap-2">
                         <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                         <span className="text-sm font-bold">Active</span>
                     </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
