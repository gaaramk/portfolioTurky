"use client";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
const Header = () => {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <Image
            src={assets.user_image}
            alt="header-bg-color"
            width={1920}
            height={1080}
            loading="lazy"
            className="rounded-full w-32"
          />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
          }}
          className="flex items-center gap-2 text-xl md:text-3xl my-3 font-ovo"
        >
          Hi I'm Turky
          <Image
            src={assets.hand_icon}
            alt="hand-icon"
            width={20}
            height={20}
            loading="lazy"
            className="w-6"
          ></Image>
        </motion.h3>

        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="text-3xl md:text-3xl lg:text-[66px] font-ovo"
        >
          Graphic Designer | Branding Specialist | Visual Storyteller{" "}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.7,
          }}
          className="max-w-2xl mx-auto font-ovo text-lg"
        >
          Passionate about crafting compelling visuals that bring brands to
          life. With a strong eye for detail and a deep understanding of design
          principles, I create impactful designs across digital and print media.
          Let’s turn ideas into unforgettable visuals.
        </motion.p>

        <div className="flex gap-3 my-5">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            href="#contact"
          >
            <Button
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              variant="contact"
            >
              Contact Me
              <ArrowRight />
            </Button>
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
            }}
            href="/sample-resume.pdf"
            download
          >
            <Button variant="resume">
              Resume
              <Download />
            </Button>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Header;
