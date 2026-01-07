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

type FilterState = {
  types: ProjectType[];
  tags: ProjectTag[];
  starredOnly: boolean;
  techs: Technology[];
  hasPublicGit: boolean | null;
  hasLiveUrl: boolean | null;
};

function ProjectsContent() {
  const { t } = useTranslation();
  const { queries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";

  const [sheetOpen, setSheetOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    types: [],
    tags: [],
    starredOnly: false,
    techs: [],
    hasPublicGit: null,
    hasLiveUrl: null,
  });

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Search filter
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

      // Filter by types if selected
      if (filters.types.length > 0) {
        if (!p.types || !p.types.some((t) => filters.types.includes(t)))
          return false;
      }
      // Filter by tags if selected
      if (filters.tags.length > 0 && (!p.tag || !filters.tags.includes(p.tag)))
        return false;

      // Filter starred
      if (filters.starredOnly && !p.starred) return false;

      // Filter technologies: all selected techs must be present in project techs
      if (filters.techs.length > 0) {
        if (!filters.techs.every((tech) => p.technologies.includes(tech)))
          return false;
      }

      // Filter public git
      if (filters.hasPublicGit !== null) {
        const hasGit = p.gits && p.gits.length > 0;
        if (filters.hasPublicGit !== hasGit) return false;
      }

      // Filter live URL
      if (filters.hasLiveUrl !== null) {
        const hasUrl = Boolean(p.liveUrl && p.liveUrl.trim() !== "");
        if (filters.hasLiveUrl !== hasUrl) return false;
      }

      return true;
    });
  }, [filters, searchQuery]);
  const isFilterActive = useMemo(() => {
    return (
      filters.starredOnly ||
      filters.types.length > 0 ||
      filters.tags.length > 0 ||
      filters.techs.length > 0 ||
      filters.hasPublicGit !== null ||
      filters.hasLiveUrl !== null
    );
  }, [filters]);

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

              <SheetContent side="right" className="overflow-auto">
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
                      checked={filters.starredOnly}
                      onCheckedChange={(checked: any) =>
                        setFilters((f) => ({ ...f, starredOnly: !!checked }))
                      }
                    />
                    <Label htmlFor="filter-starred">
                      {t("projects.starred_only")}
                    </Label>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            filters.hasPublicGit === null
                              ? "outline"
                              : "default"
                          }>
                          {t("projects.has_public_git")}:{" "}
                          {filters.hasPublicGit === null
                            ? t("common.all")
                            : filters.hasPublicGit
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
                              setFilters((f) => ({ ...f, hasPublicGit: null }))
                            }>
                            {t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: true }))
                            }>
                            {t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: false }))
                            }>
                            {t("common.no")}
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            filters.hasLiveUrl === null ? "outline" : "default"
                          }>
                          {t("projects.has_live_url")}:{" "}
                          {filters.hasLiveUrl === null
                            ? t("common.all")
                            : filters.hasLiveUrl
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
                              setFilters((f) => ({ ...f, hasLiveUrl: null }))
                            }>
                            {t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: true }))
                            }>
                            {t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: false }))
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
                        const isSelected = filters.types.includes(type);
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
                              setFilters((f) => {
                                const newTypes = isSelected
                                  ? f.types.filter((t) => t !== type)
                                  : [...f.types, type];
                                return { ...f, types: newTypes };
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
                        const isSelected = filters.tags.includes(tag);
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
                              setFilters((f) => {
                                const newTags = isSelected
                                  ? f.tags.filter((t) => t !== tag)
                                  : [...f.tags, tag];
                                return { ...f, tags: newTags };
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
                        const isSelected = filters.techs.includes(tech);
                        return (
                          <Button
                            key={tech}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className="english_font rounded-full"
                            onClick={() =>
                              setFilters((f) => {
                                const newTechs = isSelected
                                  ? f.techs.filter((t) => t !== tech)
                                  : [...f.techs, tech];
                                return { ...f, techs: newTechs };
                              })
                            }>
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
                        setFilters({
                          types: [],
                          tags: [],
                          starredOnly: false,
                          techs: [],
                          hasPublicGit: null,
                          hasLiveUrl: null,
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
                  setFilters({
                    types: [],
                    tags: [],
                    starredOnly: false,
                    techs: [],
                    hasPublicGit: null,
                    hasLiveUrl: null,
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
              <StaggerItem key={index}>
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
