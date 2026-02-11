"use client";

import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="flex items-center justify-center bg-[#f5f6fa] py-10">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#20B486] border border-primary/20 text-white font-semibold text-sm shadow-sm rotate-[-15deg]"
        >
          About Us
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex  items-center justify-center text-center pb-10 "
        >

          <p className="text-muted-foreground font-medium">
            We are passionate about empowering learners. Worldwid withh high quality,accessible & engaging education.our mission is to make learning simple,enjoyable & effective for everyone.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center text-center "
          >
            <h3 className="text-4xl font-bold text-foreground">25+</h3>
            <p className="text-muted-foreground font-medium">
              Years of Education Experience
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-4xl font-bold text-foreground">56k</h3>
            <p className="text-muted-foreground font-medium">Student Enrolled in Skill Nest Courses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h3 className="text-4xl font-bold text-foreground">170+</h3>
            <p className="text-muted-foreground font-medium">Expericance Teacher's service</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
