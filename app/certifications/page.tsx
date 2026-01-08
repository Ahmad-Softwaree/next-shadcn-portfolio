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
import { useState, useMemo, Suspense, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import CertificationCard from "@/components/cards/certification-card";
import certificates, {
  allTypes,
} from "@/lib/data/certifications";
import Search from "@/components/Search";
import NoData from "@/components/NoData";
import { useAppQueryParams } from "@/hooks/useAppQuery";
import { useTranslation } from "react-i18next";
import { getCertificateTypeConfig } from "@/lib/config/certification-filters";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


function CertificationsContent() {
  const { t,i18n } = useTranslation();
  const { queries,setQueries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";
  const [sheetOpen, setSheetOpen] = useState(false);

  const filteredCertifications = useMemo(() => {
    return certificates.filter((p) => {
      if (searchQuery) {
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery) ||
          p.type.toLowerCase().includes(searchQuery);
        if (!matchesSearch) return false;
      }

      if (queries.certification_types.length > 0) {
        if (!queries.certification_types.includes(p.type)) return false;
      } 
      if (queries.starred_only && !p.starred) return false;
      return true;
    });
  }, [queries, searchQuery]);
  const isFilterActive = useMemo(() => {
    return queries.starred_only || queries.certification_types.length > 0;
  }, [queries]);
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

                       <SheetContent side={i18n.dir() === "rtl" ? "left" : "right"} className="overflow-auto px-5">

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
                      checked={queries.starred_only === "true"}
                      onCheckedChange={(checked: any) =>
                        setQueries((f) => ({ ...f, starred_only: queries.starred_only == "true" ? "":"true" }))
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
                        const isSelected = queries.certification_types.includes(type);
                        const config = getCertificateTypeConfig(type);
                        return (
                          <Button
                            key={type}
                            variant="outline"
                            onClick={() =>
                              setQueries((f) => {
                                const newTypes = isSelected
                                  ? f.certification_types.filter((t) => t !== type)
                                  : [...f.certification_types, type];
                                return { ...f, certification_types: newTypes };
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
                        setQueries({
                          certification_types: [],
                          starred_only: "",
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
                    certification_types: [],
                    starred_only: "",
                  })
                }>
                {t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        {filteredCertifications.length > 0 ? (
          <motion.div
            key={`${queries.certification_types.join("-")}-${queries.starred_only}-${searchQuery}`}
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
            {filteredCertifications.map((certificate, index) => (
              <motion.div
                key={certificate.id}
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
    <Suspense >
      <CertificationsContent />
    </Suspense>
  );
}
