"use client";
import { useTranslations } from "next-intl";
import { AnimateOnScroll } from "@/components/shared/animate";
import { Button } from "../ui/button";
import { useMemo } from "react";
import { Link } from "@/i18n/navigation";
import { getHomeSkills } from "@/lib/fetch/skills.action";
import { useSkillQueries } from "@/hooks/useSkillQueries";
import SkillsHeader from "../skills/SkillsHeader";
import SkillsFilter from "../skills/SkillsFilter";
import SkillsGrid from "../skills/SkillsGrid";

export function Skills() {
  const t = useTranslations("skills");
  const [{ skill_level }] = useSkillQueries();
  const data = useMemo(() => getHomeSkills(skill_level), [skill_level]);

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="skills" className="py-12 md:py-20 mx-auto max-w-6xl">
        <SkillsHeader />
        <SkillsFilter level />
        <SkillsGrid data={data} />
        <Button
          asChild
          variant="outline"
          className="group rounded-full px-6 py-2 text-sm font-medium transition-all hover:scale-105 mt-8 flex justify-center w-fit mx-auto">
          <Link href="/skills">{t("see_all")}</Link>
        </Button>
      </section>
    </AnimateOnScroll>
  );
}
