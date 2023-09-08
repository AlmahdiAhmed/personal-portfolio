import Navbar from "@/components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import Provider from "@/context/Provider";
import ActiveSectionContextProvider from "@/context/ActiveProvider";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "800", "400"] });
export const metadata = {
  title: "Almahdi's Portfolio",
  description: "Get to know me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} max-w-5xl bg-slate-200 dark:bg-[#212121] text-[#212121] dark:text-slate-200 mx-auto transition-all duration-500 dark:transition-all dark:duration-500`}
      >
        <ActiveSectionContextProvider>
          <Provider>
            <Navbar />
            {children}
          </Provider>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
