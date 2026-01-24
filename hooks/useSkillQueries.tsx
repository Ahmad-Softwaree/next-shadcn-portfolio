"use client";

import { SkillLevel, SkillType } from "@/lib/data/skills";
import { useQueryStates, parseAsStringEnum } from "nuqs";

export function useSkillQueries() {
  return useQueryStates({
    skill_level: parseAsStringEnum<SkillLevel>(Object.values(SkillLevel)),
    skill_type: parseAsStringEnum<SkillType>(Object.values(SkillType)),
  });
}
