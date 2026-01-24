import React from "react";
import { Button } from "../ui/button";
import { ProjectTech } from "@/lib/data/projects";
import { useProjectQueries } from "@/hooks/useProjectQueries";
import { cn } from "@/lib/utils";
import { getTechConfig } from "@/lib/config/technologies";

const ProjectTechBtn = ({ tech }: { tech: ProjectTech }) => {
  const [{ project_techs }, setProjectQueries] = useProjectQueries();
  const config = getTechConfig(tech);

  return (
    <Button
      data-selected={project_techs?.includes(tech) ? "true" : "false"}
      onClick={() =>
        setProjectQueries({
          project_techs: project_techs?.includes(tech)
            ? project_techs.filter((t) => t !== tech)
            : [...(project_techs || []), tech],
        })
      }
      size="sm"
      variant="outline"
      className={cn(
        "english_font w-fit rounded-full border transition-all duration-200",
        config.bgColor,
        config.color,
        config.borderColor
      )}>
      {config.displayName}
    </Button>
  );
};

export default ProjectTechBtn;
