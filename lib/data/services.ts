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
  titleKey: string;
  descriptionKey: string;
  icon: LucideIcon;
  id: number;
};

const data: Partial<Service>[] = [
  {
    titleKey: "services.development.title",
    descriptionKey: "services.development.description",
    icon: Code,
  },
  {
    icon: Settings2,
    titleKey: "services.customizable_layouts.title",
    descriptionKey: "services.customizable_layouts.description",
  },
  {
    icon: Blocks,
    titleKey: "services.interactive_widgets.title",
    descriptionKey: "services.interactive_widgets.description",
  },
  {
    icon: ChartPie,
    titleKey: "services.advanced_analytics.title",
    descriptionKey: "services.advanced_analytics.description",
  },
  {
    titleKey: "services.server_management.title",
    descriptionKey: "services.server_management.description",
    icon: Server,
  },
  {
    titleKey: "services.api_integration.title",
    descriptionKey: "services.api_integration.description",
    icon: FolderCode,
  },
  {
    titleKey: "services.bot_creation.title",
    descriptionKey: "services.bot_creation.description",
    icon: Bot,
  },
];

const services: Service[] = data.map(
  (item, index) =>
    ({
      id: index,
      titleKey: item.titleKey,
      descriptionKey: item.descriptionKey,
      icon: item.icon,
    }) as Service
);

export default services;
