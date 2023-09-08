import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Socials />
    </main>
  );
}
