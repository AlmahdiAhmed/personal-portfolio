"use client";
import { links } from "@/data";
import Link from "next/link";
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ActiveContext } from "@/context/ActiveProvider";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import clsx from "clsx";
const Navbar = () => {
  const { active, setActive } = useContext(ActiveContext);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="h-[50px] z-50 w-full max-w-5xl mx-auto fixed inset-0 bg-slate-200 dark:bg-[#212121] transition-all duration-500">
      <motion.nav
        className="mx-auto relative px-3 h-full flex justify-between items-center text-[#212121] dark:text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <Link href="#home">
            {" "}
            <h2 className="text-xl font-extrabold hover:text-[#990d35] dark:hover:text-[#990d35] transition-all dark:text-slate-200">
              <span className="text-[#990d35]">&lt;</span> Almahdi{" "}
              <span className="text-[#990d35]">/ &gt;</span>
            </h2>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="flex gap-1 h-full items-center">
          <Toggle />
          <div
            className="flex sm:hidden h-full items-center text-2xl cursor-pointer transition-all duration-500 hover:text-[#990d35] dark:hover:text-[#990d35]"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <RxCross2 /> : <HiMenuAlt1 />}
          </div>
          <div className="hidden sm:flex h-full items-center">
            {links.map((link) => (
              <div
                key={link.title}
                className=" relative group transition-all duration-500 dark:transition-all dark:duration-500 "
                onClick={() => setActive(link.title)}
              >
                <Link
                  href={`#${link.href}`}
                  className={clsx("text-lg px-1 hover:text-[#990d35]", {
                    "text-[#990d35]": active === link.title,
                  })}
                >
                  {link.title}
                </Link>
                <div
                  className={`w-full flex opacity-0 group-hover:opacity-100 justify-center transition-all duration-500 dark:transition-all dark:duration-500 ${
                    active === link.title && "opacity-100"
                  }`}
                >
                  <div className="bg-[#990d35] absolute w-1 h-1 rounded-full transition" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`sm:hidden  transition-all absolute top-[50px] w-full left-0 right-0 pt-5 flex flex-col gap-3 bg-slate-300 z-30 dark:bg-[#1a1a1a] h-[100vh] items-center ${
            toggle ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {links.map((link) => (
            <div
              key={link.title}
              className="relative group transition-all duration-500"
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
            >
              <Link
                href={`#${link.href}`}
                className={clsx(
                  "text-lg px-1 hover:text-[#990d35] transition-all duration-500",
                  {
                    "text-[#990d35]": active === link.title,
                  }
                )}
              >
                {link.title}
              </Link>
              <div
                className={`w-full flex opacity-0 group-hover:opacity-100 justify-center transition-all duration-500 ${
                  active === link.title && "opacity-100"
                }`}
              >
                <div className="bg-[#990d35] absolute w-1 h-1 rounded-full transition" />
              </div>
            </div>
          ))}
        </div>
      </motion.nav>
    </header>
  );
};
export default Navbar;
