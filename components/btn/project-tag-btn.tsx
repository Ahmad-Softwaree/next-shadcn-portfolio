import React from "react";
import { Button } from "../ui/button";
import { ProjectTag } from "@/lib/data/projects";
import { useTranslations } from "next-intl";
import { useProjectQueries } from "@/hooks/useProjectQueries";
import { cn } from "@/lib/utils";
import { getProjectTagConfig } from "@/lib/config/project-filters";

const ProjectTagBtn = ({ tag }: { tag: ProjectTag }) => {
  const t = useTranslations("projects");
  const [{ project_tags }, setProjectQueries] = useProjectQueries();
  const config = getProjectTagConfig(tag);

  return (
    <Button
      data-selected={project_tags?.includes(tag) ? "true" : "false"}
      onClick={() =>
        setProjectQueries({
          project_tags: project_tags?.includes(tag)
            ? project_tags.filter((t) => t !== tag)
            : [...(project_tags || []), tag],
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
      {t(`tags.${tag}` as any)}
    </Button>
  );
};

export default ProjectTagBtn;
