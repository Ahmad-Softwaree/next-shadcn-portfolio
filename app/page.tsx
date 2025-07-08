import About from "@/components/about";
import Certifications from "@/components/certifications";
import { Cloud } from "@/components/cloud";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";
import { ShowCase } from "@/components/show-case";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-16">
      <Hero />
      <ShowCase />
      <About />
      <Cloud />
      <Services />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
