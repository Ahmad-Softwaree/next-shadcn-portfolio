"use client";
import { getLevelColor, getTypeColor, Skill } from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { CardHoverMotion } from "@/components/shared/animate";
import { useSkillQueries } from "@/hooks/useSkillQueries";

const SkillCard = (val: Skill) => {
  const [{}, setSkillQueries] = useSkillQueries();
  const t = useTranslations();

  return (
    <CardHoverMotion
      className={cn(
        "group relative flex flex-col items-center justify-center overflow-hidden",
        "rounded-xl md:rounded-2xl border bg-card p-3 sm:p-4 md:p-6",
        "transition-all duration-300",
        "hover:scale-105 hover:shadow-lg hover:z-10"
      )}>
      {/* Type Badge */}
      <Badge
        data-selected="true"
        onClick={(e) => {
          e.stopPropagation();
          setSkillQueries({ skill_type: val.type });
        }}
        className={cn(
          "absolute start-0 top-2 z-40 cursor-pointer w-fit rounded-e-full",
          "border px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium",
          "transition-all duration-300 hover:opacity-80",
          getTypeColor(val.type)
        )}>
        {t(`skills.types.${val.type}` as any)}
      </Badge>

      {/* Skill Image */}
      <div className="relative mb-2 sm:mb-3 md:mb-4 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={val.image}
          alt={val.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 64px"
        />
      </div>

      {/* Skill Name */}
      <h3 className="english_font mb-1 sm:mb-2 text-center text-xs sm:text-sm font-semibold">
        {val.name}
      </h3>

      {/* Level Button */}
      <Button
        data-selected="true"
        onClick={(e) => {
          e.stopPropagation();
          setSkillQueries({ skill_level: val.level });
        }}
        className={cn(
          "w-full rounded-full border px-2 py-0.5 sm:px-3 sm:py-1",
          "text-[10px] sm:text-xs font-medium transition-all duration-300",
          "hover:opacity-80",
          getLevelColor(val.level)
        )}>
        {t(`skills.${val.level}` as any)}
      </Button>

      {/* Hover Glow Background */}
      <div className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </CardHoverMotion>
  );
};

export default SkillCard;
