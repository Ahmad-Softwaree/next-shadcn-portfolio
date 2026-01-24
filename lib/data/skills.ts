export enum SkillLevel {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
  Expert = "expert",
}
export enum SkillType {
  Language = "language",
  Framework = "framework",
  Tool = "tool",
  Library = "library",
}

export type Skill = {
  id: number;
  name: string;
  image: string;
  level: SkillLevel;
  type: SkillType;
};

export const levelOrder: Record<SkillLevel, number> = {
  [SkillLevel.Expert]: 4,
  [SkillLevel.Advanced]: 3,
  [SkillLevel.Intermediate]: 2,
  [SkillLevel.Beginner]: 1,
};
export const levels: SkillLevel[] = [
  SkillLevel.Expert,
  SkillLevel.Advanced,
  SkillLevel.Intermediate,
  SkillLevel.Beginner,
];

export const types: SkillType[] = [
  SkillType.Language,
  SkillType.Framework,
  SkillType.Tool,
  SkillType.Library,
];

export const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case SkillLevel.Beginner:
      return "data-[selected=true]:bg-blue-500/20 data-[selected=true]:text-blue-500 data-[selected=true]:border-blue-500/30 hover:bg-blue-500/20 hover:text-blue-500";
    case SkillLevel.Intermediate:
      return "data-[selected=true]:bg-green-500/20 data-[selected=true]:text-green-500 data-[selected=true]:border-green-500/30 hover:bg-green-500/20 hover:text-green-500";
    case SkillLevel.Advanced:
      return "data-[selected=true]:bg-orange-500/20 data-[selected=true]:text-orange-500 data-[selected=true]:border-orange-500/30 hover:bg-orange-500/20 hover:text-orange-500";
    case SkillLevel.Expert:
      return "data-[selected=true]:bg-purple-500/20 data-[selected=true]:text-purple-500 data-[selected=true]:border-purple-500/30 hover:bg-purple-500/20 hover:text-purple-500";
    default:
      return "data-[selected=true]:bg-gray-500/20 data-[selected=true]:text-gray-500 data-[selected=true]:border-gray-500/30 hover:bg-gray-500/20 hover:text-gray-500";
  }
};

export const getTypeColor = (type: SkillType) => {
  switch (type) {
    case SkillType.Language:
      return "data-[selected=true]:bg-cyan-500/20 data-[selected=true]:text-cyan-500 data-[selected=true]:border-cyan-500/30 hover:bg-cyan-500/20 hover:text-cyan-500";
    case SkillType.Framework:
      return "data-[selected=true]:bg-pink-500/20 data-[selected=true]:text-pink-500 data-[selected=true]:border-pink-500/30 hover:bg-pink-500/20 hover:text-pink-500";
    case SkillType.Tool:
      return "data-[selected=true]:bg-amber-500/20 data-[selected=true]:text-amber-500 data-[selected=true]:border-amber-500/30 hover:bg-amber-500/20 hover:text-amber-500";
    case SkillType.Library:
      return "data-[selected=true]:bg-emerald-500/20 data-[selected=true]:text-emerald-500 data-[selected=true]:border-emerald-500/30 hover:bg-emerald-500/20 hover:text-emerald-500";
    default:
      return "data-[selected=true]:bg-gray-500/20 data-[selected=true]:text-gray-500 data-[selected=true]:border-gray-500/30 hover:bg-gray-500/20 hover:text-gray-500";
  }
};

const data: Partial<Skill>[] = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "Nest.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Framework,
  },
  {
    name: "Prisma",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Library,
  },
  {
    name: "Postgresql",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Github",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Tool,
  },
  {
    name: "Typescript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Language,
  },
  {
    name: "Firebase",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Socket.io",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Library,
  },
  {
    name: "Redux",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Library,
  },
  {
    name: "MongoDB",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "MySQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Tailwind",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Framework,
  },
  {
    name: "Vue.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    level: SkillLevel.Intermediate,
    type: SkillType.Framework,
  },
  {
    name: "Express.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Framework,
  },
  {
    name: "Shadcn",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "TanStack Query",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "TanStack Table",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "React Native",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Framework,
  },
  {
    name: "Knex.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "Next.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Framework,
  },
  {
    name: "Uploadthing",
    image: "https://avatars.githubusercontent.com/u/111536768?s=200",
    level: SkillLevel.Advanced,
    type: SkillType.Library,
  },
  {
    name: "Neon Database",
    image: "https://avatars.githubusercontent.com/u/84234201?s=200",
    level: SkillLevel.Intermediate,
    type: SkillType.Tool,
  },
  {
    name: "Python",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    level: SkillLevel.Intermediate,
    type: SkillType.Language,
  },
  {
    name: "python-telegram-bot",
    image:
      "https://raw.githubusercontent.com/python-telegram-bot/logos/master/logo/png/ptb-logo_2048.png",
    level: SkillLevel.Intermediate,
    type: SkillType.Library,
  },
  {
    name: "Zod",
    image: "https://logo.svgcdn.com/logos/zod.svg",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "Zustand",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "Clerk",
    image: "https://avatars.githubusercontent.com/u/49538330?s=200",
    level: SkillLevel.Advanced,
    type: SkillType.Library,
  },
  {
    name: "Postman",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
    level: SkillLevel.Expert,
    type: SkillType.Tool,
  },

  {
    name: "MagicUI",
    image: "https://magicui.design/icon.png",
    level: SkillLevel.Expert,
    type: SkillType.Library,
  },
  {
    name: "Supabase",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
    level: SkillLevel.Intermediate,
    type: SkillType.Tool,
  },
  {
    name: "Digital Ocean",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/digitalocean/digitalocean-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Vercel",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Namecheap",
    image:
      "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/namecheap.png",
    level: SkillLevel.Expert,
    type: SkillType.Tool,
  },
  {
    name: "Hostinger",
    image:
      "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/hostinger.png",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },
  {
    name: "Contabo",
    image: "https://contabo.com/favicon.ico",
    level: SkillLevel.Advanced,
    type: SkillType.Tool,
  },

  {
    name: "Drizzle ORM",
    image: "https://avatars.githubusercontent.com/u/108468352?s=200",
    level: SkillLevel.Intermediate,
    type: SkillType.Library,
  },
];

const skills: Skill[] = data.map(
  (item, index) =>
    ({
      id: index + 1,
      ...item,
    }) as Skill
);

export default skills;
