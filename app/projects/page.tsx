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
import { projects } from "@/lib/data/projects";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProjectCard from "@/components/cards/project-card";
interface FilterState {
  types: (
    | "web"
    | "app"
    | "system"
    | "simple dashboard"
    | "complex dashboard"
    | "game"
  )[];
  tags: ("production" | "learning" | "university" | "down")[];
  starredOnly: boolean;
  techs: string[];
  hasPublicGit: boolean | null; // null = no filter, true/false = filter
  hasLiveUrl: boolean | null;
}

const allTypes = [
  "web",
  "app",
  "system",
  "simple dashboard",
  "complex dashboard",
  "game",
] as const;
const allTags = ["production", "learning", "university", "down"] as const;

const page = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, [projects]);

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
  }, [filters]);
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
      className="relative py-20 px-6 space-y-10 sm:space-y-1"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            My Projects
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            Showcasing all of my projects and technical achievements
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2"
                >
                  <FilterIcon className="h-5 w-5" />
                  Filters
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
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Adjust project filters below
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
                    <Label htmlFor="filter-starred">Starred Only</Label>
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
                          }
                        >
                          Public Git:{" "}
                          {filters.hasPublicGit === null
                            ? "All"
                            : filters.hasPublicGit
                            ? "Yes"
                            : "No"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: null }))
                            }
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: true }))
                            }
                          >
                            Yes
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: false }))
                            }
                          >
                            No
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            filters.hasLiveUrl === null ? "outline" : "default"
                          }
                        >
                          Has Live URL:{" "}
                          {filters.hasLiveUrl === null
                            ? "All"
                            : filters.hasLiveUrl
                            ? "Yes"
                            : "No"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: null }))
                            }
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: true }))
                            }
                          >
                            Yes
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: false }))
                            }
                          >
                            No
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      Project Types
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTypes.map((type) => {
                        const isSelected = filters.types.includes(type);
                        return (
                          <Button
                            key={type}
                            variant={isSelected ? "default" : "outline"}
                            onClick={() =>
                              setFilters((f) => {
                                const newTypes = isSelected
                                  ? f.types.filter((t) => t !== type)
                                  : [...f.types, type];
                                return { ...f, types: newTypes };
                              })
                            }
                            size="sm"
                            className="rounded-full"
                          >
                            {type}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">Tags</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTags.map((tag) => {
                        const isSelected = filters.tags.includes(tag);
                        return (
                          <Button
                            key={tag}
                            variant={isSelected ? "default" : "outline"}
                            onClick={() =>
                              setFilters((f) => {
                                const newTags = isSelected
                                  ? f.tags.filter((t) => t !== tag)
                                  : [...f.tags, tag];
                                return { ...f, tags: newTags };
                              })
                            }
                            size="sm"
                            className="rounded-full"
                          >
                            {tag}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="max-w-md mx-auto">
                    <p className="mb-1 font-semibold text-center">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTechs.map((tech) => {
                        const isSelected = filters.techs.includes(tech);
                        return (
                          <Button
                            key={tech}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className="rounded-full"
                            onClick={() =>
                              setFilters((f) => {
                                const newTechs = isSelected
                                  ? f.techs.filter((t) => t !== tech)
                                  : [...f.techs, tech];
                                return { ...f, techs: newTechs };
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
                        Close Filters
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
                      }
                    >
                      Clear Filters
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
                }
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No projects found matching filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default page;
