"use client";

import React from "react";
import WorkNavbar from "@/components/WorkNavbar";
import Contact from "@/components/Contact";
import MoreWork from "@/components/MoreWork";
import Footer from "@/components/Footer";

export default function WorkPage() {
  
  return (
    <>
      <WorkNavbar />
      <MoreWork />
      <Contact />
      <Footer />
    </>
  );
}
