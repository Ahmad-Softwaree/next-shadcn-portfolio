import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With over 4 years of experience in full-stack development, I
              specialize in building scalable web applications using modern
              technologies. My expertise includes Next.js, Node.js, and Nest.js.
              I&apos;m passionate about creating elegant solutions to complex
              problems and sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Link target="_blank" href={`https://github.com/Ahmad-Softwaree`}>
                <Button className="rounded-full">
                  <Github />
                  View Github
                </Button>{" "}
              </Link>

              <a href="/pdf/nest-js-backend-developer.pdf" download>
                <Button variant="outline" className="rounded-full">
                  <Download className="mr-2" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/ahmad.jpg" alt="" className="object-cover" fill />
    </div>
  </div>
);
export default About;
