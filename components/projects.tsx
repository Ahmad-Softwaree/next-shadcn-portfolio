"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import ProjectCard from "./cards/project-card";
import Link from "next/link";

const ProjectsPreview = () => {
  const topProjects = projects.filter((project) => project.showInHome);

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            A preview of some of my recent and top projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {topProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {/* See All Projects Link */}
        <div className="flex justify-center mt-10">
          <Link href="/projects">
            <Badge
              className="text-sm px-4 py-2 rounded-full cursor-pointer transition-colors"
              variant="outline">
              See all projects →
            </Badge>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
