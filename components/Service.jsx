"use client";
import { serviceData } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const Service = () => {
  return (
    <section id="services" className="w-full py-12 scroll-mt-28">
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
          What I Offer
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          My Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        >
          As a graphic designer, I specialize in creating visually stunning and
          engaging designs that captivate audiences and leave a lasting
          impression. My services include:
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
        >
          {serviceData.map((item, index) => (
            <motion.figure
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 px-8 py-12 rounded-lg dark:border-gray-700
            hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] dark:hover:shadow-[4px_4px_0px_0px_rgb(100,100,100)]
             cursor-pointer  hover:translate-y-1 duration-300"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={1920}
                height={1080}
                loading="lazy"
                className="w-10"
              />

              <h3 className="text-lg my-5 dark:text-white">{item.title}</h3>

              <p className="text-sm  dark:text-gray-300 leading-5">
                {item.description}
              </p>

              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-500 pt-5 underline hover:text-gray-800 dark:hover:text-gray-100"
              >
                Read more <ArrowRight size={16} />
              </Link>
            </motion.figure>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
