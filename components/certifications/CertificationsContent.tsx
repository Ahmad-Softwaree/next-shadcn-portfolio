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
import { Certification, certificationTypes } from "@/lib/data/certifications";
import { useCertificationQueries } from "@/hooks/useCertificationQueries";
import CertificationsHeader from "./CertificationsHeader";
import { countActiveFilters } from "@/lib/functions";
import CertificationTypeBtn from "../btn/certification-type-btn";
import CertificationsGrid from "../projects/CertificationGrid";

function CertificationsContent({ data }: { data: Certification[] }) {
  const t = useTranslations("certifications");
  const global_t = useTranslations();
  const locale = useLocale();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [certificationQueries, setCertificationQueries] =
    useCertificationQueries();
  const isFilterActive = useMemo(() => {
    return Object.values(certificationQueries).some((value) => {
      if (Array.isArray(value)) return value.length > 0;
      return value === "true";
    });
  }, [certificationQueries]);
  return (
    <section
      id="certifications"
      className="relative py-20 px-6 space-y-10 sm:space-y-1">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <CertificationsHeader />
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
                      {countActiveFilters(certificationQueries)}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>

              <SheetContent
                side={locale === "ar" || locale === "ckb" ? "left" : "right"}
                className="overflow-auto p-5">
                <SheetHeader>
                  <SheetTitle>{global_t("common.filters")}</SheetTitle>
                  <SheetDescription>{t("adjust_filters")}</SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-4 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mx-auto">
                    <Checkbox
                      id="filter-starred"
                      checked={certificationQueries.starred_only === "true"}
                      onCheckedChange={(checked: any) =>
                        setCertificationQueries({
                          starred_only: checked ? "true" : null,
                        })
                      }
                    />
                    <Label htmlFor="filter-starred">{t("starred_only")}</Label>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      {t("filter_types")}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {certificationTypes.map((type) => (
                        <CertificationTypeBtn key={type} type={type} />
                      ))}
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
                          onClick={() => setCertificationQueries(null)}>
                          {global_t("common.cancel")}
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
                onClick={() => setCertificationQueries(null)}>
                {global_t("common.cancel")}
              </Button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        {data.length > 0 ? <CertificationsGrid data={data} /> : <NoData />}
      </div>
    </section>
  );
}

export default CertificationsContent;
