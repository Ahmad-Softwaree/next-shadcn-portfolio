"use client";

import { ToolType } from "@/lib/data/tools";
import { useQueryStates, parseAsStringEnum, parseAsArrayOf } from "nuqs";

export function useToolsQueries() {
  return useQueryStates({
    tool_types: parseAsArrayOf(
      parseAsStringEnum<ToolType>(Object.values(ToolType))
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

export type ToolsQueryParams = ReturnType<typeof useToolsQueries>[0];
