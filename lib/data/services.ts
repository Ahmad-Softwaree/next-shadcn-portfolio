import { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  ChartPie,
  Code,
  FolderCode,
  Server,
  Settings2,
} from "lucide-react";
export type Service = {
  textKey: string;
  icon: LucideIcon;
  id: number;
};

const data: Partial<Service>[] = [
  {
    textKey: "development",
    icon: Code,
  },
  {
    icon: Settings2,
    textKey: "customizable_layouts",
  },
  {
    icon: Blocks,
    textKey: "interactive_widgets",
  },
  {
    icon: ChartPie,
    textKey: "advanced_analytics",
  },
  {
    textKey: "server_management",
    icon: Server,
  },
  {
    textKey: "api_integration",
    icon: FolderCode,
  },
  {
    textKey: "bot_creation",
    icon: Bot,
  },
];

const services: Service[] = data.map(
  (item, index) =>
    ({
      id: index,
      textKey: item.textKey,
      icon: item.icon,
    }) as Service
);

export default services;
