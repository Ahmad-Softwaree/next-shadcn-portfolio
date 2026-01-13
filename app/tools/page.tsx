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
import { sortStarredFirst } from "@/lib/fucntions";
import { StaggeredGrid, StaggerItem } from "@/components/shared/animate";

function ToolsContent() {
  const { t, i18n } = useTranslation();
  const { queries, setQueries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";
  const [sheetOpen, setSheetOpen] = useState(false);
  const sortedData = sortStarredFirst(tools);

  // Filtering logic
  const filteredTools = useMemo(() => {
    return sortedData.filter((tool) => {
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
      if (queries.tool_types.length > 0) {
        if (!queries.tool_types.includes(tool.type)) return false;
      }

      // Filter starred
      if (queries.starred_only && !tool.starred) return false;

      return true;
    });
  }, [queries, searchQuery, t]);

  const isFilterActive = useMemo(() => {
    return queries.starred_only || queries.tool_types.length > 0;
  }, [queries]);

  return (
    <section
      id="tools"
      className="relative py-20 px-6 space-y-10 sm:space-y-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <div className="text-center sm:mb-4">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("tools.title" as any))}
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {String(t("tools.subtitle" as any))}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("tools.total_tools", { count: tools.length })}
            </p>
          </div>
          <div className="w-full max-w-md ">
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
                    <Badge className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {
                        [
                          queries.tool_types.length > 0,
                          queries.starred_only === "true",
                        ].filter(Boolean).length
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
                  <SheetDescription>
                    {t("tools.adjust_filters")}
                  </SheetDescription>
                </SheetHeader>
                {/* Starred Only */}
                <div className="flex mx-auto items-center space-x-2">
                  <Checkbox
                    id="starred"
                    checked={queries.starred_only == "true"}
                    onCheckedChange={(checked) => {
                      setQueries((prev: any) => ({
                        ...prev,
                        starred_only:
                          queries.starred_only == "true" ? "" : "true",
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
                <div className="mt-6 space-y-6">
                  {/* Types Filter */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      {t("tools.filter_types")}
                    </Label>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTypes.map((type) => (
                        <FilterTypeButton
                          key={type}
                          type={type}
                          isActive={queries.tool_types.includes(type)}
                          onClick={() =>
                            setQueries((prev: any) => ({
                              ...prev,
                              tool_types: prev.tool_types.includes(type)
                                ? prev.tool_types.filter((t: any) => t !== type)
                                : [...prev.tool_types, type],
                            }))
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
                          <Button variant="default">{t("common.close")}</Button>
                        </SheetClose>
                        <Button
                          variant="outline"
                          onClick={() =>
                            setQueries({
                              tool_types: [],
                              starred_only: "",
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
                    tool_types: [],
                    starred_only: "",
                  })
                }>
                {t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {/* Tools - Special Layout */}
        {filteredTools.length === 0 ? (
          <NoData />
        ) : (
          <StaggeredGrid
            animationKey={`${queries.tool_types.join("-")}-${queries.starred_only}-${searchQuery}`}
            className="space-y-12 mt-12">
            {filteredTools.map((tool, index) => (
              <StaggerItem key={tool.id}>
                <SpecialToolCard {...tool} index={index} />
              </StaggerItem>
            ))}
          </StaggeredGrid>
        )}
      </div>
    </section>
  );
}

const FilterTypeButton = ({
  type,
  isActive,
  onClick,
}: {
  type: ToolType;
  isActive: boolean;
  onClick: () => void;
}) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const typeConfig = getTypeConfig(type);

  const translateType = (type: string) => {
    const key = type.replace(/\s+/g, "_").toLowerCase();
    const translated = t(`tools.types.${key}` as any);
    return translated === `tools.types.${key}` ? type : translated;
  };

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      size="sm"
      variant="outline"
      className={cn(
        "w-fit rounded-full border transition-all duration-200",
        (isActive || isHovered) && typeConfig.bgColor,
        (isActive || isHovered) && typeConfig.color,
        (isActive || isHovered) && typeConfig.borderColor
      )}>
      {translateType(type)}
    </Button>
  );
};

export default function ToolsPage() {
  return (
    <Suspense>
      <ToolsContent />
    </Suspense>
  );
}
