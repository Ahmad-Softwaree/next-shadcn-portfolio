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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import Search from "@/components/shared/Search";
import NoData from "@/components/shared/NoData";
import { useLocale, useTranslations } from "use-intl";
import { Tool, toolTypes } from "@/lib/data/tools";
import { useToolsQueries } from "@/hooks/useToolsQueries";
import ToolsHeader from "./ToolsHeader";
import { countActiveFilters } from "@/lib/functions";
import ToolTypeBtn from "../btn/tool-type-btn";
import ToolsGrid from "./ToolsGrid";
function ToolsContent({ data }: { data: Tool[] }) {
  const t = useTranslations("tools");
  const global_t = useTranslations();
  const locale = useLocale();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [toolsQueries, setToolsQueries] = useToolsQueries();
  const isFilterActive = useMemo(() => {
    return Object.values(toolsQueries).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return value === "true";
    });
  }, [toolsQueries]);

  return (
    <section
      id="tools"
      className="relative py-20 px-6 space-y-10 sm:space-y-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <ToolsHeader />
          <div className="w-full max-w-md ">
            <Search />
          </div>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2">
                  <FilterIcon className="h-4 w-4" />
                  {global_t("common.filters")}
                  {isFilterActive && (
                    <Badge className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {countActiveFilters(toolsQueries)}
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
                {/* Starred Only */}
                <div className="flex mx-auto items-center space-x-2">
                  <Checkbox
                    id="starred"
                    checked={toolsQueries.starred_only == "true"}
                    onCheckedChange={(checked) => {
                      setToolsQueries((prev: any) => ({
                        ...prev,
                        starred_only:
                          toolsQueries.starred_only == "true" ? "" : "true",
                      }));
                    }}
                  />
                  <label
                    htmlFor="starred"
                    className="text-sm font-medium cursor-pointer">
                    {t("starred_only")}
                  </label>
                </div>
                <Separator />
                <div className="mt-6 space-y-6">
                  {/* Types Filter */}
                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      {t("filter_types")}
                    </Label>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {toolTypes.map((type) => (
                        <ToolTypeBtn key={type} type={type} />
                      ))}
                    </div>
                  </div>

                  {isFilterActive && (
                    <>
                      <Separator />
                      <div className="mt-6 grid grid-cols-2 gap-5 justify-between">
                        <SheetClose asChild>
                          <Button variant="default">
                            {global_t("common.close")}
                          </Button>
                        </SheetClose>
                        <Button
                          variant="outline"
                          onClick={() => setToolsQueries(null)}>
                          {global_t("common.cancel")}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            {isFilterActive && (
              <Button variant="outline" onClick={() => setToolsQueries(null)}>
                {global_t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {data.length === 0 ? <NoData /> : <ToolsGrid data={data} />}
      </div>
    </section>
  );
}

export default ToolsContent;
