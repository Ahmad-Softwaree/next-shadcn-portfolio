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
import { useState, useMemo } from "react";
import {
  Project,
  ProjectTag,
  projectTags,
  ProjectTech,
  projectTechs,
  ProjectType,
  projectTypes,
} from "@/lib/data/projects";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Search from "@/components/shared/Search";
import NoData from "@/components/shared/NoData";
import { useLocale, useTranslations } from "use-intl";
import { useProjectQueries } from "@/hooks/useProjectQueries";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectTypeBtn from "@/components/btn/project-type-btn";
import ProjectTagBtn from "@/components/btn/project-tag-btn";
import ProjectTechBtn from "@/components/btn/project-tech-btn";
import { countActiveFilters } from "@/lib/functions";

function ProjectsContent({ data }: { data: Project[] }) {
  const t = useTranslations("projects");
  const global_t = useTranslations();
  const locale = useLocale();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [projectQueries, setProjectQueries] = useProjectQueries();
  const isFilterActive = useMemo(() => {
    return Object.values(projectQueries).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return value === "true";
    });
  }, [projectQueries]);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 space-y-10 sm:space-y-1">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <ProjectsHeader />
          <div className="w-full max-w-md ">
            <Search />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2">
                  <FilterIcon className="h-5 w-5" />
                  {global_t("common.filters")}
                  {isFilterActive && (
                    <Badge className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {countActiveFilters(projectQueries)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side={locale === "en" ? "right" : "left"}
                className="overflow-auto p-5">
                <SheetHeader>
                  <SheetTitle>{global_t("common.filters")}</SheetTitle>
                  <SheetDescription>{t("adjust_filters")}</SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-4 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mx-auto">
                    <Checkbox
                      id="filter-starred"
                      checked={projectQueries.starred_only === "true"}
                      onCheckedChange={(checked: boolean) =>
                        setProjectQueries({
                          starred_only: checked ? "true" : null,
                        })
                      }
                    />
                    <Label htmlFor="filter-starred">{t("starred_only")}</Label>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-4 justify-center">
                    {/* Git Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            !projectQueries.has_public_git
                              ? "outline"
                              : "default"
                          }>
                          {t("has_public_git")}:{" "}
                          {!projectQueries.has_public_git
                            ? global_t("common.all")
                            : projectQueries.has_public_git === "true"
                              ? global_t("common.yes")
                              : global_t("common.no")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_public_git: null })
                            }>
                            {global_t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_public_git: "true" })
                            }>
                            {global_t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_public_git: "false" })
                            }>
                            {global_t("common.no")}
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    {/* Live URL Filter */}
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            !projectQueries.has_live_url ? "outline" : "default"
                          }>
                          {t("has_live_url")}:{" "}
                          {!projectQueries.has_live_url
                            ? global_t("common.all")
                            : projectQueries.has_live_url === "true"
                              ? global_t("common.yes")
                              : global_t("common.no")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_live_url: null })
                            }>
                            {global_t("common.all")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_live_url: "true" })
                            }>
                            {global_t("common.yes")}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setProjectQueries({ has_live_url: "false" })
                            }>
                            {global_t("common.no")}
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("filter_types")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {projectTypes.map((type: ProjectType) => {
                        return <ProjectTypeBtn key={type} type={type} />;
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("filter_tags")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {projectTags.map((tag: ProjectTag) => {
                        return <ProjectTagBtn key={tag} tag={tag} />;
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="max-w-md mx-auto">
                    <p className="mb-1 font-semibold text-center">
                      {t("filter_tech")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {projectTechs.map((tech: ProjectTech) => {
                        return <ProjectTechBtn key={tech} tech={tech} />;
                      })}
                    </div>
                  </div>
                  {isFilterActive && (
                    <>
                      <Separator />
                      <div className="mt-6 grid grid-cols-2 gap-5 justify-between w-full">
                        <SheetClose asChild>
                          <Button variant="default">
                            {global_t("common.close")}
                          </Button>
                        </SheetClose>
                        <Button
                          variant="outline"
                          onClick={() => setProjectQueries(null)}>
                          {global_t("common.cancel")}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            {isFilterActive && (
              <Button variant="outline" onClick={() => setProjectQueries(null)}>
                {global_t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {data.length > 0 ? <ProjectsGrid data={data} /> : <NoData />}
      </div>
    </section>
  );
}

export default ProjectsContent;
