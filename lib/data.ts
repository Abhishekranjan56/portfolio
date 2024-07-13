import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import jotionImg from "@/public/jotion.png";
import rmtdevImg from "@/public/rmtdev.png";
import playerImg from "@/public/player.png"
import adhyayanImg from "@/public/Swaadhayayn.png"
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated with B.Tech in Computer Science",
    location: "Ideal Institute of Technology, AKTU",
    description: "Completed my Bachelor's degree in Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2015 - 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "WFH, India",
    description:
      "Developed and maintained projects such as Wship and Zenverse at Paathshala Spark.",
    icon: React.createElement(FaReact),
    date: "January 2023 - September 2023",
  },
  {
    title: "React Native Developer",
    location: "WFH, India",
    description:
      "Worked on various projects including VideoPlayer and Swaadhyayan LMS at AAIMAA Web Solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Video Player",
    description:
      "Created a specialized video player with a unique m3u8 parser, reducing load time by 30% and ensuring compatibility across devices.",
    tags: ["React Native", "Redux", "Axios"],
    imageUrl: playerImg,
  },
  {
    title: "Swaadhyayan [LMS]",
    description:
      "Transitioned project architecture to an Nx monorepo, revamped the app with Frappe JS SDK, and integrated MMKV for enhanced performance.",
    tags: [
      "React Native",
      "Nx Monorepo",
      "Frappe JS SDK",
      "MMKV",
      "Expo",
      "TypeScript",
      "React Queries",
    ],
    imageUrl: adhyayanImg,
  },
  {
    title: "Movies Review App",
    description:
      "Developed with React Native and Redux, utilizing TMDbAPI for efficient retrieval of movie details and visuals, enhancing user engagement.",
    tags: ["React Native", "Redux", "TMDbAPI"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Jotion [Full Notion Clone]",
    description:
      "Developed project structure and rendering for Xhibhiter, a trading and crypto stats tracking platform.",
    tags: ["Next.js", "React.js", "Tailwind"],
    imageUrl: jotionImg,
  },
  {
    title: "Zenverse",
    description:
      "Developed and deployed authentication on AWS for a crypto dashboard, utilizing Next.js, React.js, Tailwind, Nuxt, and AWS Cognito.",
    tags: ["Next.js", "React.js", "Tailwind", "Nuxt", "AWS Cognito"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "React",
  "Next.js",
  "Vue.js",
  "React Native",
  "Nuxt",
  "Git",
  "Node.js",
  "Tailwind",
  "Express",
  "MongoDB",
  "Postman",
  "RabbitMQ",
  "SocketIO",
  "Redis",
  "Postgres",
  "Docker",
  "Kubernetes",
  "Expo",
  "TypeScript",
] as const;
