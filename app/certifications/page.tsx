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
import { StaggerItem, StaggeredGrid } from "@/components/shared/animate";
import { sortStarredFirst } from "@/lib/fucntions";

function CertificationsContent() {
  const { t, i18n } = useTranslation();
  const { queries, setQueries } = useAppQueryParams();
  const searchQuery = queries.search?.toLowerCase() || "";
  const [sheetOpen, setSheetOpen] = useState(false);
  const sortedData = sortStarredFirst(certificates);

  const filteredCertifications = useMemo(() => {
    return sortedData.filter((p) => {
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
          <div className="text-center sm:mb-4">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {String(t("certifications.title" as any))}
            </h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              {String(t("certifications.subtitle" as any))}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("certifications.total_certifications", {
                count: certificates.length,
              })}
            </p>
          </div>
          <div className="w-full max-w-md ">
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
                    <Badge className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                      {
                        [
                          queries.certification_types.length > 0,
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
                    {t("certifications.adjust_filters")}
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-4 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mx-auto">
                    <Checkbox
                      id="filter-starred"
                      checked={queries.starred_only === "true"}
                      onCheckedChange={(checked: any) =>
                        setQueries((f) => ({
                          ...f,
                          starred_only:
                            queries.starred_only == "true" ? "" : "true",
                        }))
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
                      {allTypes.map((type) => (
                        <FilterTypeButton
                          key={type}
                          type={type}
                          isActive={queries.certification_types.includes(type)}
                          onClick={() =>
                            setQueries((f) => {
                              const newTypes = f.certification_types.includes(
                                type
                              )
                                ? f.certification_types.filter(
                                    (t) => t !== type
                                  )
                                : [...f.certification_types, type];
                              return { ...f, certification_types: newTypes };
                            })
                          }
                        />
                      ))}
                    </div>
                  </div>

                  {isFilterActive && (
                    <>
                      <Separator />
                      <div className="mt-6 grid grid-cols-2 gap-5 justify-between w-full">
                        <SheetClose asChild>
                          <Button variant="default">{t("common.close")}</Button>
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
          <StaggeredGrid
            animationKey={`${queries.certification_types.join("-")}-${queries.starred_only}-${searchQuery}`}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredCertifications.map((cert) => (
              <StaggerItem key={cert.id}>
                <CertificationCard {...cert} />
              </StaggerItem>
            ))}
          </StaggeredGrid>
        ) : (
          <NoData />
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
  type: CertificateType;
  isActive: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const config = getCertificateTypeConfig(type);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      size="sm"
      variant="outline"
      className={cn(
        "w-fit english_font rounded-full border transition-all duration-200",
        (isActive || isHovered) && config.bgColor,
        (isActive || isHovered) && config.color,
        (isActive || isHovered) && config.borderColor
      )}>
      {type}
    </Button>
  );
};

export default function Page() {
  return (
    <Suspense>
      <CertificationsContent />
    </Suspense>
  );
}
