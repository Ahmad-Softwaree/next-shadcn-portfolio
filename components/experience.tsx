import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="default" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Junior Full Stack Developer",
      company: "Bester Group",
      period: "2021 - Present",
      description:
        "Contributed to the full development lifecycle of enterprise web systems by building scalable APIs, designing reusable frontend components, and maintaining databases. Collaborated closely with senior engineers to improve performance and security across the stack.",
      technologies: [
        "React",
        "Next.js",
        "Express.js",
        "Nest.js",
        "TypeScript",
        "Mysql",
        "MongoDB",
        "Postgresql",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "AP Soft",
      period: "2023 - Present",
      description:
        "Led development on multi-tenant client platforms using modern full stack tools. Architected backend services with NestJS, developed dynamic interfaces in Next.js, and integrated real-time features and external APIs to deliver robust business solutions.",
      technologies: [
        "React",
        "Next.js",
        "Nest.js",
        "TypeScript",
        "Mysql",
        "MongoDB",
        "Postgresql",
      ],
    },
    {
      title: "Backend Developer",
      company: "Avana Soft",
      period: "2025 - Present",
      description:
        "Focused on designing and optimizing backend architecture for performance-critical applications. Built secure RESTful APIs, implemented data modeling best practices, and ensured reliable system integration with external services and databases.",
      technologies: ["Nest.js", "TypeScript", "Mysql"],
    },
    {
      title: "Frontend Developer",
      company: "Kitn Company",
      period: "2025 - 2025",
      description:
        "Specialized in building responsive and user-friendly interfaces. Developed reusable components, optimized performance for modern web applications, and collaborated closely with designers to deliver seamless user experiences across devices.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwindcss"],
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experience
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Journey
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
