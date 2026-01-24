import skills from "@/lib/data/skills";
import { useTranslations } from "next-intl";
import React from "react";
import { Badge } from "../ui/badge";

const SkillsHeader = () => {
  const t = useTranslations("skills");
  return (
    <div className="mb-8 text-center sm:mb-12">
      <Badge variant="secondary" className="badge">
        {t("badge")}
      </Badge>
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        {t("title")}
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground">{t("subtitle")}</p>
      <p className="mt-2 text-sm text-muted-foreground">
        {t("total_skills", { count: skills.length })}
      </p>
    </div>
  );
};

export default SkillsHeader;
