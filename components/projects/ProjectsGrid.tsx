import { Project } from "@/lib/data/projects";
import React from "react";
import { StaggerContainer, StaggerItem } from "../shared/animate";
import { useProjectQueries } from "@/hooks/useProjectQueries";
import ProjectCard from "../cards/project-card";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { usePathname } from "@/i18n/navigation";

const ProjectsGrid = ({ data }: { data: Project[] }) => {
  let pathname = usePathname();
  let isProjectsPage = pathname === "/projects";
  const [projectQueries] = useProjectQueries();
  const [searchQuery] = useSearchQuery();
  const gridKey = React.useMemo(
    () =>
      `${Object.values(projectQueries).join("-")}-${searchQuery.search || "all"}`,
    [projectQueries, searchQuery.search]
  );

  if (isProjectsPage) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard {...project} />
          </StaggerItem>
        ))}
      </div>
    );
  }
  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      key={gridKey}>
      {data.slice(0, 6).map((project) => (
        <StaggerItem key={project.id}>
          <ProjectCard {...project} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default ProjectsGrid;
