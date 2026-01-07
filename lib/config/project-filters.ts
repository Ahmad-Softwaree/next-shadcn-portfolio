import { ProjectType, ProjectTag } from "@/lib/data/projects";

export type FilterColorConfig = {
  color: string;
  bgColor: string;
  borderColor: string;
};

// Color configuration for project types
export const projectTypeColors: Record<ProjectType, FilterColorConfig> = {
  web: {
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  app: {
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  system: {
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    borderColor: "border-green-500/30",
  },
  "simple dashboard": {
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    borderColor: "border-orange-500/30",
  },
  "complex dashboard": {
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    borderColor: "border-red-500/30",
  },
  game: {
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    borderColor: "border-pink-500/30",
  },
  "telegram bot": {
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
};

// Color configuration for project tags
export const projectTagColors: Record<ProjectTag, FilterColorConfig> = {
  production: {
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  learning: {
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "border-amber-500/30",
  },
  university: {
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderColor: "border-indigo-500/30",
  },
  down: {
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    borderColor: "border-red-500/30",
  },
};

export const getTypeConfig = (type: ProjectType): FilterColorConfig => {
  return projectTypeColors[type];
};

export const getTagConfig = (tag: ProjectTag): FilterColorConfig => {
  return projectTagColors[tag];
};
