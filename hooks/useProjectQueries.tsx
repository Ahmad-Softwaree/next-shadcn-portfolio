"use client";

import { ProjectTag, ProjectTech, ProjectType } from "@/lib/data/projects";
import { useQueryStates, parseAsStringEnum, parseAsArrayOf } from "nuqs";

export function useProjectQueries() {
  return useQueryStates({
    project_types: parseAsArrayOf(
      parseAsStringEnum<ProjectType>(Object.values(ProjectType))
    ).withOptions({
      shallow: false,
    }),
    project_tags: parseAsArrayOf(
      parseAsStringEnum<ProjectTag>(Object.values(ProjectTag))
    ).withOptions({
      shallow: false,
    }),
    starred_only: parseAsStringEnum<"true" | "false">([
      "true",
      "false",
    ]).withOptions({
      shallow: false,
    }),
    project_techs: parseAsArrayOf(
      parseAsStringEnum<ProjectTech>(Object.values(ProjectTech))
    ).withOptions({
      shallow: false,
    }),
    has_public_git: parseAsStringEnum<"true" | "false">([
      "true",
      "false",
    ]).withOptions({
      shallow: false,
    }),
    has_live_url: parseAsStringEnum<"true" | "false">([
      "true",
      "false",
    ]).withOptions({
      shallow: false,
    }),
    has_api: parseAsStringEnum<"true" | "false">(["true", "false"]).withOptions(
      {
        shallow: false,
      }
    ),
  });
}

export type ProjectQueryParams = ReturnType<typeof useProjectQueries>[0];
