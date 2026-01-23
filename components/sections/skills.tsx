"use client";

import { useTranslations } from "next-intl";
import skills, {
  getLevelColor,
  levelOrder,
  levels,
  SkillLevel,
} from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import {
  AnimateOnScroll,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/animate";
import { Button } from "../ui/button";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import SkillCard from "../cards/skill-card";
import { useState } from "react";
import { Link } from "@/i18n/navigation";

const SKILLS_DISPLAY_LIMIT = 15;

export function Skills() {
  const t = useTranslations();
  const { queries, setQueries } = useAppQueryParams();

  const sortedSkills = [...skills].sort(
    (a, b) => (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0)
  );

  const filteredSkills = queries.skill_level
    ? sortedSkills.filter((skill) => skill.level === queries.skill_level)
    : sortedSkills;

  const displayedSkills = filteredSkills.slice(0, SKILLS_DISPLAY_LIMIT);
  const hasMoreSkills = filteredSkills.length > SKILLS_DISPLAY_LIMIT;

  return (
    <AnimateOnScroll animation="fade-up">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-4">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("skills.title" as any))}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {String(t("skills.subtitle" as any))}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("skills.total_skills", { count: skills.length })}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
            <Button
              onClick={() => setQueries({ skill_level: "" })}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted",
                !queries.skill_level
                  ? "bg-foreground text-background"
                  : "bg-background text-muted-foreground hover:text-foreground"
              )}>
              {t("skills.all")}
            </Button>
            {levels.map((level) => (
              <LevelBtn key={level} level={level} />
            ))}
          </div>

          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {displayedSkills.map((skill, index) => (
              <StaggerItem key={skill.id}>
                <SkillCard index={index} {...skill} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {hasMoreSkills && (
            <div className="mt-8 flex justify-center">
              <Link href="/skills">
                <Button
                  variant="outline"
                  className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105">
                  {t("common.see_all_skills")}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </AnimateOnScroll>
  );
}

export const LevelBtn = ({ level }: { level: SkillLevel }) => {
  const t = useTranslations();
  const { queries, setQueries } = useAppQueryParams();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        setQueries({
          skill_level: level === queries.skill_level ? "" : level,
        })
      }
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted",
        queries.skill_level === level || isHovered
          ? getLevelColor(level)
          : "bg-background text-muted-foreground hover:text-foreground"
      )}>
      {t(`skills.${level}` as any)}
    </Button>
  );
};
