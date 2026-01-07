import About from "@/components/about";
import Certifications from "@/components/certifications";
import { Skills } from "@/components/skills";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Tools from "@/components/tools";
import Services from "@/components/services";

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
