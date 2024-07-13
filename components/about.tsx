"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer Science</span> from AKTU, I have been actively working in the software development field. I have experience as a{" "}
        <span className="font-medium">Full-Stack Developer</span> and{" "}
        <span className="font-medium">React Native Developer</span>. 
        <span className="italic"> My favorite part of programming</span> is the problem-solving aspect. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack includes{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Prisma, and various other technologies. I am always looking to learn new technologies and improve my skills. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and <span className="font-medium">learning new things about tech</span>. I am currently learning about{" "}
        <span className="font-medium">Spring Boot and how to use Linux</span>. I'm also learning how to play the Soccer.
      </p>
    </motion.section>
  );
}
