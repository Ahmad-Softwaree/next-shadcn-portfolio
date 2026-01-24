import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { tools } from "../data/tools";
import { ToolsQueryParams } from "@/hooks/useToolsQueries";

export const getHomeTools = () => {
  const data = tools.filter((tool) => tool.showInHome);
  return data;
};

export const getToolById = (id: number) => {
  const tool = tools.find((t) => t.id === id);
  return tool;
};

export const getToolsPage = (
  params: ToolsQueryParams,
  search: SearchQueryParams,
  t: any
) => {
  let data = tools;
  if (search.search) {
    const searchLower = search.search.toLowerCase();
    data = data.filter((tool) => {
      let toolTitle = t(`${tool.textKey}.title` as any).toLowerCase();
      let toolDesc = t(`${tool.textKey}.description` as any).toLowerCase();
      if (toolTitle.includes(searchLower) || toolDesc.includes(searchLower)) {
        return true;
      }
    });
  }

  if (params.tool_types?.length) {
    data = data.filter(
      (tool) => tool.type! && params.tool_types!.includes(tool.type)
    );
  }

  if (params.starred_only === "true") {
    data = data.filter((project) => project.starred);
  }

  return data;
};
