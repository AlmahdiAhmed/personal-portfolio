"use client";
import { motion } from "framer-motion";
import { ActiveContext } from "@/context/ActiveProvider";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Socials from "./Socials";

const Hero = () => {
  const { setActive } = useContext(ActiveContext);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (inView) {
      setActive("Home");
    }
  }, [inView, setActive]);
  const [text] = useTypewriter({
    words: ["Front-end developer."],
    loop: false,
    typeSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <section id="home" className="h-[100vh] w-full px-0" ref={ref}>
      <div className="h-full w-full flex items-center justify-center relative">
        <div
          className="w-[90%] mx-auto flex items-center justify-center flex-col gap-4
        "
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src="/hero.png" alt="hero" width={250} height={200} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full flex justify-center"
          >
            <div className="flex flex-col w-[500px]">
              <h2 className="text-xl sm:text-2xl">
                Hello, I&apos;m Almahdi.
                <br />
                <span className="text-[#990d35] font-extrabold italic">
                  {text}
                  <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#990d35"
                  />
                </span>
              </h2>
              <h3 className="text-lg">
                I enjoy building websites and web apps. My focus is{" "}
                <span className="text-[#990d35] italic font-bold">
                  React (Next js)
                </span>
              </h3>
              <div className="flex gap-2 pt-1">
                <Link
                  href={"#contact"}
                  className=" py-1 px-2 rounded-full  bg-[#1a1a1a] dark:bg-slate-200 text-slate-300 dark:text-[#1a1a1a] hover:text-[#1a1a1a] dark:hover:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#1a1a1a] border hover:border-[#1a1a1a] dark:border-slate-200 transition-all duration-500"
                >
                  Contact Me
                </Link>
                <Link
                  href={"#projects"}
                  className="py-1 px-2 bg-white rounded-full dark:bg-[#1a1a1a] border border-[#1a1a1a] dark:border-white"
                >
                  Projects
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* <Socials /> */}
    </section>
  );
};
export default Hero;
