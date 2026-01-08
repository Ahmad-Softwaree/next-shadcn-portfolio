export type Skill = {
  id: number;
  name: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

const data = [
  {
    name: "React",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: "Expert" as const,
  },
  {
    name: "Nest.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "Prisma",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "Postgresql",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "Github",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    level: "Expert" as const,
  },
  {
    name: "Typescript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    level: "Expert" as const,
  },
  {
    name: "Firebase",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
    level: "Intermediate" as const,
  },
  {
    name: "Socket.io",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "Redux",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "MongoDB",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "MySQL",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    level: "Intermediate" as const,
  },
  {
    name: "Tailwind",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    level: "Expert" as const,
  },
  {
    name: "Vue.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
    level: "Intermediate" as const,
  },
  {
    name: "Express.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "Shadcn",
    image: "https://avatars.githubusercontent.com/u/139895814?s=200",
    level: "Expert" as const,
  },
  {
    name: "TanStack Query",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: "Expert" as const,
  },
  {
    name: "TanStack Table",
    image: "https://avatars.githubusercontent.com/u/72518640?s=200",
    level: "Advanced" as const,
  },
  {
    name: "React Native",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    level: "Intermediate" as const,
  },
  {
    name: "Knex.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/knexjs/knexjs-original.svg",
    level: "Intermediate" as const,
  },
  {
    name: "Next.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    level: "Expert" as const,
  },
  {
    name: "Uploadthing",
    image: "https://avatars.githubusercontent.com/u/111536768?s=200",
    level: "Intermediate" as const,
  },
  {
    name: "Neon Database",
    image: "https://avatars.githubusercontent.com/u/84234201?s=200",
    level: "Intermediate" as const,
  },
  {
    name: "Python",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    level: "Advanced" as const,
  },
  {
    name: "python-telegram-bot",
    image: "https://raw.githubusercontent.com/python-telegram-bot/logos/master/logo/png/ptb-logo_2048.png",
    level: "Intermediate" as const,
  },
  {
    name: "Zod",
    image: "https://logo.svgcdn.com/logos/zod.svg",
    level: "Advanced" as const,
  },
  {
    name: "Zustand",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    level: "Advanced" as const,
  },
];

const skills: Skill[] = data.map(
  (item, index) =>
    ({
      id: index + 1,
      name: item.name,
      image: item.image,
      level: item.level,
    }) as Skill
);

export default skills;
