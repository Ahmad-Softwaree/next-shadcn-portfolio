export const allTechs = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
  "Firebase",
  "React",
  "Next.js",
  "Nest.js",
  "Typescript",
  "Prisma",
  "Javascript",
  "Express.js",
  "Knex.js",
  "TailwindCSS",
  "Shadcn UI",
  "Zod",
  "Zustand",
  "React Query",
  "Redux",
  "Vue.js",
  "GSAP Animation",
  "Socket.io",
  "Unity",
  "Jest",
  "C#",
  "Python",
  "Telegram API",
  "Clerk",
  "Neon",
] as const;

export type Technology = (typeof allTechs)[number];

export const allTags = [
  "production",
  "learning",
  "university",
  "down",
] as const;

export type ProjectTag = (typeof allTags)[number];

export const allTypes = [
  "web",
  "app",
  "system",
  "simple dashboard",
  "complex dashboard",
  "game",
  "telegram bot",
] as const;

export type ProjectType = (typeof allTypes)[number];

export type RepoType = "Frontend" | "Backend" | "Bot" | "Socket" | "Fullstack";
export type GitName =
  | "facebook-frontend"
  | "facebook-api"
  | "facebook-socket"
  | "refinery_system_front"
  | "refinery_system_server"
  | "pet-system-front"
  | "pet-system-server"
  | "absence_system_front"
  | "absence_system_server"
  | "React-todo-front"
  | "React-todo-api"
  | "reminder_bot"
  | "bucks-to-bar-copilot"
  | "Link-Shortener";

export type GitRepo = {
  name: RepoType;
  url: string;
};

export const myGithubLink = "https://github.com/Ahmad-Softwaree";

export const getGithubLink = (name: GitName) =>
  `https://github.com/Ahmad-Softwaree/${name}`;

export type Person = {
  name: string;
  url: string;
};

export const persons = {
  ekleelz: { name: "Ekleelz", url: "https://ekleelz.com/" },
  yari: { name: "Yari Mndalan", url: "https://yarimndalan.com" },
  kallapost: { name: "Kallapost", url: "https://www.facebook.com/KallaPost/" },
  meeraPost: { name: "Meera Post", url: "" },
  goldenPaper: { name: "Golden Paper", url: "https://golden-paper.net/" },
  avanaSoft: { name: "Avana Soft", url: "https://avanasoft.com/" },
  iqBids: { name: "IQ Bids", url: "" },
  bazianSolar: { name: "Bazian Solar", url: "https://baziansolar.com/" },
  jananGroup: { name: "Janan Group", url: "https://janan-group.com/" },
  fancyRest: {
    name: "Fancy Rest",
    url: "https://www.facebook.com/fancy.rest.cafe/",
  },
  fancy: { name: "Fancy", url: "https://www.facebook.com/fancy.rest.cafe/" },
  rahaCarwash: { name: "Raha Carwash", url: "" },
  kitnCompany: { name: "Kitn Company", url: "https://kitn.net/" },
  ahmad: { name: "Ahmad", url: "https://github.com/Ahmad-Softwaree" },
  bester: { name: "Bester", url: "https://bester-group.com/" },
  apSoft: { name: "AP Soft", url: "https://apsoft.tech/" },
};

export const clients = {
  ekleelz: persons.ekleelz,
  yari: persons.yari,
  kallapost: persons.kallapost,
  meeraPost: persons.meeraPost,
  goldenPaper: persons.goldenPaper,
  avanaSoft: persons.avanaSoft,
  iqBids: persons.iqBids,
  bazianSolar: persons.bazianSolar,
  jananGroup: persons.jananGroup,
  fancyRest: persons.fancyRest,
  rahaCarwash: persons.rahaCarwash,
  kitnCompany: persons.kitnCompany,
  fancy: persons.fancy,
} as const;

export const contributors = {
  ahmad: persons.ahmad,
  bester: persons.bester,
  apSoft: persons.apSoft,
  avanaSoft: persons.avanaSoft,
  kitnCompany: persons.kitnCompany,
} as const;

export type ClientKey = keyof typeof clients;
export type ContributorKey = keyof typeof contributors;

export type Client = (typeof clients)[ClientKey];
export type Contributor = (typeof contributors)[ContributorKey];

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  liveUrl?: string;
  gits?: GitRepo[];
  tag?: ProjectTag;
  starred?: boolean;
  types?: ProjectType[];
  client_specific: boolean;
  clients?: Client[];
  contributor?: Contributor;
  showInHome: boolean;
};
export const data: Partial<Project>[] = [
  {
    title: "Link Shortener",
    description:
      "A simple link shortener application that allows users to create shortened URLs for easier sharing and tracking.",
    image: "/projects/link_shortener.png",
    technologies: [
      "Next.js",
      "Typescript",
      "Clerk",
      "Neon",
      "PostgreSQL",
      "Zod",
      "Shadcn UI",
    ],
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("Link-Shortener"),
      },
    ],
    tag: "learning",
    types: ["web", "simple dashboard"],
    client_specific: false,
  },
  {
    title: "Reminder Bot",
    description: "A Telegram bot that sends reminders to users.",
    image: "/projects/reminder_bot.png",
    technologies: ["Python", "Telegram API"],
    gits: [
      {
        name: "Bot",
        url: getGithubLink("reminder_bot"),
      },
    ],
    tag: "learning",
    types: ["telegram bot"],
    client_specific: false,
  },
  {
    title: "Yari Mndalan Website",
    description:
      "A Website for online shopping of clothing and accessories, featuring product listings, shopping cart, and secure checkout.",
    image: "/projects/yarimndalan_web.png",
    technologies: ["React", "Nest.js", "MySQL", "Prisma", "Typescript"],
    liveUrl: "https://yarimndalan.com",
    gits: [],
    tag: "production",
    types: ["web"],
    starred: true,
    showInHome: true,
  },
  {
    title: "Ekleelz",
    description:
      "A Website verification platform for Ekleelz company, allowing users to verify the authenticity of their products through unique codes.",
    image: "/projects/ekleelz.png",
    technologies: ["React", "Typescript"],
    liveUrl: "https://verify.ekleelz.com",
    gits: [],
    tag: "production",
    types: ["web"],
    client_specific: true,
    clients: [clients.ekleelz],
    starred: true,
    showInHome: true,
  },
  {
    title: "Ekleelz Dashboard",
    description:
      "A dashboard for Ekleelz company, providing insights and analytics for product verification.",
    image: "/projects/ekleelz-system.png",
    technologies: ["React", "Nest.js", "MySQL", "Prisma", "Typescript"],
    gits: [],
    tag: "production",
    types: ["simple dashboard"],
    client_specific: true,
    clients: [clients.ekleelz],
    starred: true,
    showInHome: true,
  },
  {
    title: "Yari Mndalan System",
    description:
      "A System for online shopping of clothing and accessories, featuring product listings, shopping cart, and secure checkout.",
    image: "/projects/yarimndalan_system.png",
    technologies: ["React", "Nest.js", "MySQL", "Prisma", "Typescript"],
    gits: [],
    tag: "production",
    types: ["web", "complex dashboard", "system"],
    starred: true,
    showInHome: true,
  },

  {
    title: "Kallapost",
    description:
      "A full-stack delivery and post management platform with roles for customers, drivers, and managers, plus mobile apps for Android and iOS.",
    image: "/projects/kalla.png",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Knex.js",
      "Firebase",
      "Javascript",
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kalla.kallapost",
    gits: [],
    tag: "production",
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [clients.kallapost],
    contributor: contributors.bester,
    starred: true,
  },
  {
    title: "Meera Post",
    description:
      "A social posting platform where users can register, share posts, like, comment, and engage with a community-driven interface.",
    image: "/projects/meera.png",
    technologies: [
      "React",
      "MongoDB",
      "Express.js",
      "Firebase",
      "Javascript",
      "Redux",
    ],
    gits: [],
    tag: "production",
    types: ["system"],
    client_specific: true,
    clients: [clients.meeraPost],
    contributor: contributors.bester,
    starred: true,
  },
  {
    title: "Factory System",
    description:
      "A full-featured factory management system built with React.js and Nest.js. It includes inventory tracking, order management, production planning, and role-based access control for admin and staff.",
    image: "/projects/factory_system.png",
    technologies: [
      "React",
      "Nest.js",
      "MySQL",
      "Typescript",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Zod",
      "Zustand",
      "React Query",
    ],
    liveUrl: "",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: true,
    clients: [clients.goldenPaper],
    contributor: contributors.bester,
  },
  {
    title: "Benabzar",
    description:
      "An online food delivery application developed using Express.js. Features include customer order placement, delivery status tracking, and admin dashboard for restaurant management.",
    image: "/projects/benabazar.png",
    technologies: ["Express.js", "MySQL", "Firebase", "Javascript"],
    liveUrl: "https://apps.apple.com/us/app/bena-bazar/id6743659036?uo=2",
    gits: [],
    tag: "production",
    starred: true,
    types: ["app", "complex dashboard"],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
    showInHome: true,
  },
  {
    title: "Belt World",
    description:
      "Storage and inventory management system designed for managing product entries, stock updates, and supplier tracking.",
    image: "/projects/beltworld.png",
    technologies: ["Express.js", "MySQL", "Firebase", "Javascript"],
    liveUrl: "",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
  },
  {
    title: "IQ Booking",
    description:
      "A hotel and resort booking platform with features like property listing, availability tracking, discounts, and online payment integration.",
    image: "/projects/iqbooking.png",
    technologies: ["Nest.js", "MySQL", "Firebase", "Typescript"],
    liveUrl: "https://apps.apple.com/us/app/iq-booking/id6746382861",
    gits: [],
    tag: "production",
    starred: true,
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
    showInHome: true,
  },
  {
    title: "Mallsat",
    description: "A full-stack real estate management platform.",
    image: "",
    technologies: ["Next.js", "Typescript"],
    liveUrl: "",
    gits: [],
    tag: "production",
    types: ["system"],
    client_specific: true,
    clients: [clients.kitnCompany],
    contributor: contributors.kitnCompany,
    starred: true,
  },
  {
    title: "IQ Bids",
    description:
      "A full-stack car bids management platform, plus mobile apps for Android and iOS.",
    image: "",
    technologies: ["Nest.js", "MySQL", "Knex.js", "Firebase"],
    liveUrl: "https://apps.apple.com/iq/app/iqbid/id6751471543?l=ar",
    gits: [],
    tag: "production",
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [clients.iqBids],
    starred: true,
  },
  {
    title: "Restaurant System",
    description:
      "A modern restaurant management system built with React.js and Nest.js using Shadcn UI. Designed for large-scale operations, it features multi-printer support, live order tracking, table management, and a sleek admin dashboard for streamlined restaurant workflows.",

    image: "/projects/restaurant_system.png",
    technologies: [
      "React",
      "Nest.js",
      "MySQL",
      "Typescript",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Zod",
      "Zustand",
      "React Query",
    ],
    liveUrl: "",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    title: "Expense System",
    description:
      "A comprehensive expense management system built with React.js and Nest.js using Shadcn UI. It includes features for tracking expenses, generating reports, managing budgets, and user role management for efficient financial oversight.",

    image: "/projects/expense_system.png",
    technologies: [
      "React",
      "Nest.js",
      "MySQL",
      "Typescript",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Zod",
      "Zustand",
      "React Query",
    ],
    liveUrl: "",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    title: "Carwash System",
    description:
      "A modern restaurant management system built with React.js and Nest.js using Shadcn UI. Designed for large-scale operations, it features multi-printer support, live order tracking, table management, and a sleek admin dashboard for streamlined restaurant workflows.",

    image: "/projects/ap_carwash.png",
    technologies: [
      "React",
      "Nest.js",
      "MySQL",
      "Typescript",
      "Prisma",
      "TailwindCSS",
      "Shadcn UI",
      "Zod",
      "Zustand",
      "React Query",
    ],
    liveUrl: "https://demo.apsoft.tech",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: false,
    clients: [clients.rahaCarwash],
    contributor: contributors.apSoft,
  },
  {
    title: "Bazian Solar",
    description:
      "Company website for a solar tech business. Includes service descriptions, contact info, and a modern UI/UX design for a professional look.",
    image: "/projects/bazian_solar.png",
    technologies: ["React", "Express.js", "MySQL", "Firebase", "Typescript"],
    tag: "production",
    starred: true,
    liveUrl: "https://baziansolar.com/",
    gits: [],
    types: ["web", "simple dashboard"],
    client_specific: true,
    clients: [clients.bazianSolar],
    contributor: contributors.bester,
  },
  {
    title: "Golden Paper",
    description:
      "Company website for a solar tech business. Includes service descriptions, contact info, and a modern UI/UX design for a professional look.",
    image: "/projects/golden_paper.png",
    technologies: ["Vue.js", "Typescript"],
    tag: "production",
    starred: true,
    liveUrl: "https://golden-paper.net/",
    gits: [],
    types: ["web"],
    client_specific: true,
    clients: [clients.goldenPaper],
    contributor: contributors.bester,
  },
  {
    title: "Digital Menu Website",
    description:
      "An intuitive web platform offering digital menu access via QR codes, designed with a sleek modern interface to enhance customer experience and streamline ordering processes.",
    image: "/projects/ominu.png",
    technologies: ["React", "Typescript", "GSAP Animation"],
    tag: "production",
    starred: true,
    liveUrl: "https://ominu.net/",
    gits: [],
    types: ["web"],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    title: "Simple Menu QRCode",
    description:
      "An intuitive web platform offering digital menu access via QR codes, designed with a sleek modern interface to enhance customer experience and streamline ordering processes.",
    image: "/projects/simple_menu.png",
    technologies: ["React", "Nest.js", "PostgreSQL", "Typescript"],
    tag: "production",
    starred: true,
    liveUrl: "https://demo.ominu.net/",
    gits: [],
    types: ["web", "simple dashboard"],
    client_specific: false,
    clients: [clients.fancyRest, clients.fancy],
    contributor: contributors.apSoft,
  },
  {
    title: "Janan Group",
    description:
      "Product showcase website for a Kurdish notebook brand with product listings, contact form, and ordering via social media.",
    image: "/projects/janan.png",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "Javascript"],
    liveUrl: "https://janan-group.com/",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: true,
    clients: [clients.jananGroup],
    contributor: contributors.bester,
  },
  {
    title: "Kurdface",
    description:
      "A full-featured Kurdish social network platform modeled after Facebook. Includes posts, comments, messaging, real-time notifications, and admin moderation tools.",
    image: "/projects/facebook.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Firebase",
      "Redux",
    ],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("facebook-frontend"),
      },
      {
        name: "Backend",
        url: getGithubLink("facebook-api"),
      },
      {
        name: "Socket",
        url: getGithubLink("facebook-socket"),
      },
    ],
    tag: "learning",
    types: ["web", "complex dashboard"],
    client_specific: false,
  },
  {
    title: "Bester Group",
    description:
      "A sleek and modern company profile site showcasing services and portfolio with interactive elements and responsive design.",
    image: "/projects/bester.png",
    technologies: ["React", "Javascript"],
    liveUrl: "https://bester-group.com/",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },

  {
    title: "Kurdferga",
    description:
      "An academic resource platform for Kurdish students. Includes course content, to-do list, timers, and a pro subscription tier.",
    image: "/projects/kurdferga.png",
    technologies: ["React", "Express.js", "MongoDB", "Firebase", "Redux"],
    liveUrl: "https://kurdferga.net",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },
  {
    title: "Kurdidioms",
    description:
      "A community-driven Kurdish-English idiom translation and explanation platform with user submission, admin review, and moderation.",
    image: "/projects/idiom.png",
    technologies: ["React", "Firebase", "Javascript", "Redux"],
    liveUrl: "https://idoim.bester-group.com",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },

  {
    title: "Refinery System",
    description:
      "Enterprise-level web platform for managing refinery operations including storage, finance, production, and workforce. Built using PostgreSQL and Knex.js.",
    image: "/projects/refinery.png",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Knex.js",
      "Firebase",
      "Javascript",
    ],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("refinery_system_front"),
      },
      {
        name: "Backend",
        url: getGithubLink("refinery_system_server"),
      },
    ],
    tag: "university",
    types: ["system"],
    client_specific: false,
  },
  {
    title: "Pet System",
    description:
      "A full-featured system to manage pet clinic operations, appointments, records, and staff. Optimized for veterinarians and pet clinic staff.",
    image: "/projects/pet.png",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Knex.js",
      "Firebase",
      "Javascript",
    ],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("pet-system-front"),
      },
      {
        name: "Backend",
        url: getGithubLink("pet-system-server"),
      },
    ],
    tag: "university",
    types: ["system"],
    client_specific: false,
  },
  {
    title: "Absence Management System",
    description:
      "A system to track and manage employee absences. Includes request submission, approvals, search, and filter features.",
    image: "/projects/absence.png",
    technologies: [
      "React",
      "Express.js",
      "PostgreSQL",
      "Knex.js",
      "Firebase",
      "Javascript",
    ],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("absence_system_front"),
      },
      {
        name: "Backend",
        url: getGithubLink("absence_system_server"),
      },
    ],
    tag: "university",
    types: ["system"],
    client_specific: false,
  },
  {
    title: "Tile Vania",
    description:
      "A simple platformer game inspired by Mario. Includes 3 levels and a boss level with coins, traps, and enemy monsters.",
    image: "/projects/unity.jpg",
    technologies: ["Unity", "C#"],
    liveUrl: "https://ahmadsoftware.itch.io/myfirstgame",
    gits: [],
    tag: "learning",
    types: ["game"],
    client_specific: false,
  },
  {
    title: "Kurd Todo",
    description:
      "A task manager app where users can create and manage to-do items, collections, and track their productivity over time.",
    image: "/projects/todo.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Javascript",
      "Redux",
    ],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("React-todo-front"),
      },
      {
        name: "Backend",
        url: getGithubLink("React-todo-api"),
      },
    ],
    tag: "learning",
    types: ["web"],
    client_specific: false,
  },
  {
    title: "Farmuda",
    description:
      "A religious platform for Islamic hadith and Q&A built for Sayay Farmuda, with educational and community interaction features.",
    image: "/projects/saya.png",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Javascript",
      "Redux",
    ],
    gits: [],
    tag: "down",
    types: ["web", "app", "complex dashboard"],
    client_specific: false,
  },

  {
    title: "GCommerce",
    description:
      "A robust e-commerce application developed using React and Laravel. It offers a secure, feature-rich shopping experience and admin control.",
    image: "/projects/gcommerce.png",
    technologies: ["React", "Javascript"],
    gits: [],
    tag: "learning",
    types: ["complex dashboard", "app", "web"],
    client_specific: false,
  },

  {
    title: "Bucks To Bar Copilot",
    description:
      "A tool to assist users in converting their bucks to bars seamlessly. This project for learning how to use Github Copilot In the best way for developing in JS",
    image: "/projects/bucks_to_bar_copilot.png",
    technologies: ["Javascript", "Jest"],
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("bucks-to-bar-copilot"),
      },
    ],
    tag: "learning",
    types: ["web"],
    client_specific: false,
  },
];
export const projects: Project[] = data.map((project, index) => ({
  ...(project as Project),
  id: index + 1,
}));
