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
  "UploadThings",
  "Clerk",
  "Neon",
  "OpenAI",
  "Ollama",
  "Next Auth",
  "2FA",
  "Passport.js",
  "Stripe",
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
  | "bots"
  | "ai_generator"
  | "Link-Shortener"
  | "shadcn"
  | "learning_tracker"
  | "shop_backend"
  | "shop_frontend";
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
  rahaCarwash: persons.rahaCarwash,
  kitnCompany: persons.kitnCompany,
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
  titleKey: string;
  descriptionKey: string;
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
    titleKey: "projects.shop.title",
    descriptionKey: "projects.shop.description",
    image: "/projects/shop.png",
    technologies: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Prisma",
      "PostgreSQL",
      "Next Auth",
      "2FA",
      "Nest.js",
      "Stripe",
      "Passport.js",
      "Socket.io",
    ],
    liveUrl: "https://shop.ahmad-software.com/",
    gits: [
      {
        name: "Frontend",
        url: getGithubLink("shop_frontend"),
      },
      {
        name: "Backend",
        url: getGithubLink("shop_backend"),
      },
    ],
    tag: "production",
    types: ["web"],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    titleKey: "projects.learning_tracker.title",
    descriptionKey: "projects.learning_tracker.description",
    image: "/projects/learning_tracker.png",
    technologies: [
      "Next.js",
      "Typescript",
      "Shadcn UI",
      "Neon",
      "PostgreSQL",
      "Next Auth",
      "2FA",
    ],
    liveUrl: "https://learningtracker.ahmad-software.com/",
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("learning_tracker"),
      },
    ],
    tag: "production",
    types: ["web"],
    client_specific: false,
    starred: true,
  },
  {
    titleKey: "projects.ai_generator.title",
    descriptionKey: "projects.ai_generator.description",
    image: "/projects/ai_generator.png",
    technologies: ["Next.js", "Typescript", "Shadcn UI", "OpenAI", "Ollama"],
    liveUrl: "https://ai.ahmad-software.com/",
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("ai_generator"),
      },
    ],
    tag: "production",
    types: ["web"],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    titleKey: "projects.bot_website.title",
    descriptionKey: "projects.bot_website.description",
    image: "/projects/bots.png",
    technologies: [
      "Next.js",
      "Typescript",
      "Clerk",
      "Neon",
      "PostgreSQL",
      "Zod",
      "Shadcn UI",
      "UploadThings",
    ],
    liveUrl: "https://bot.ahmad-software.com/",
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("bots"),
      },
    ],
    tag: "production",
    types: ["web", "simple dashboard"],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    titleKey: "projects.link_shortener.title",
    descriptionKey: "projects.link_shortener.description",
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
    liveUrl: "https://linkshortner.ahmad-software.com/",
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("Link-Shortener"),
      },
    ],
    tag: "production",
    types: ["web", "simple dashboard"],
    client_specific: false,
    starred: true,

    showInHome: true,
  },
  {
    titleKey: "projects.reminder_bot.title",
    descriptionKey: "projects.reminder_bot.description",
    image: "/projects/reminder_bot.png",
    technologies: ["Python", "Telegram API"],
    gits: [
      {
        name: "Bot",
        url: getGithubLink("reminder_bot"),
      },
    ],
    liveUrl: "https://t.me/ahmad_reminder_bot",
    tag: "production",
    types: ["telegram bot"],
    starred: true,

    client_specific: false,
  },
  {
    titleKey: "projects.shadcn.title",
    descriptionKey: "projects.shadcn.description",
    image: "/projects/shadcn.png",
    technologies: ["Next.js", "Typescript", "Shadcn UI"],
    liveUrl: "https://shadcn.ahmad-software.com/",
    gits: [
      {
        name: "Fullstack",
        url: getGithubLink("shadcn"),
      },
    ],
    tag: "production",
    types: ["web"],
    client_specific: false,
    starred: true,
  },
  {
    titleKey: "projects.yari_mndalan_website.title",
    descriptionKey: "projects.yari_mndalan_website.description",
    image: "/projects/yarimndalan_web.png",
    technologies: ["React", "Nest.js", "MySQL", "Prisma", "Typescript"],
    liveUrl: "",
    gits: [],
    tag: "production",
    types: ["web"],
    starred: true,
    showInHome: true,
  },
  {
    titleKey: "projects.ekleelz.title",
    descriptionKey: "projects.ekleelz.description",
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
    titleKey: "projects.ekleelz_dashboard.title",
    descriptionKey: "projects.ekleelz_dashboard.description",
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
    titleKey: "projects.yari_mndalan_system.title",
    descriptionKey: "projects.yari_mndalan_system.description",
    image: "/projects/yarimndalan_system.png",
    technologies: ["React", "Nest.js", "MySQL", "Prisma", "Typescript"],
    gits: [],
    tag: "production",
    types: ["web", "complex dashboard", "system"],
    starred: true,
    showInHome: true,
  },

  {
    titleKey: "projects.kallapost.title",
    descriptionKey: "projects.kallapost.description",
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
    titleKey: "projects.meera_post.title",
    descriptionKey: "projects.meera_post.description",
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
    titleKey: "projects.factory_system.title",
    descriptionKey: "projects.factory_system.description",
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
    titleKey: "projects.benabzar.title",
    descriptionKey: "projects.benabzar.description",
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
  },
  {
    titleKey: "projects.belt_world.title",
    descriptionKey: "projects.belt_world.description",
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
    titleKey: "projects.iq_booking.title",
    descriptionKey: "projects.iq_booking.description",
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
  },
  {
    titleKey: "projects.mallsat.title",
    descriptionKey: "projects.mallsat.description",
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
    titleKey: "projects.iq_bids.title",
    descriptionKey: "projects.iq_bids.description",
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
    titleKey: "projects.restaurant_system.title",
    descriptionKey: "projects.restaurant_system.description",

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
    titleKey: "projects.expense_system.title",
    descriptionKey: "projects.expense_system.description",

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
    titleKey: "projects.carwash_system.title",
    descriptionKey: "projects.carwash_system.description",

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
    titleKey: "projects.bazian_solar.title",
    descriptionKey: "projects.bazian_solar.description",
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
    titleKey: "projects.golden_paper.title",
    descriptionKey: "projects.golden_paper.description",
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
    titleKey: "projects.digital_menu_website.title",
    descriptionKey: "projects.digital_menu_website.description",
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
    titleKey: "projects.simple_menu_qrcode.title",
    descriptionKey: "projects.simple_menu_qrcode.description",
    image: "/projects/simple_menu.png",
    technologies: ["React", "Nest.js", "PostgreSQL", "Typescript"],
    tag: "production",
    starred: true,
    liveUrl: "https://demo.ominu.net/",
    gits: [],
    types: ["web", "simple dashboard"],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    titleKey: "projects.janan_group.title",
    descriptionKey: "projects.janan_group.description",
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
    titleKey: "projects.kurdface.title",
    descriptionKey: "projects.kurdface.description",
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
    titleKey: "projects.bester_group.title",
    descriptionKey: "projects.bester_group.description",
    image: "/projects/bester.png",
    technologies: ["React", "Javascript"],
    liveUrl: "https://bester-group.com/",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },

  {
    titleKey: "projects.kurdferga.title",
    descriptionKey: "projects.kurdferga.description",
    image: "/projects/kurdferga.png",
    technologies: ["React", "Express.js", "MongoDB", "Firebase", "Redux"],
    liveUrl: "https://kurdferga.net",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },
  {
    titleKey: "projects.kurdidioms.title",
    descriptionKey: "projects.kurdidioms.description",
    image: "/projects/idiom.png",
    technologies: ["React", "Firebase", "Javascript", "Redux"],
    liveUrl: "https://idoim.bester-group.com",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: false,
  },

  {
    titleKey: "projects.refinery_system.title",
    descriptionKey: "projects.refinery_system.description",
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
    titleKey: "projects.pet_system.title",
    descriptionKey: "projects.pet_system.description",
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
    titleKey: "projects.absence_management_system.title",
    descriptionKey: "projects.absence_management_system.description",
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
    titleKey: "projects.tile_vania.title",
    descriptionKey: "projects.tile_vania.description",
    image: "/projects/unity.jpg",
    technologies: ["Unity", "C#"],
    liveUrl: "https://ahmadsoftware.itch.io/myfirstgame",
    gits: [],
    tag: "learning",
    types: ["game"],
    client_specific: false,
  },
  {
    titleKey: "projects.kurd_todo.title",
    descriptionKey: "projects.kurd_todo.description",
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
    titleKey: "projects.farmuda.title",
    descriptionKey: "projects.farmuda.description",
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
    titleKey: "projects.gcommerce.title",
    descriptionKey: "projects.gcommerce.description",
    image: "/projects/gcommerce.png",
    technologies: ["React", "Javascript"],
    gits: [],
    tag: "learning",
    types: ["complex dashboard", "app", "web"],
    client_specific: false,
  },

  {
    titleKey: "projects.bucks_to_bar_copilot.title",
    descriptionKey: "projects.bucks_to_bar_copilot.description",
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
