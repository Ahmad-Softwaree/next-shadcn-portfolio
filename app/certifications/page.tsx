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
type FilterState = {
  types: CertificateType[];
  starredOnly: boolean;
};

const page = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  const [filters, setFilters] = useState<FilterState>({
    types: [],
    starredOnly: false,
  });

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return certificates.filter((p) => {
      if (filters.types.length > 0) {
        if (p.type !== filters.types[0]) return false;
      }
      if (filters.starredOnly && !p.starred) return false;
      return true;
    });
  }, [filters]);
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
            My Certifications
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            Showcasing all of my certifications and technical achievements
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2">
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
                    Adjust certificate filters below
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

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      Certification Types
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
                            className="rounded-full">
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
                        Close Filters
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
                    starredOnly: false,
                  })
                }>
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((certificate, index) => (
            <CertificationCard key={index} {...certificate} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No certifications found matching filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default page;
