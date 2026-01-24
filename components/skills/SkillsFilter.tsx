import React from "react";
import { Button } from "../ui/button";
import { useSkillQueries } from "@/hooks/useSkillQueries";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { levels, types } from "@/lib/data/skills";
import { SkillLevelBtn } from "../btn/skill-level-btn";
import { SkillTypeBtn } from "../btn/skill-type-btn";

const SkillsFilter = ({ level, type }: { level?: boolean; type?: boolean }) => {
  const t = useTranslations("skills");
  const [{ skill_level, skill_type }, setSkillQueries] = useSkillQueries();

  return (
    <div className="w-full flex flex-col  justify-center items-center">
      {level && (
        <div className="mb-4 flex flex-wrap justify-center gap-2 sm:mb-5">
          <Button
            onClick={() => setSkillQueries({ skill_level: null })}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted hover:text-foreground",
              !skill_level
                ? "bg-foreground text-background"
                : "bg-background text-muted-foreground hover:text-foreground"
            )}>
            {t("all")}
          </Button>
          {levels.map((level) => (
            <SkillLevelBtn key={level} level={level} />
          ))}
        </div>
      )}

      {type && (
        <div className="mb-4 flex flex-wrap justify-center gap-2 sm:mb-5">
          <Button
            onClick={() => setSkillQueries({ skill_type: null })}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all hover:bg-muted hover:text-foreground",
              !skill_type
                ? "bg-foreground text-background"
                : "bg-background text-muted-foreground hover:text-foreground"
            )}>
            {t("all")}
          </Button>
          {types.map((type) => (
            <SkillTypeBtn key={type} type={type} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillsFilter;
