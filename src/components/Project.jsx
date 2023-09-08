"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { useScroll } from "framer-motion";
import { useRef } from "react";
const Project = ({ id, title, img, desc, live, github, tags }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 , 1", "1.33 1"],
  });
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      ref={ref}
      className="group rounded-xl h-[430px] sm:h-[250px] p-2 flex sm:even:flex-row-reverse justify-between flex-col sm:flex-row relative bg-slate-300 dark:bg-[#1a1a1a] duration-500 w-full sm:w-[42rem] overflow-hidden sm:pr-4"
    >
      <Link href={live} target="_blank" className="flex-1 relative">
        <Image
          src={img}
          alt={title}
          fill
          className="objet-cover object-center rounded-md"
        />
      </Link>
      <div className="flex-[0.5] sm:flex-[0.9] py-2 px-1 flex flex-col sm:gap-2">
        <h3 className="text-xl font-bold capitalize">{title}</h3>
        <p className="mt-1 text-lg overflow-hidden text">{desc}</p>
        <Link
          href={`/${id}`}
          className="underline decoration-[#990d35] text-[#990d35]"
        >
          More...
        </Link>
        <ul className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-slate-400 dark:bg-[#545151] rounded-full px-1 py-[0.5]"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-1 pt-1 w-full">
          <Link
            href={live}
            target="_blank"
            className="flex items-center underline decoration-[#212121] dark:decoration-slate-300 transition-all hover:text-[#990d35] group"
          >
            <TbWorld />
            <span className="underline decoration-[#212121] dark:decoration-slate-300 hover:text-[#990d35]">
              Live view
            </span>
          </Link>
          <Link
            href={github}
            target="_blank"
            className="flex items-center underline decoration-[#212121] dark:decoration-slate-300 transition-all hover:text-[#990d35] group"
          >
            <AiFillGithub />
            <span className="underline decoration-[#212121] dark:decoration-slate-300 hover:text-[#990d35]">
              code source
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
export default Project;
