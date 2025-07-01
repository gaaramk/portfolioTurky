"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="aboutme" className="w-full py-24 scroll-mt-28">
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
          Introduction
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-5xl font-ovo"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col lg:flex-row items-center gap-12 my-20"
        >
          <motion.figure
            initial={{ opacity: 0, y: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-64 md:w-80 rounded-3xl max-w-none"
          >
            <Image
              src={assets.user_image}
              alt="user image"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full rounded-3xl"
            />
          </motion.figure>

          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-10 max-w-2xl font-ovo"
            >
              Hello! I&apos;m Turky, a passionate graphic designer and brand
              strategist with a love for visual storytelling. My journey in the
              world of design began in 2019, and ever since, I&apos;ve been
              dedicated to crafting captivating designs that leave a lasting
              impression.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-2xl"
            >
              {infoList.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer 
                  hover:bg-[#fcf4ff] dark:hover:bg-[#2a004a] hover:translate-y-1 duration-300
                  hover:shadow-[4px_4px_0px_rgb(0,0,0)] dark:hover:shadow-[4px_4px_0px_rgb(255,255,255)]"
                >
                  <Image
                    src={item.icon}
                    alt="icon"
                    width={20}
                    height={20}
                    loading="lazy"
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="my-6 text-green-700 font-ovo"
            >
              Tools I Use
            </motion.h4>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="flex items-center gap-5 flex-wrap"
            >
              {toolsData.map((item, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  key={index}
                  className="flex items-center justify-center w-14 
                    aspect-square border border-gray-400 rounded-lg cursor-pointer
                    hover:translate-y-1 duration-300"
                >
                  <Image
                    src={item}
                    alt="icon"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
