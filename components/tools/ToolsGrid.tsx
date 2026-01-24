import React from "react";
import { StaggerContainer, StaggerItem } from "../shared/animate";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { usePathname } from "@/i18n/navigation";
import { useToolsQueries } from "@/hooks/useToolsQueries";
import ToolCard from "../cards/tool-card";
import { Tool } from "@/lib/data/tools";
import SpecialToolCard from "../cards/special-tool-card";

const ToolsGrid = ({ data }: { data: Tool[] }) => {
  let pathname = usePathname();
  let isToolsPage = pathname === "/tools";
  const [toolsQueries] = useToolsQueries();
  const [searchQuery] = useSearchQuery();
  const gridKey = React.useMemo(
    () =>
      `${Object.values(toolsQueries).join("-")}-${searchQuery.search || "all"}`,
    [toolsQueries, searchQuery.search]
  );

  if (isToolsPage) {
    return (
      <div className="space-y-12">
        {data.map((tool) => (
          <StaggerItem key={tool.id}>
            <SpecialToolCard {...tool} />
          </StaggerItem>
        ))}
      </div>
    );
  }
  return (
    <StaggerContainer className="space-y-12" key={gridKey}>
      {data.slice(0, 6).map((tool) => (
        <StaggerItem key={tool.id}>
          <SpecialToolCard {...tool} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default ToolsGrid;
