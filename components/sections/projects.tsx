"use client";

import { Link } from "@/i18n/navigation";
import { AnimateOnScroll } from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { getHomeProjects } from "@/lib/fetch/projects.action";
import ProjectsHeader from "../projects/ProjectsHeader";
import ProjectsGrid from "../projects/ProjectsGrid";

const ProjectsPreview = () => {
  const t = useTranslations("projects");
  const data = getHomeProjects();

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="projects" className="relative py-20 px-6 max-w-6xl mx-auto">
        <ProjectsHeader />
        <ProjectsGrid data={data} />
        <div className="flex justify-center mt-10">
          <Link href="/projects">
            <Button
              variant="outline"
              className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105">
              {t("see_all")}
            </Button>
          </Link>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ProjectsPreview;
