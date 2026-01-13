export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";
export type SkillType = "language" | "framework" | "tool" | "library";

export type Skill = {
  id: number;
  name: string;
  image: string;
  level: SkillLevel;
  type: SkillType;
};

export const levelOrder: Record<SkillLevel, number> = {
  expert: 4,
  advanced: 3,
  intermediate: 2,
  beginner: 1,
};
export const levels: SkillLevel[] = [
  "expert",
  "advanced",
  "intermediate",
  "beginner",
];

export const types: SkillType[] = ["language", "framework", "tool", "library"];

export const getLevelColor = (level: SkillLevel) => {
  switch (level) {
    case "beginner":
      return "bg-blue-500/20 text-blue-500 border-blue-500/30 hover:bg-blue-500/20";
    case "intermediate":
      return "bg-green-500/20 text-green-500 border-green-500/30 hover:bg-green-500/20";
    case "advanced":
      return "bg-orange-500/20 text-orange-500 border-orange-500/30 hover:bg-orange-500/20";
    case "expert":
      return "bg-purple-500/20 text-purple-500 border-purple-500/30 hover:bg-purple-500/20";
    default:
      return "bg-gray-500/20 text-gray-500 border-gray-500/30 hover:bg-gray-500/20";
  }
};

export const getTypeColor = (type: SkillType) => {
  switch (type) {
    case "language":
      return "bg-cyan-500/20 text-cyan-500 border-cyan-500/30 hover:bg-cyan-500/20";
    case "framework":
      return "bg-pink-500/20 text-pink-500 border-pink-500/30 hover:bg-pink-500/20";
    case "tool":
      return "bg-amber-500/20 text-amber-500 border-amber-500/30 hover:bg-amber-500/20";
    case "library":
      return "bg-emerald-500/20 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500/20";
    default:
      return "bg-gray-500/20 text-gray-500 border-gray-500/30 hover:bg-gray-500/20";
  }
};

const data: Partial<Skill>[] = [
  {
    name: "React",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "Nest.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    level: "expert" as const,
    type: "framework" as const,
  },
  {
    name: "Prisma",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    level: "advanced" as const,
    type: "library" as const,
  },
  {
    name: "Postgresql",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Github",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    level: "expert" as const,
    type: "tool" as const,
  },
  {
    name: "Typescript",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    level: "expert" as const,
    type: "language" as const,
  },
  {
    name: "Firebase",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Socket.io",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    level: "advanced" as const,
    type: "library" as const,
  },
  {
    name: "Redux",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    level: "advanced" as const,
    type: "library" as const,
  },
  {
    name: "MongoDB",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "MySQL",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Tailwind",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    level: "expert" as const,
    type: "framework" as const,
  },
  {
    name: "Vue.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    level: "intermediate" as const,
    type: "framework" as const,
  },
  {
    name: "Express.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    level: "expert" as const,
    type: "framework" as const,
  },
  {
    name: "Shadcn",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "TanStack Query",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "TanStack Table",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "React Native",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: "advanced" as const,
    type: "framework" as const,
  },
  {
    name: "Knex.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "Next.js",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    level: "advanced" as const,
    type: "framework" as const,
  },
  {
    name: "Uploadthing",
    image: "https://avatars.githubusercontent.com/u/111536768?s=200",
    level: "advanced" as const,
    type: "library" as const,
  },
  {
    name: "Neon Database",
    image: "https://avatars.githubusercontent.com/u/84234201?s=200",
    level: "intermediate" as const,
    type: "tool" as const,
  },
  {
    name: "Python",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    level: "intermediate" as const,
    type: "language" as const,
  },
  {
    name: "python-telegram-bot",
    image:
      "https://raw.githubusercontent.com/python-telegram-bot/logos/master/logo/png/ptb-logo_2048.png",
    level: "intermediate" as const,
    type: "library" as const,
  },
  {
    name: "Zod",
    image: "https://logo.svgcdn.com/logos/zod.svg",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "Zustand",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "Clerk",
    image: "https://avatars.githubusercontent.com/u/49538330?s=200",
    level: "advanced" as const,
    type: "library" as const,
  },
  {
    name: "Postman",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
    level: "expert" as const,
    type: "tool" as const,
  },

  {
    name: "MagicUI",
    image: "https://magicui.design/icon.png",
    level: "expert" as const,
    type: "library" as const,
  },
  {
    name: "Supabase",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
    level: "intermediate" as const,
    type: "tool" as const,
  },
  {
    name: "Digital Ocean",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/digitalocean/digitalocean-original.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Vercel",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Namecheap",
    image:
      "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/namecheap.png",
    level: "expert" as const,
    type: "tool" as const,
  },
  {
    name: "Hostinger",
    image:
      "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/hostinger.png",
    level: "advanced" as const,
    type: "tool" as const,
  },
  {
    name: "Contabo",
    image: "https://contabo.com/favicon.ico",
    level: "advanced" as const,
    type: "tool" as const,
  },

  {
    name: "Drizzle ORM",
    image: "https://avatars.githubusercontent.com/u/108468352?s=200",
    level: "intermediate" as const,
    type: "library" as const,
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
