import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { ToolType } from "@/lib/data/tools";
import { useToolsQueries } from "@/hooks/useToolsQueries";
import { getToolTypeConfig } from "@/lib/config/tool-filters";

const ToolTypeBtn = ({ type }: { type: ToolType }) => {
  const t = useTranslations("tools");
  const [{ tool_types }, setToolsQueries] = useToolsQueries();
  const config = getToolTypeConfig(type);

  return (
    <Button
      data-selected={tool_types?.includes(type) ? "true" : "false"}
      onClick={() =>
        setToolsQueries({
          tool_types: tool_types?.includes(type)
            ? tool_types.filter((t) => t !== type)
            : [...(tool_types || []), type],
        })
      }
      size="sm"
      variant="outline"
      className={cn(
        "w-fit rounded-full border transition-all duration-200",
        config.bgColor,
        config.color,
        config.borderColor
      )}>
      {t(`types.${type}` as any)}
    </Button>
  );
};

export default ToolTypeBtn;
