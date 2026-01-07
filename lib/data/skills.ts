export type Skill = {
  id: number;
  name: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
};

const data = [
  {
    name: "React",
    image: "/skills/react.png",
    level: "Expert" as const,
  },
  {
    name: "Nest.js",
    image: "/skills/nest.png",
    level: "Advanced" as const,
  },
  {
    name: "Prisma",
    image: "/skills/prisma.svg",
    level: "Advanced" as const,
  },
  {
    name: "Postgresql",
    image: "/skills/postgresql.png",
    level: "Advanced" as const,
  },
  {
    name: "Github",
    image: "/skills/github.png",
    level: "Expert" as const,
  },
  {
    name: "Typescript",
    image: "/skills/ts.png",
    level: "Expert" as const,
  },
  {
    name: "Firebase",
    image: "/skills/firebase.png",
    level: "Intermediate" as const,
  },
  {
    name: "Socket.io",
    image: "/skills/socket.png",
    level: "Advanced" as const,
  },
  {
    name: "Redux",
    image: "/skills/redux.png",
    level: "Advanced" as const,
  },
  {
    name: "MongoDB",
    image: "/skills/mongo.png",
    level: "Advanced" as const,
  },
  {
    name: "MySQL",
    image: "/skills/mysql.png",
    level: "Intermediate" as const,
  },
  {
    name: "Tailwind",
    image: "/skills/tailwind.png",
    level: "Expert" as const,
  },
  {
    name: "Vue.js",
    image: "/skills/vue.png",
    level: "Intermediate" as const,
  },
  {
    name: "Express.js",
    image: "/skills/express.png",
    level: "Advanced" as const,
  },
  {
    name: "Shadcn",
    image: "/skills/shadcn.png",
    level: "Expert" as const,
  },
  {
    name: "React Query",
    image: "/skills/react-query.avif",
    level: "Advanced" as const,
  },
  {
    name: "React Native",
    image: "/skills/react.png",
    level: "Intermediate" as const,
  },
  {
    name: "Knex.js",
    image: "/skills/knex.png",
    level: "Intermediate" as const,
  },
  {
    name: "PostgreSql",
    image: "/skills/postgresql.png",
    level: "Advanced" as const,
  },
  {
    name: "Next.js",
    image: "/skills/next.png",
    level: "Expert" as const,
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
