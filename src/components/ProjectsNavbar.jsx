"use client";
import { links } from "@/data";
import Link from "next/link";
import Toggle from "./Toggle";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { ActiveContext } from "@/context/ActiveProvider";
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const { active, setActive } = useContext(ActiveContext);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="h-[50px] z-50 w-full fixed inset-0 bg-slate-200 dark:bg-[#212121] transition-all duration-500">
      <motion.nav
        className="mx-auto relative px-3 h-full flex justify-between items-center text-[#212121] dark:text-white"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <Link href="/">
            {" "}
            <h2 className="text-xl font-extrabold hover:text-[#990d35] dark:hover:text-[#990d35] transition-all dark:text-slate-200">
              <span className="text-[#990d35]">&lt;</span> Almahdi{" "}
              <span className="text-[#990d35]">/ &gt;</span>
            </h2>
          </Link>
        </div>

        {/* desktop nav */}
        <div className="flex mr-5 h-full items-center">
          <Toggle />
        </div>
      </motion.nav>
    </header>
  );
};
export default Navbar;
