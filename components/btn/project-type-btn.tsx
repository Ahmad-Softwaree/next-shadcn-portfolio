import React from "react";
import { Button } from "../ui/button";
import { ProjectType } from "@/lib/data/projects";
import { useTranslations } from "next-intl";
import { useProjectQueries } from "@/hooks/useProjectQueries";
import { cn } from "@/lib/utils";
import { getProjectTypeConfig } from "@/lib/config/project-filters";

const ProjectTypeBtn = ({ type }: { type: ProjectType }) => {
  const t = useTranslations("projects");
  const [{ project_types }, setProjectQueries] = useProjectQueries();
  const config = getProjectTypeConfig(type);

  return (
    <Button
      data-selected={project_types?.includes(type) ? "true" : "false"}
      onClick={() =>
        setProjectQueries({
          project_types: project_types?.includes(type)
            ? project_types.filter((t) => t !== type)
            : [...(project_types || []), type],
        })
      }
      size="sm"
      variant="outline"
      className={cn(
        "w-fit rounded-full border transition-all duration-200",
        config.bgColor,
        config.color,
        config.borderColor
      )}>
      {t(`types.${type}` as any)}
    </Button>
  );
};

export default ProjectTypeBtn;
