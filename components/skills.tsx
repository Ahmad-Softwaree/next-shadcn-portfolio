"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useQueryState } from "nuqs";
import skills, { Skill } from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import { AnimateOnScroll } from "@/components/shared/animate";
import { Button } from "./ui/button";
import { useAppQueryParams } from "@/hooks/useAppQuery";

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner":
      return "bg-blue-500/20 text-blue-500 border-blue-500/30";
    case "Intermediate":
      return "bg-green-500/20 text-green-500 border-green-500/30";
    case "Advanced":
      return "bg-orange-500/20 text-orange-500 border-orange-500/30";
    case "Expert":
      return "bg-purple-500/20 text-purple-500 border-purple-500/30";
    default:
      return "bg-gray-500/20 text-gray-500 border-gray-500/30";
  }
};

const getLevelTranslationKey = (level: string): string => {
  switch (level) {
    case "Beginner":
      return "skills.beginner";
    case "Intermediate":
      return "skills.intermediate";
    case "Advanced":
      return "skills.advanced";
    case "Expert":
      return "skills.expert";
    default:
      return "skills.beginner";
  }
};

const levelOrder: Record<string, number> = {
  Expert: 4,
  Advanced: 3,
  Intermediate: 2,
  Beginner: 1,
};

export function Skills() {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
 const {queries,setQueries} =useAppQueryParams()

  const sortedSkills = [...skills].sort(
    (a, b) => (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0)
  );

  const filteredSkills = queries.skill_level
    ? sortedSkills.filter((skill) => skill.level === queries.skill_level)
    : sortedSkills;

  const levels = ["Expert", "Advanced", "Intermediate", "Beginner"];

  return (
    <AnimateOnScroll animation="fade-up">
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("skills.title" as any))}
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {String(t("skills.subtitle" as any))}
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
            <Button
              onClick={() => setQueries({skill_level:""})}
              className={cn(
                "english_font rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted",
                !queries.skill_level
                  ? "bg-foreground text-background"
                  : "bg-background text-muted-foreground hover:text-foreground"
              )}>
              All
            </Button>
            {levels.map((level) => (
              <Button 
                key={level}
                onClick={() =>
                  setQueries({skill_level:level === queries.skill_level ? "" : level})
                }
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted",
                  queries.skill_level === level
                    ? getLevelColor(level)
                    : "bg-background text-muted-foreground hover:text-foreground"
                )}>
                {String(t(getLevelTranslationKey(level) as any))}
              </Button  >
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className={cn(
                  "group relative flex flex-col items-center justify-center rounded-xl md:rounded-2xl border bg-card p-3 sm:p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                  "animate-in fade-in slide-in-from-bottom-4",
                  hoveredId === skill.id && "z-10"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: "backwards",
                }}
                onMouseEnter={() => setHoveredId(skill.id)}
                onMouseLeave={() => setHoveredId(null)}>
                {/* Skill Image */}
                <div className="relative mb-2 sm:mb-3 md:mb-4 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
                  />
                </div>

                {/* Skill Name - Always in English with english_font class */}
                <h3 className="english_font mb-1 sm:mb-2 text-center text-xs sm:text-sm font-semibold">
                  {skill.name}
                </h3>

                {/* Skill Level Badge - Translated */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQueries({skill_level:skill.level});
                  }}
                  className={cn(
                    "rounded-full border px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium transition-all duration-300 hover:opacity-80",
                    getLevelColor(skill.level)
                  )}>
                  {String(t(getLevelTranslationKey(skill.level) as any))}
                </Button>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}
