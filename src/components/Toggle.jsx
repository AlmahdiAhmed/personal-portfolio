"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSolidSun } from "react-icons/bi";
import { WiMoonWaxingCrescent2 } from "react-icons/wi";
const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const mode = "light";
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const toggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div
      className="flex w-[42px] items-center justify-between py-[2px] px-1 border border-[#990d35] rounded-xl relative cursor-pointer"
      onClick={toggle}
    >
      <div className=" text-[12px] h-full">🔆</div>
      <div className="text-[12px] h-full">🌙</div>
      <div
        className={`bg-[#990d35] transition-all duration-500 text-[#990d35] w-[17px] h-[17px] rounded-full absolute ${
          theme === "light" ? "translate-x-0" : "translate-x-[98%]"
        } `}
      ></div>
    </div>
  );
};
export default Toggle;
