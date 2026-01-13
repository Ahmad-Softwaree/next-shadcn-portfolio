"use client";

import { useTranslation } from "react-i18next";
import skills, {
  getLevelColor,
  getTypeColor,
  levelOrder,
  levels,
  types,
  SkillLevel,
  SkillType,
} from "@/lib/data/skills";
import { cn } from "@/lib/utils";
import {
  AnimateOnScroll,
  StaggeredGrid,
  StaggerItem,
} from "@/components/shared/animate";
import { Button } from "@/components/ui/button";
import SkillCard from "@/components/cards/skill-card";
import { useMemo, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import NoData from "@/components/NoData";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { Badge } from "@/components/ui/badge";

export default function SkillsPage() {
  const { t, i18n } = useTranslation();
  const { queries, setQueries } = useAppQueryParams();

  const [sheetOpen, setSheetOpen] = useState(false);

  const sortedSkills = [...skills].sort(
    (a, b) => (levelOrder[b.level] || 0) - (levelOrder[a.level] || 0)
  );

  const filteredSkills = useMemo(() => {
    return sortedSkills.filter((skill) => {
      if (queries.skill_type && skill.type !== queries.skill_type) {
        return false;
      }
      if (queries.skill_level && skill.level !== queries.skill_level)
        return false;

      return true;
    });
  }, [queries]);
  const isFilterActive = useMemo(() => {
    return Boolean(queries.skill_level) || Boolean(queries.skill_type);
  }, [queries]);

  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <AnimateOnScroll animation="fade-up">
          <div className="mb-8 text-center sm:mb-12">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("skills.title" as any))}
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {String(t("skills.subtitle" as any))}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("skills.total_skills", { count: skills.length })}
            </p>
          </div>

          {/* Filter Button & Level Filters */}
          <div className="mb-8 flex flex-col gap-4 sm:mb-10">
            <div className="flex flex-wrap justify-center gap-2">
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    className="relative flex items-center gap-2">
                    <Filter className="mr-2 h-4 w-4" />
                    {t("common.filters")}
                    {isFilterActive && (
                      <Badge className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                        {
                          [queries.skill_level, queries.skill_type].filter(
                            Boolean
                          ).length
                        }
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side={i18n.dir() === "rtl" ? "left" : "right"}
                  className="overflow-auto p-5">
                  <SheetHeader>
                    <SheetTitle>{t("common.filters")}</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 space-y-6">
                    {/* Level Filter */}
                    <div>
                      <h3 className="mb-3 text-sm font-semibold">
                        {t("skills.filter_by_level")}
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {levels.map((level) => (
                          <FilterLevelButton
                            key={level}
                            level={level}
                            isActive={queries.skill_level === level}
                            onClick={() =>
                              setQueries({
                                skill_level:
                                  queries.skill_level === level ? "" : level,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Type Filter */}
                    <div>
                      <h3 className="mb-3 text-sm font-semibold">
                        {t("skills.filter_by_type")}
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {types.map((type) => (
                          <FilterTypeButton
                            key={type}
                            type={type}
                            isActive={queries.skill_type === type}
                            onClick={() =>
                              setQueries({
                                skill_type:
                                  queries.skill_type === type ? "" : type,
                              })
                            }
                          />
                        ))}
                      </div>
                    </div>

                    {isFilterActive && (
                      <>
                        <Separator />
                        <div className="mt-6 grid grid-cols-2 gap-5 justify-between">
                          <SheetClose asChild>
                            <Button variant="default">
                              {t("common.close")}
                            </Button>
                          </SheetClose>
                          <Button
                            variant="outline"
                            onClick={() =>
                              setQueries({
                                skill_level: "",
                                skill_type: "",
                              })
                            }>
                            {t("common.cancel")}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
              {isFilterActive && (
                <Button
                  variant="outline"
                  onClick={() =>
                    setQueries({
                      skill_level: "",
                      skill_type: "",
                    })
                  }>
                  {t("common.cancel")}
                </Button>
              )}
            </div>
          </div>

          {/* Skills Grid */}
          {filteredSkills.length > 0 ? (
            <StaggeredGrid
              animationKey={`${queries.skill_level}-${queries.skill_type}`}
              className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredSkills.map((skill, index) => (
                <StaggerItem key={skill.id}>
                  <SkillCard index={index} {...skill} />
                </StaggerItem>
              ))}
            </StaggeredGrid>
          ) : (
            <NoData />
          )}
        </AnimateOnScroll>
      </div>
    </div>
  );
}

const FilterLevelButton = ({
  level,
  isActive,
  onClick,
}: {
  level: SkillLevel;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "w-fit justify-start rounded-full border px-4 py-2 text-sm font-medium transition-all",
        isActive || isHovered
          ? getLevelColor(level)
          : "bg-background text-muted-foreground hover:text-foreground"
      )}>
      {t(`skills.${level}` as any)}
    </Button>
  );
};

const FilterTypeButton = ({
  type,
  isActive,
  onClick,
}: {
  type: SkillType;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "w-fit justify-start rounded-full border px-4 py-2 text-sm font-medium transition-all",
        isActive || isHovered
          ? getTypeColor(type)
          : "bg-background text-muted-foreground hover:text-foreground"
      )}>
      {t(`skills.types.${type}` as any)}
    </Button>
  );
};
