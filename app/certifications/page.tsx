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
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CertificationCard from "@/components/cards/certification-card";
import certificates, {
  allTypes,
  CertificateType,
} from "@/lib/data/certifications";
import Search from "@/components/Search";
import NoData from "@/components/NoData";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { useTranslation } from "react-i18next";
import { getCertificateTypeConfig } from "@/lib/config/certification-filters";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type FilterState = {
  types: CertificateType[];
  starredOnly: boolean;
};

function CertificationsContent() {
  const { t } = useTranslation();
  const { queries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";

  const [sheetOpen, setSheetOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    types: [],
    starredOnly: false,
  });

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return certificates.filter((p) => {
      // Search filter
      if (searchQuery) {
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery) ||
          p.type.toLowerCase().includes(searchQuery);
        if (!matchesSearch) return false;
      }

      if (filters.types.length > 0) {
        if (p.type !== filters.types[0]) return false;
      }
      if (filters.starredOnly && !p.starred) return false;
      return true;
    });
  }, [filters, searchQuery]);
  const isFilterActive = useMemo(() => {
    return filters.starredOnly || filters.types.length > 0;
  }, [filters]);

  return (
    <section
      id="certifications"
      className="relative py-20 px-6 space-y-10 sm:space-y-1">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t("certifications.title")}
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            {t("certifications.subtitle")}
          </p>

          <div className="w-full max-w-md mt-4">
            <Search placeholder={t("certifications.search_placeholder")} />
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
                    {t("certifications.adjust_filters")}
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
                      {t("certifications.starred_only")}
                    </Label>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("certifications.filter_types")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTypes.map((type) => {
                        const isSelected = filters.types.includes(type);
                        const config = getCertificateTypeConfig(type);
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
                              "english_font rounded-full border transition-all duration-200",
                              isSelected && config.bgColor,
                              isSelected && config.color,
                              isSelected && config.borderColor
                            )}>
                            {type}
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
                          starredOnly: false,
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
                    starredOnly: false,
                  })
                }>
                {t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}>
            {filteredProjects.map((certificate, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}>
                <CertificationCard {...certificate} />
              </motion.div>
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
      <CertificationsContent />
    </Suspense>
  );
}
