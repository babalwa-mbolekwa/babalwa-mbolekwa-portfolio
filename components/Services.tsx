"use client"

import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        What I Offer{" "}
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I build modern, scalable web applications with a strong focus on
        frontend development, performance, and user experience. I specialise in
        React, creating reusable user-facing components, and translating Figma
        designs into pixel-accurate, production-ready features.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
          whileHover={{scale: 1.05}}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow hover:shadow-black hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-xl my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
