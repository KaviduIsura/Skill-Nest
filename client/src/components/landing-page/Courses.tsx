"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    id: 1,
    title: "Learn Python Basics From Scratch to Advanced",
    category: "Design",
    rating: 4.8,
    reviews: 750,
    price: 35.00,
    author: "Robert Fox",
    image: "/course-1.jpg", // Placeholder
    color: "bg-blue-100"
  },
  {
    id: 2,
    title: "Master UI/UX Design With Figma",
    category: "Development",
    rating: 4.9,
    reviews: 120,
    price: 45.00,
    author: "Jenny Wilson",
    image: "/course-2.jpg", // Placeholder
    color: "bg-purple-100"
  },
  {
    id: 3,
    title: "Complete Digital Marketing Strategy",
    category: "Marketing",
    rating: 4.7,
    reviews: 430,
    price: 30.00,
    author: "Guy Hawkins",
    image: "/course-3.jpg", // Placeholder
    color: "bg-pink-100"
  },
  {
    id: 4,
    title: "Statistics Data Science and Business Analysis",
    category: "Data Science",
    rating: 4.9,
    reviews: 600,
    price: 55.00,
    author: "Esther Howard",
    image: "/course-4.jpg", // Placeholder
    color: "bg-orange-100"
  }
];

export function Courses() {
  return (
    <section className="bg-[#f5f6fa]">
    <section className="py-20 container mx-auto px-4">
      <div className="flex justify-between items-end mb-12">

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8 px-4 py-1.5 rounded-full bg-primary border border-primary/20 text-white font-semibold text-sm shadow-sm rotate-[-15deg]"
          >
            Our Courses
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Explore Our Courses</h2>
          <p className="text-muted-foreground w-full md:w-2/3">Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
        </div>
        <div className="hidden md:block">
          {/* Filter buttons could go here */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-white border-border shadow-sm hover:shadow-lg transition-all duration-300 group overflow-hidden">
            <CardHeader className="py-0">
              <div className={`h-48 w-full ${course.color} relative overflow-hidden`}>
                {/* Fallback for missing images - colored backgrounds */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 text-4xl font-bold">
                  {course.category[0]}
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-5 space-y-3">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span className="bg-secondary/10 text-secondary px-2 py-1 rounded">{course.category}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating} ({course.reviews})</span>
                </div>
              </div>
              <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                {course.title}
              </h3>
            </CardContent>
            <CardFooter className="p-5 pt-0 flex justify-between items-center border-t border-border/50 mt-auto">
             <div className="flex items-center gap-2 text-sm text-foreground/80">
                <div className="bg-gray-100 p-1 rounded-full">
                  <User className="w-3 h-3" />
                </div>
                <span>{course.author}</span>
              </div>

              <span className="text-primary font-bold text-lg">${course.price}</span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-2 bg-[#20B486] text-white rounded-full font-medium shadow-lg shadow-secondary/20 hover:bg-secondary/90 transition-all">
          See All Courses
        </button>
      </div>
    </section>
    </section>
  );
}
