export type Skill = {
  id: number;
  name: string;
  image: string;
};

const data = [
  {
    name: "React",
    image: "/skills/react.png",
  },
  {
    name: "Nest.js",
    image: "/skills/nest.png",
  },
  {
    name: "Prisma",
    image: "/skills/prisma.svg",
  },

  {
    name: "Postgresql",
    image: "/skills/postgresql.png",
  },

  {
    name: "Github",
    image: "/skills/github.png",
  },

  {
    name: "Typescript",
    image: "/skills/ts.png",
  },

  {
    name: "Firebase",
    image: "/skills/firebase.png",
  },
  {
    name: "Socket.io",
    image: "/skills/socket.png",
  },

  {
    name: "Redux",
    image: "/skills/redux.png",
  },

  {
    name: "MongoDB",
    image: "/skills/mongo.png",
  },
  {
    name: "MySQL",
    image: "/skills/mysql.png",
  },
  {
    name: "Tailwind",
    image: "/skills/tailwind.png",
  },
  {
    name: "Vue.js",
    image: "/skills/vue.png",
  },
  {
    name: "Express.js",
    image: "/skills/express.png",
  },

  {
    name: "Shadcn",
    image: "/skills/shadcn.png",
  },

  {
    name: "React Query",
    image: "/skills/react-query.avif",
  },

  {
    name: "React Native",
    image: "/skills/react.png",
  },
  {
    name: "Knex.js",
    image: "/skills/knex.png",
  },
  {
    name: "PostgreSql",
    image: "/skills/postgresql.png",
  },

  {
    name: "Next.js",
    image: "/skills/next.png",
  },
];

const skills: Skill[] = data.map(
  (item, index) =>
    ({
      id: index + 1,
      name: item.name,
      image: item.image,
    }) as Skill
);

export default skills;
