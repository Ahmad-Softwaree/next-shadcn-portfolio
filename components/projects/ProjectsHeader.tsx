import { useTranslations } from "next-intl";
import React from "react";
import { Badge } from "../ui/badge";
import { projects } from "@/lib/data/projects";

const ProjectsHeader = () => {
  const t = useTranslations("projects");

  return (
    <div className="mb-8 text-center sm:mb-12">
      <Badge variant="secondary" className="badge">
        {t("title")}
      </Badge>
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground">{t("subtitle")}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("total_projects", { count: projects.length })}
      </p>
    </div>
  );
};

export default ProjectsHeader;
