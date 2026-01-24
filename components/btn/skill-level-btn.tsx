import { useSkillQueries } from "@/hooks/useSkillQueries";
import { getLevelColor, SkillLevel } from "@/lib/data/skills";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const SkillLevelBtn = ({ level }: { level: SkillLevel }) => {
  const t = useTranslations("skills");
  const [{ skill_level }, setSkillQueries] = useSkillQueries();
  return (
    <Button
      data-selected={skill_level === level ? "true" : "false"}
      onClick={() =>
        setSkillQueries({
          skill_level: level === skill_level ? null : level,
        })
      }
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
        "bg-background text-muted-foreground hover:text-foreground hover:bg-muted",
        getLevelColor(level),
        "data-[selected=true]:shadow data-[selected=true]:opacity-100",
        "hover:shadow hover:opacity-100"
      )}>
      {t(level as any)}
    </Button>
  );
};
