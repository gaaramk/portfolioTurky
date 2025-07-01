"use client";

import { workData } from "@/assets/assets";
import { ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section id="mywork" className="w-full py-12 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="px-[12%]"
      >
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-2 text-lg font-ovo"
        >
          My Portfolio
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          My Latest Work
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        >
          Here are some of the projects I have worked on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
        >
          {workData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative
              cursor-pointer group"
              style={{
                backgroundImage: `url(${item.bgImage})`,
              }}
            >
              <div
                className="bg-white text-black w-10/12 rounded-md absolute bottom-5 left-1/2
              -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300
              group-hover:-translate-y-7"
              >
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                </div>

                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center
                  justify-center shadow-[2px_2px_0px_0px_rgb(0,0,0)] group-hover:bg-lime-300
                  transition"
                >
                  <Send className="w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          href="https://www.behance.net/abdosdfmohamed"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="py-3 px-8 my-20 w-max flex items-center justify-between gap-3
            bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-300
            cursor-pointer dark:bg-white/70 dark:text-black dark:hover:bg-white"
        >
          Show More <ArrowRight className="w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Work;
