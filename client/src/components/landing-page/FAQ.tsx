"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I get started with Skill Nest?",
    answer: "Simply sign up for a free account, browse our course catalog, and enroll in any course that interests you. Many introductory courses are free!"
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes! Our certificates are recognized by leading tech companies. We also partner with industry leaders to ensure our curriculum meets current job market demands."
  },
  {
    question: "Can I access the courses on mobile?",
    answer: "Absolutely. Our platform is fully responsive, so you can learn on your phone, tablet, or computer anytime, anywhere."
  },
  {
    question: "What is the refund policy?",
    answer: "We offer a 30-day money-back guarantee for all paid courses. If you're not satisfied, simply contact support for a full refund."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
             <span className="text-primary font-semibold tracking-wide uppercase text-sm">FAQ</span>
             <h2 className="text-3xl md:text-5xl font-bold text-foreground">Frequently Asked <br /> Questions</h2>
             <p className="text-muted-foreground text-lg">
                 Can't find the answer you're looking for? <br /> 
                 <a href="#" className="text-primary font-semibold hover:underline">Contact our support team.</a>
             </p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className={`border rounded-2xl p-6 transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-md border-primary/20' : 'bg-transparent border-transparent hover:bg-gray-50'}`}
                >
                    <button 
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="flex justify-between items-center w-full text-left font-semibold text-lg"
                    >
                        {faq.question}
                        {activeIndex === index ? (
                            <div className="bg-primary text-white p-1 rounded-full">
                                <Minus className="w-4 h-4" />
                            </div>
                        ) : (
                            <div className="bg-white border border-border text-foreground p-1 rounded-full">
                                <Plus className="w-4 h-4" />
                            </div>
                        )}
                    </button>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <p className="pt-4 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
