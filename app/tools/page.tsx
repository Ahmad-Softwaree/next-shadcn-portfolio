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
import { allTypes, tools, ToolType } from "@/lib/data/tools";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import SpecialToolCard from "@/components/cards/special-tool-card";
import Search from "@/components/Search";
import NoData from "@/components/NoData";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { useTranslation } from "react-i18next";
import { getTypeConfig } from "@/lib/config/tool-filters";
import { cn } from "@/lib/utils";

type FilterState = {
  types: ToolType[];
  starredOnly: boolean;
};

function ToolsContent() {
  const { t } = useTranslation();
  const { queries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";

  const [sheetOpen, setSheetOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    types: [],
    starredOnly: false,
  });

  // Filtering logic
  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      // Search filter
      if (searchQuery) {
        const name = String(t(tool.nameKey as any)).toLowerCase();
        const description = String(t(tool.descriptionKey as any)).toLowerCase();
        const matchesSearch =
          name.includes(searchQuery) ||
          description.includes(searchQuery) ||
          tool.type.toLowerCase().includes(searchQuery);
        if (!matchesSearch) return false;
      }

      // Filter by types if selected
      if (filters.types.length > 0) {
        if (!filters.types.includes(tool.type)) return false;
      }

      // Filter starred
      if (filters.starredOnly && !tool.starred) return false;

      return true;
    });
  }, [filters, searchQuery, t]);

  const isFilterActive = useMemo(() => {
    return filters.starredOnly || filters.types.length > 0;
  }, [filters]);

  return (
    <section
      id="tools"
      className="relative py-20 px-6 space-y-10 sm:space-y-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("tools.title")}
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            {t("tools.subtitle")}
          </p>

          <div className="w-full max-w-md mt-4">
            <Search placeholder={t("tools.search_placeholder")} />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" />
                  {t("common.filters")}
                  {isFilterActive && (
                    <Badge
                      variant="destructive"
                      className="ml-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                      {filters.types.length + (filters.starredOnly ? 1 : 0)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{t("common.filters")}</SheetTitle>
                  <SheetDescription>
                    {t("tools.adjust_filters")}
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-6 space-y-6">
                  {/* Types Filter */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      {t("tools.filter_types")}
                    </Label>
                    <div className="space-y-3">
                      {allTypes.map((type) => {
                        const typeConfig = getTypeConfig(type);
                        const translateType = (type: string) => {
                          const key = type.replace(/\s+/g, "_").toLowerCase();
                          const translated = t(`tools.types.${key}` as any);
                          return translated === `tools.types.${key}`
                            ? type
                            : translated;
                        };

                        return (
                          <div
                            key={type}
                            className="flex items-center space-x-2">
                            <Checkbox
                              id={`type-${type}`}
                              checked={filters.types.includes(type)}
                              onCheckedChange={(checked) => {
                                setFilters((prev) => ({
                                  ...prev,
                                  types: checked
                                    ? [...prev.types, type]
                                    : prev.types.filter((t) => t !== type),
                                }));
                              }}
                            />
                            <label
                              htmlFor={`type-${type}`}
                              className="text-sm cursor-pointer flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={cn(
                                  "text-xs font-medium",
                                  typeConfig.color,
                                  typeConfig.bgColor,
                                  typeConfig.borderColor
                                )}>
                                {translateType(type)}
                              </Badge>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Starred Only */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="starred"
                      checked={filters.starredOnly}
                      onCheckedChange={(checked) => {
                        setFilters((prev) => ({
                          ...prev,
                          starredOnly: Boolean(checked),
                        }));
                      }}
                    />
                    <label
                      htmlFor="starred"
                      className="text-sm font-medium cursor-pointer">
                      {t("tools.starred_only")}
                    </label>
                  </div>

                  <Separator />

                  {/* Clear Filters */}
                  {isFilterActive && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setFilters({
                          types: [],
                          starredOnly: false,
                        });
                      }}>
                      Clear All Filters
                    </Button>
                  )}
                </div>

                <SheetClose asChild>
                  <Button className="w-full mt-6">{t("common.close")}</Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Tools - Special Layout */}
        {filteredTools.length === 0 ? (
          <NoData />
        ) : (
          <div className="space-y-12 mt-12">
            {filteredTools.map((tool, index) => (
              <SpecialToolCard key={tool.id} {...tool} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function ToolsPage() {
  return (
    <Suspense>
      <ToolsContent />
    </Suspense>
  );
}
