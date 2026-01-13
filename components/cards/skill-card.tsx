import {
  getLevelColor,
  getTypeColor,
  Skill,
  SkillLevel,
} from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { useTranslation } from "react-i18next";
import { Badge } from "../ui/badge";
import { CardHoverMotion } from "@/components/shared/animate";

const SkillCard = (val: Skill & { index: number }) => {
  const { setQueries } = useAppQueryParams();
  const { t } = useTranslation();

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <CardHoverMotion
      className={cn(
        "group overflow-hidden relative flex flex-col items-center justify-center rounded-xl md:rounded-2xl border bg-card p-3 sm:p-4 md:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg",
        hoveredId === val.id && "z-10"
      )}
      onMouseEnter={() => setHoveredId(val.id)}
      onMouseLeave={() => setHoveredId(null)}>
      <Badge
        onClick={(e) => {
          e.stopPropagation();
          setQueries({ skill_type: val.type });
        }}
        className={cn(
          "absolute start-0 z-40 cursor-pointer top-2 w-fit rounded-e-full border px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium transition-all duration-300 hover:opacity-80",
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

      <h3 className="english_font mb-1 sm:mb-2 text-center text-xs sm:text-sm font-semibold">
        {val.name}
      </h3>

      <Button
        onClick={(e) => {
          e.stopPropagation();
          setQueries({ skill_level: val.level });
        }}
        className={cn(
          "rounded-full border px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium transition-all duration-300 hover:opacity-80 w-full",
          getLevelColor(val.level)
        )}>
        {t(`skills.${val.level}` as any)}
      </Button>

      <div className="absolute inset-0 -z-10 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </CardHoverMotion>
  );
};

export default SkillCard;
