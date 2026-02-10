"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-20 bg-[#FFF9F5] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
            <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">See what our students say</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                10,000+ students are learning with us. We are rated 4.8/5 on Trustpilot.
            </p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
             <div className="absolute -top-6 left-10 text-6xl text-primary opacity-20 font-serif">"</div>
             
             <div className="flex flex-col md:flex-row gap-8 items-center">
                 <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-lg">
                     {/* Placeholder user */}
                     <div className="w-full h-full bg-slate-300 flex items-center justify-center text-4xl">👩‍🎓</div>
                 </div>
                 
                 <div className="text-left space-y-4">
                     <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
                         "The courses at Skill Nest are absolutely amazing. The instructors are top-notch and the community is so supportive. I landed my dream job after completing the UX Design track!"
                     </p>
                     
                     <div>
                         <h4 className="font-bold text-lg">Sarah Johnson</h4>
                         <p className="text-sm text-muted-foreground">Product Designer at TechFlow</p>
                     </div>
                     
                     <div className="flex gap-1">
                         {[1, 2, 3, 4, 5].map((s) => (
                             <Star key={s} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                         ))}
                     </div>
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
}
