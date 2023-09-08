"use client";
import { motion } from "framer-motion";
import { ActiveContext } from "@/context/ActiveProvider";
import { skills } from "@/data";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import SectionHeading from "./SectionHeading";

const About = () => {
  const { setActive } = useContext(ActiveContext);
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  useEffect(() => {
    if (inView) {
      setActive("About");
    }
  }, [inView, setActive]);
  const fadeIn = {
    initial: {
      opacity: 0,
    },
    whileInView: (index) => ({
      opacity: 1,
      transition: { delay: index * 0.2 },
    }),
  };
  return (
    <section ref={ref} id="about" className="padding my-5 scroll-mt-20">
      <SectionHeading>About_Me</SectionHeading>
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="py-3 text-lg">
            Hello, My name is Almahdi Ahmed. I am a front-end developer. I like
            building responsible functioning websites with perfect UI design. I
            have no problem dealing with back-end and one of my projects
            demonstrate that .I can work on my own or with a team. I am capable
            of using git and github to collaborate with other team members.
          </p>
        </motion.div>
        <motion.div
          className=" pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-wrap gap-2 pt-7">
            {skills.map((skill, index) => (
              <motion.span
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                custom={index}
                key={skill}
                className="bg-slate-300 dark:bg-[#1a1a1a] transition-all duration-500 px-2 py-1 rounded-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
