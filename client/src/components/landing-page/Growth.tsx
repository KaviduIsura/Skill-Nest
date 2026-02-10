"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Growth() {
  return (
    <section className="py-20 w-full container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
        >
             <div className="absolute -top-10 -left-10 w-full h-full bg-[#FFF9F5] rounded-[40px] z-0"></div>
             <div className="relative z-10 rounded-[20px] overflow-hidden shadow-2xl skew-x-1">
                 <div className="aspect-[4/3] relative bg-gray-100">
                     <Image 
                        src="/hero-student.png"
                        alt="Growth"
                        fill
                        className="object-cover"
                     />
                 </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-10 -right-5 bg-white p-4 rounded-xl shadow-lg z-20 flex items-center gap-3 animate-bounce duration-[4000ms]">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm font-medium text-muted-foreground leading-tight">
                    Trusted by <br /> Companies
                </div>
             </div>
        </motion.div>

        {/* Content Side */}
        <div className="space-y-8">
             <div className="space-y-4">
                 <span className="text-primary font-semibold tracking-wide uppercase text-sm">Growth Skill</span>
                 <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                     Growth Skill With <br />
                     <span className="text-primary">Skill Nest</span> & Accelerate <br />
                     to your Better Future
                 </h2>
                 <p className="text-muted-foreground text-lg">
                     We believe that everyone has the capacity to be creative. Skill Nest is a place where people develop their own potential.
                 </p>
             </div>

             <ul className="space-y-4">
                 {["Interactive Learning", "Certified Documentation", "Career Support"].map((item, idx) => (
                     <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                         <CheckCircle2 className="w-5 h-5 text-secondary" />
                         {item}
                     </li>
                 ))}
             </ul>

             <Button className="h-12 px-8 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                 Explore Courses
             </Button>
        </div>
      </div>
    </section>
  );
}
