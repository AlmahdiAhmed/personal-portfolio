"use client";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
const page = ({ params }) => {
  const projectId = params.id - 1;

  const project = projects[projectId];
  return (
    <div className="h-[100vh] flex items-center">
      <motion.article
        className="flex h-[600px] sm:h-[300px] gap-3 sm:items-center mx-3 flex-col sm:flex-row justify-between "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Link
          href={project.live}
          target="_blank"
          className="relative flex-1 sm:h-full"
        >
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-center rounded-md object-cover"
          />
        </Link>
        <div className="flex-1">
          <h3 className="text-2xl capitalize font-extrabold">
            {project.title}
          </h3>
          <p className="text-lg py-2">{project.desc}</p>
          <ul className="flex flex-wrap gap-2 mt-auto pb-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="bg-slate-400 px-1 py-[0.5px] dark:bg-[#545151] rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href={project.live}
              target="_blank"
              className="flex items-center underline decoration-[#212121] dark:decoration-slate-300 transition-all hover:text-[#990d35] group"
            >
              <TbWorld />
              <span className="underline decoration-[#212121] dark:decoration-slate-300 group-hover:text-[#990d35]">
                Live view
              </span>
            </Link>
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center underline decoration-[#212121] dark:decoration-slate-300 transition-all hover:text-[#990d35] group"
            >
              <AiFillGithub />
              <span className="underline decoration-[#212121] dark:decoration-slate-300 group-hover:text-[#990d35]">
                code source
              </span>
            </Link>
          </div>
        </div>
      </motion.article>
    </div>
  );
};
export default page;
