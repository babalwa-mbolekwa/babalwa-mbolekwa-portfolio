import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Link from "next/link";

const WorkNavbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header background"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 lg:justify-between ${
          isScroll
            ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20"
            : ""
        }`}
      >
       
        <ul
          className={`flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent border border-gray-500"
          }`}
        >
          <li>
            <Link href="/" className="font-ovo lg:hidden">Home</Link>
            <Link href="/" className="font-ovo hidden lg:block">Back to home</Link>
          </li>
          <li className="lg:hidden">
            <a href="#contact" className="font-ovo">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact{" "}
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt="contact"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default WorkNavbar;
