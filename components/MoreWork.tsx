"use client"

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const MoreWork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-[12%] py-10 scroll-mt-20 pt-40 md:pt-44 xl:pt-28"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My Portfolio{" "}
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center text-5xl font-ovo"
      >
        My work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Explore a collection of my web development projects highlighting technical skills and modern solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="grid grid-cols-1 max-h-screen overflow-y-auto md:grid-cols-2 xl:grid-cols-4 my-10 gap-5 pb-4 border-b-2 border-gray-500 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div
              className="bg-white w-10/12 opacity-95 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex flex-col duration-500 group-hover:bottom-7 space-y-2"
            >
              <div className="flex justify-between items-center w-full">
                <h2 className="font-semibold">{project.title}</h2>
                {project.title === "My Portfolio Website" ? (
                  <Link
                    href="/"
                    className="border-black shadow-[2px_2px_0_#000] border rounded-full w-8 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-4"
                    />
                  </Link>
                ) : (
                  <a
                    href={project.workUrl}
                    className="border-black shadow-[2px_2px_0_#000] border rounded-full w-8 aspect-square flex items-center justify-center group-hover:bg-lime-300 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-4"
                    />
                  </a>
                )}
              </div>
              <p
                className="text-gray-700 text-sm"
              >
                <span className="font-semibold">{project.techStack}</span>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MoreWork;
