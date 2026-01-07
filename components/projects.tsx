"use client";

import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data/projects";
import ProjectCard from "./cards/project-card";
import Link from "next/link";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animate";
import { useTranslation } from "react-i18next";

const ProjectsPreview = () => {
  const { t } = useTranslation();
  const topProjects = projects.filter((project) => project.showInHome);

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 flex flex-col items-center gap-4">
            <Badge variant="secondary" className="mb-4">
              {t("navbar.projects")}
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {t("projects.title")}
            </h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
              {t("projects.subtitle")}
            </p>
          </div>

          {/* Projects Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {topProjects.map((project, index) => (
              <StaggerItem key={index}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          {/* See All Projects Link */}
          <div className="flex justify-center mt-10">
            <Link href="/projects">
              <Badge
                className="text-sm px-4 py-2 rounded-full cursor-pointer transition-colors"
                variant="outline">
                {t("common.see_all_projects")}
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ProjectsPreview;
