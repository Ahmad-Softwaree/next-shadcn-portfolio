"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import { useState, useMemo, Suspense } from "react";
import {
  allTags,
  allTechs,
  allTypes,
  projects,
  ProjectTag,
  ProjectType,
  Technology,
} from "@/lib/data/projects";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProjectCard from "@/components/cards/project-card";
import Search from "@/components/Search";
import NoData from "@/components/NoData";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { useTranslation } from "react-i18next";
import { StaggerItem } from "@/components/shared/animate";
import { getTypeConfig, getTagConfig } from "@/lib/config/project-filters";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { getTechConfig } from "@/lib/config/technologies";


function ProjectsContent() {
  const { t,i18n } = useTranslation();
  const { queries,setQueries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";

  const [sheetOpen, setSheetOpen] = useState(false);



  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (searchQuery) {
        const title = String(t(p.titleKey as any)).toLowerCase();
        const description = String(t(p.descriptionKey as any)).toLowerCase();
        const matchesSearch =
          title.includes(searchQuery) ||
          description.includes(searchQuery) ||
          p.technologies.some((tech) =>
            tech.toLowerCase().includes(searchQuery)
          );
        if (!matchesSearch) return false;
      }

      if (queries.project_types.length > 0) {
        if (!p.types || !p.types.some((t) => queries.project_types.includes(t)))
          return false;
      }
      if (queries.project_tags.length > 0 && (!p.tag || !queries.project_tags.includes(p.tag)))
        return false;

      if (queries.starred_only === "true" && !p.starred) return false; 

      if (queries.project_techs.length > 0) {
        if (!queries.project_techs.every((tech) => p.technologies.includes(tech as Technology)))
          return false;
      }

      if (queries.has_public_git) {
        const requiredGit = queries.has_public_git === "true";
        const hasGit = Boolean(p.gits && p.gits.length > 0);
        if (requiredGit !== hasGit) return false;
      }

      if (queries.has_live_url) {
        const requiredUrl = queries.has_live_url === "true";
        const hasUrl = Boolean(p.liveUrl && p.liveUrl.trim() !== "");
        if (requiredUrl !== hasUrl) return false;
      }

      return true;
    });
  }, [queries, searchQuery]);
  const isFilterActive = useMemo(() => {
    return (
      queries.starred_only === "true" ||
      queries.project_types.length > 0 ||
      queries.project_tags.length > 0 ||
      queries.project_techs.length > 0 ||
      !!queries.has_public_git ||
      !!queries.has_live_url
    );
  }, [queries]);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 space-y-10 sm:space-y-1">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("projects.title")}
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            {t("projects.subtitle")}
          </p>

          <div className="w-full max-w-md mt-4">
            <Search placeholder={t("projects.search_placeholder")} />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2">
                  <FilterIcon className="h-5 w-5" />
                  {t("common.filters")}
                  {isFilterActive && (
                    <Badge
                      className="h-3 w-3 rounded-full px-1 font-mono tabular-nums absolute -top-1 -right-1 inline-flex"
                      variant="destructive"
                    />
                  )}
                </Button>
              </SheetTrigger>

              <SheetContent side={i18n.dir() === "rtl" ? "left" : "right"} className="overflow-auto">
                <SheetHeader>
                  <SheetTitle>{t("common.filters")}</SheetTitle>
                  <SheetDescription>
                    {t("projects.adjust_filters")}
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-4 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mx-auto">
                    <Checkbox
                      id="filter-starred"
                      checked={queries.starred_only === "true"}
                      onCheckedChange={(checked: boolean) =>
                        setQueries({ starred_only: checked ? "true" : null })
                      }
                    />
                    <Label htmlFor="filter-starred">
                      {t("projects.starred_only")}
                    </Label>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-4 justify-center">
                      {/* Git Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            !queries.has_public_git
                              ? "outline"
                              : "default"
                          }>
                          {t("projects.has_public_git")}:{" "}
                          {!queries.has_public_git
                            ? t("common.all")
                            : queries.has_public_git === "true"
                              ? t("common.yes")
                              : t("common.no")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_public_git: null })
                            }>
                            {t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_public_git: "true" })
                            }>
                            {t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_public_git: "false" })
                            }>
                            {t("common.no")}
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* Live URL Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            !queries.has_live_url ? "outline" : "default"
                          }>
                          {t("projects.has_live_url")}:{" "}
                          {!queries.has_live_url
                            ? t("common.all")
                            : queries.has_live_url === "true"
                              ? t("common.yes")
                              : t("common.no")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_live_url: null })
                            }>
                            {t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_live_url: "true" })
                            }>
                            {t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setQueries({ has_live_url: "false" })
                            }>
                            {t("common.no")}
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("projects.filter_types")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTypes.map((type) => {
                        const isSelected = queries.project_types.includes(type);
                        const config = getTypeConfig(type);
                        const translateType = (type: string) => {
                          const key = type.replace(/\s+/g, "_").toLowerCase();
                          const translated = t(`projects.types.${key}` as any);
                          return translated === `projects.types.${key}`
                            ? type
                            : translated;
                        };
                        return (
                          <Button
                            key={type}
                            variant="outline"
                            onClick={() =>
                              setQueries({
                                project_types: isSelected
                                  ? queries.project_types.filter((t) => t !== type)
                                  : [...queries.project_types, type],
                              })
                            }
                            size="sm"
                            className={cn(
                              "rounded-full border transition-all duration-200",
                              isSelected && config.bgColor,
                              isSelected && config.color,
                              isSelected && config.borderColor
                            )}>
                            {translateType(type)}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("projects.filter_tags")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTags.map((tag) => {
                        const isSelected = queries.project_tags.includes(tag);
                        const config = getTagConfig(tag);
                        const translateTag = (tag: string) => {
                          const translated = t(`projects.tag.${tag}` as any);
                          return translated === `projects.tag.${tag}`
                            ? tag
                            : translated;
                        };
                        return (
                          <Button
                            key={tag}
                            variant="outline"
                            onClick={() =>
                              setQueries({
                                project_tags: isSelected
                                  ? queries.project_tags.filter((t) => t !== tag)
                                  : [...queries.project_tags, tag],
                              })
                            }
                            size="sm"
                            className={cn(
                              "rounded-full border transition-all duration-200",
                              isSelected && config.bgColor,
                              isSelected && config.color,
                              isSelected && config.borderColor
                            )}>
                            {translateTag(tag)}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="max-w-md mx-auto">
                    <p className="mb-1 font-semibold text-center">
                      {t("projects.filter_tech")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTechs.map((tech) => {
                        const isSelected = queries.project_techs.includes(tech);
                        let config = getTechConfig(tech);
                        return (
                          <Button
                            key={tech}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className={cn('english_font rounded-full', isSelected && config.bgColor, isSelected && config.color, isSelected && config.borderColor)}
                            onClick={() =>
                              setQueries({
                                project_techs: isSelected
                                  ? queries.project_techs.filter((t) => t !== tech)
                                  : [...queries.project_techs, tech],
                              })
                            }
                            >
                            {tech}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <Separator />

                  <div className="mt-6 flex gap-5 justify-between">
                    <SheetClose asChild>
                      <Button variant="default" className="w-full">
                        {t("common.close")}
                      </Button>
                    </SheetClose>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setQueries({
                          project_types: null,
                          project_tags: null,
                          starred_only: null,
                          project_techs: null,
                          has_public_git: null,
                          has_live_url: null,
                        })
                      }>
                      {t("common.cancel")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            {isFilterActive && (
              <Button
                variant="outline"
                onClick={() =>
                  setQueries({
                    project_types: null,
                    project_tags: null,
                    starred_only: null,
                    project_techs: null,
                    has_public_git: null,
                    has_live_url: null,
                  })
                }>
                {t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            key={`${queries.project_types.join("-")}-${queries.project_tags.join("-")}-${queries.starred_only}-${queries.project_techs.join("-")}-${queries.has_public_git}-${queries.has_live_url}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}>
            {filteredProjects.map((project, index) => (
              <StaggerItem key={project.id}>
                <ProjectCard {...project} />
              </StaggerItem>
            ))}
          </motion.div>
        ) : (
          <NoData />
        )}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
