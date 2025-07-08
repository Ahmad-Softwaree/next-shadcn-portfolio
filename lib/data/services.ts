import { LucideIcon } from "lucide-react"; // assuming you're using Lucide icons
import {
  Blocks,
  ChartPie,
  Code,
  FolderCode,
  Server,
  Settings2,
} from "lucide-react";
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Development",
    description:
      "Developing (Website, Application, System) with newest technologies, clean code and configuration",
    icon: Code,
  },
  {
    icon: Settings2,
    title: "Customizable Layouts",
    description:
      "Design your space with drag-and-drop simplicity—create grids, lists, or galleries in seconds.",
  },
  {
    icon: Blocks,
    title: "Interactive Widgets",
    description:
      "Embed polls, quizzes, or forms to keep your audience engaged.",
  },

  {
    icon: ChartPie,
    title: "Advanced Analytics",
    description:
      "Track engagement, clicks, and user activity with intuitive charts and reports.",
  },

  {
    title: "Server management",
    description:
      "Managing Servers and Maintain Them, Switching and Protecting Server and Hosts",
    icon: Server,
  },
  {
    title: "API integration",
    description:
      "Building Secure and most high performance API as much as It could be",
    icon: FolderCode,
  },
];
