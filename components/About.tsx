"use client"

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] pb-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
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
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 mt-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="user image"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo text-center lg:text-left">
            I&apos;ve thus far contributed to the success and growth
            of organizations across the Education, Finance, and Retail sectors,
            by building intuitive, user-focused interfaces, and I continue to
            evolve my skills to deliver meaningful, high-impact digital
            solutions.
          </p>
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-[#fcf4ff] duration-500 hover:shadow hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-dark-hover/50"
              >
                <Image
                  src={icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
                {title == "Education & Certifications" && <p className="text-gray-600 text-sm dark:text-white/80">Currently completing AWS Cloud Practitioner Certification</p>}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex w-full flex-col items-center gap-2 mt-10"
      >
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-700 font-ovo dark:text-white/80"
        >
          Tech Stack & Tools
        </motion.h4>
        <motion.ul
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          // className="flex items-center gap-3 sm:gap-5"
          className="flex flex-1 flex-wrap items-center justify-center lg:px-20"
        >
          {toolsData.map((tool, index) => (
            <li
              key={index}
              // className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg hover:-translate-y-1 duration-500"
              className="flex flex-col items-center justify-center text-center m-4 space-y-2"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-[50%] bg-white"
                style={{ backgroundColor: "#F0F2F5" }}
              >
                <Image src={tool.icon} alt="tool" className="w-6" />
              </div>
              <p className="text-xs">{tool.name}</p>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default About;
