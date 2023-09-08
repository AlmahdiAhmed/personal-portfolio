"use client";

import { ActiveContext } from "@/context/ActiveProvider";
import { useInView } from "react-intersection-observer";
import { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data";
import Project from "./Project";
import SectionHeading from "./SectionHeading";
const Projects = () => {
  const { setActive } = useContext(ActiveContext);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      setActive("Projects");
    }
  }, [inView, setActive]);
  return (
    <section ref={ref} id="projects" className="padding w-full scroll-mt-20">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col items-center py-7 gap-5 w-full ">
        {projects.map((project) => (
          <>
            <Project {...project} />
          </>
        ))}
      </div>
    </section>
  );
};
export default Projects;
