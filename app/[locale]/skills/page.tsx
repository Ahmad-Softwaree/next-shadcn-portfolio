"use client";

import { AnimateOnScroll } from "@/components/shared/animate";
import { useMemo } from "react";
import NoData from "@/components/shared/NoData";
import { useSkillQueries } from "@/hooks/useSkillQueries";
import { getSkillsPage } from "@/lib/fetch/skills.action";
import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsFilter from "@/components/skills/SkillsFilter";
import SkillsGrid from "@/components/skills/SkillsGrid";

export default function SkillsPage() {
  const [{ skill_level, skill_type }] = useSkillQueries();
  const data = useMemo(
    () => getSkillsPage(skill_level, skill_type),
    [skill_level, skill_type]
  );

  return (
    <div className="min-h-screen py-12 md:py-20 mx-auto max-w-7xl">
      <AnimateOnScroll className="gap-0" animation="fade-up">
        <SkillsHeader />
        <SkillsFilter level type />
        {data.length > 0 ? <SkillsGrid data={data} /> : <NoData />}
      </AnimateOnScroll>
    </div>
  );
}
