"use client";

import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "84884203-29bd-4eb3-8010-ba80fceba65c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  return (
    <section id="contact" className="w-full py-12 scroll-mt-28">
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
          Get in Touch
        </motion.h4>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-5xl font-ovo"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
        >
          If you have any questions or inquiries, please don&apos;t hesitate to
          contact me. I&apos;ll be happy to assist you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-9">
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              type="text"
              name="name"
              placeholder="Your Name"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
              rounded-md bg-white dark:text-black"
              required
            />

            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              type="email"
              name="email"
              placeholder="Your Email"
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400
              rounded-md bg-white dark:text-black"
              required
            />
          </div>

          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            name="message"
            rows="6"
            placeholder="Your Message"
            className="w-full p-3 outline-none border-[0.5px] border-gray-400
            rounded-md bg-white mb-6 dark:text-black"
            required
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="py-3 px-8 w-max flex items-center justify-between gap-3
            bg-black/70 text-white rounded-full mx-auto hover:bg-black duration-300
            cursor-pointer dark:bg-white/70 dark:text-black dark:hover:bg-white"
          >
            Submit
            <ArrowRight className="w-4" />
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
