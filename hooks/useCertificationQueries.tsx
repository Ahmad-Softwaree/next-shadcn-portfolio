"use client";

import { CertificateType } from "@/lib/data/certifications";
import { useQueryStates, parseAsStringEnum, parseAsArrayOf } from "nuqs";

export function useCertificationQueries() {
  return useQueryStates({
    certification_types: parseAsArrayOf(
      parseAsStringEnum<CertificateType>(Object.values(CertificateType))
    ).withOptions({
      shallow: false,
    }),

    starred_only: parseAsStringEnum<"true" | "false">([
      "true",
      "false",
    ]).withOptions({
      shallow: false,
    }),
  });
}

export type CertificationQueryParams = ReturnType<
  typeof useCertificationQueries
>[0];
