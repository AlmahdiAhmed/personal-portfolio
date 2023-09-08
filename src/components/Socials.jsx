"use client";
import { social } from "@/data";
import Link from "next/link";
import { delay, motion } from "framer-motion";
const Socials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          delay: 1,
        },
      }}
      className=" h-[100vh] flex items-center fixed top-0 right-5"
    >
      <div className="flex flex-col gap-1">
        {social.map((link) => (
          <Link
            key={link.id}
            target="_blank"
            href={link.href}
            className="p-1 text-lg bg-[#1a1a1a] dark:bg-slate-200 text-slate-200 dark:text-[#1a1a1a] rounded-full flex justify-center items-center"
          >
            {link.icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};
export default Socials;
