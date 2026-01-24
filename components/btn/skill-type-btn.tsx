import { useSkillQueries } from "@/hooks/useSkillQueries";
import { getTypeColor, SkillType } from "@/lib/data/skills";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export const SkillTypeBtn = ({ type }: { type: SkillType }) => {
  const t = useTranslations("skills");
  const [{ skill_type }, setSkillQueries] = useSkillQueries();
  return (
    <Button
      data-selected={skill_type === type ? "true" : "false"}
      onClick={() =>
        setSkillQueries({
          skill_type: type === skill_type ? null : type,
        })
      }
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all",
        "bg-background text-muted-foreground hover:text-foreground hover:bg-muted",
        getTypeColor(type),
        "data-[selected=true]:shadow data-[selected=true]:opacity-100",
        "hover:shadow hover:opacity-100"
      )}>
      {t(`types.${type}` as any)}
    </Button>
  );
};
