"use client";

import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="bg-[#FFF9F5] py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-4xl font-bold text-foreground">25+</h3>
            <p className="text-muted-foreground font-medium">Active Students</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-4xl font-bold text-foreground">56k</h3>
            <p className="text-muted-foreground font-medium">Total Courses</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
           <h3 className="text-4xl font-bold text-foreground">170+</h3>
           <p className="text-muted-foreground font-medium">Instructors</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
