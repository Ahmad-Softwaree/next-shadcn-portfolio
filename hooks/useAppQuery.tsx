"use client";

import { ENUMs } from "@/lib/enums";
import { parseAsArrayOf, parseAsString, useQueryStates } from "nuqs";

export function useAppQueryParams() {
  const [queries, setQueries] = useQueryStates(
    {
      [ENUMs.PARAMS.SEARCH]: parseAsString.withDefault(""),
      [ENUMs.PARAMS.SKILL_LEVEL]: parseAsString.withDefault(""),
      [ENUMs.PARAMS.SKILL_TYPE]: parseAsString.withDefault(""),

      [ENUMs.PARAMS.CERTIFICATION_TYPES]: parseAsArrayOf(
        parseAsString
      ).withDefault([]),
      [ENUMs.PARAMS.PROJECT_TYPES]: parseAsArrayOf(parseAsString).withDefault(
        []
      ),
      [ENUMs.PARAMS.STARRED_ONLY]: parseAsString.withDefault(""),
      [ENUMs.PARAMS.TOOL_TYPES]: parseAsArrayOf(parseAsString).withDefault([]),
      [ENUMs.PARAMS.PROJECT_TAGS]: parseAsArrayOf(parseAsString).withDefault(
        []
      ),
      [ENUMs.PARAMS.PROJECT_TECHS]: parseAsArrayOf(parseAsString).withDefault(
        []
      ),
      [ENUMs.PARAMS.HAS_PUBLIC_GIT]: parseAsString.withDefault(""),
      [ENUMs.PARAMS.HAS_LIVE_URL]: parseAsString.withDefault(""),
    },
    {
      shallow: true,
    }
  );

  return {
    queries,
    setQueries,
  };
}
