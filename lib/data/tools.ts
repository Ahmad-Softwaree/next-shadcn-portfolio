export const allTypes = [
  "Bot",
  "Online Menu",
  "Link Shortener",
  "Package",
  "CLI Tool",
] as const;

export type ToolType = (typeof allTypes)[number];

export type Tool = {
  id: number;
  nameKey: string;
  descriptionKey: string;
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
    nameKey: "tools.ominu.name",
    descriptionKey: "tools.ominu.description",
    type: "Online Menu",
    version: "2",
    link: "https://ominu.net/",
    image: "/tools/ominu.png",
    icon: "/tools/ominu_logo.png",
    showInHome: true,
    starred: true,
  },
  {
    nameKey: "tools.telegram_bot.name",
    descriptionKey: "tools.telegram_bot.description",
    type: "Bot",
    version: "1",
    link: "https://bot.ahmad-software.com/",
    image: "/tools/bots.png",
    icon: "/tools/bot_icon.png",
    showInHome: true,
    starred: true,
  },
  {
    nameKey: "tools.link_shortener.name",
    descriptionKey: "tools.link_shortener.description",
    type: "Link Shortener",
    version: "1",
    link: "https://linkshortner.ahmad-software.com/",
    image: "/tools/link_shortener.png",
    icon: "/tools/shortener_icon.png",
    showInHome: true,
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
