import React from "react";
import gymImg from "../public/projects/gym-blog.png";
import realEstate from "../public/projects/real-estate.png";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
export const links = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Projects",
    href: "projects",
  },
  {
    title: "Contact",
    href: "contact",
  },
];
export const projects = [
  {
    id: 1,
    title: "real estate company",
    img: realEstate,
    desc: "This is a website for a real-estate company that show their offers and top offers you can click on any of the houses and see more information about it. I built this project using next.js and its routing features as well as tailwind for styling",
    live: "https://real-estate-company-weld.vercel.app",
    github: "https://github.com/AlmahdiAhmed/real-estate-company",
    tags: ["react", "next.js", "tailwind"],
  },
  {
    id: 2,
    title: "gym blog",
    img: gymImg,
    desc: "This is a gym blog app that helps beginner gym members to find their correct workout and full details about it. You can filter the workouts according to the body part to choose. I built this projects using next.js, next.js routing , tailwind and mongoDB for the back-end. This projects demonstrates my ability to work with back-end and databases",
    live: "https://two-sigma.vercel.app",
    github: "https://github.com/AlmahdiAhmed/gym-blog",
    tags: ["react", "next.js", "tailwind", "mongoDB"],
  },
];
export const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "React",
  "Next js",
  "Tailwind",
  "Git",
  "Github",
];
export const social = [
  {
    id: 1,
    icon: React.createElement(AiFillGithub),
    href: "https://github.com/AlmahdiAhmed",
  },
  {
    id: 2,
    icon: React.createElement(BiLogoGmail),
    href: "mailto:almahdiahmed22@gmail.com",
  },
  {
    id: 3,
    icon: React.createElement(BiLogoLinkedin),
    href: "https://www.linkedin.com/in/almahdiahmed/",
  },
];
