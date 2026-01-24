export enum ToolType {
  Bot = "bot",
  OnlineMenu = "online_menu",
  LinkShortener = "link_shortener",
  Package = "package",
  CLITool = "cli_tool",
  LearningTracker = "learning_tracker",
}

export const toolTypes = Object.values(ToolType);

export type Tool = {
  id: number;
  textKey: string;
  type: ToolType;
  version: string;
  link: string;
  image: string;
  icon: string;
  showInHome?: boolean;
  starred?: boolean;
};

const data: Partial<Tool>[] = [
  {
    textKey: "ominu",
    type: ToolType.OnlineMenu,
    version: "2",
    link: "https://ominu.net/",
    image: "/tools/ominu.png",
    icon: "/tools/ominu_logo.png",
    showInHome: true,
    starred: true,
  },
  {
    textKey: "telegram_bot",
    type: ToolType.Bot,
    version: "1",
    link: "https://bot.ahmad-software.com/",
    image: "/tools/bots.png",
    icon: "/tools/bot_icon.png",
    showInHome: true,
    starred: true,
  },
  {
    textKey: "link_shortener",
    type: ToolType.LinkShortener,
    version: "1",
    link: "https://linkshortner.ahmad-software.com/",
    image: "/tools/link_shortener.png",
    icon: "/tools/shortener_icon.png",
    showInHome: true,
    starred: true,
  },
  {
    textKey: "learning_tracker",
    type: ToolType.LearningTracker,
    version: "1",
    link: "https://learningtracker.ahmad-software.com/",
    image: "/tools/learning_tracker.png",
    icon: "/tools/learning_tracker_icon.png",
    starred: true,
  },
];

export const tools: Tool[] = data.map(
  (tool, index) =>
    ({
      id: index + 1,
      ...tool,
    }) as Tool
);
