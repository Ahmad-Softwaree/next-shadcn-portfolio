import About from "@/components/sections/about";
import Certifications from "@/components/sections/certifications";
import { Skills } from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Experiences from "@/components/sections/experiences";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Tools from "@/components/sections/tools";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experiences />
      <Projects />
      <Tools />
      <Certifications />
      <Contact />
    </div>
  );
}
