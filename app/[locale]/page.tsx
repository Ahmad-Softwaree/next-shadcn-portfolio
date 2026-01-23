import About from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Tools from "@/components/sections/tools";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Projects />
      <Tools />
      <Certifications />
      <Contact />
    </div>
  );
}
