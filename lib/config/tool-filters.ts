import { ToolType } from "@/lib/data/tools";

export type FilterColorConfig = {
  color: string;
  bgColor: string;
  borderColor: string;
};

// Color configuration for tool types
export const toolTypeColors: Record<ToolType, FilterColorConfig> = {
  learning_tracker: {
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
    borderColor: "border-teal-500/30",
  },
  bot: {
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
  link_shortener: {
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderColor: "border-indigo-500/30",
  },
  package: {
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  cli_tool: {
    color: "text-amber-600 dark:text-amber-400",
    bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    borderColor: "border-amber-500/30",
  },
  online_menu: {
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    borderColor: "border-pink-500/30",
  },
};

// Helper function to get type configuration
export const getToolTypeConfig = (type: ToolType): FilterColorConfig => {
  return (
    toolTypeColors[type] || {
      color: "text-gray-600 dark:text-gray-400",
      bgColor: "bg-gray-500/10 dark:bg-gray-500/20",
      borderColor: "border-gray-500/30",
    }
  );
};
