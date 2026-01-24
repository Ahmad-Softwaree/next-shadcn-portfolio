export enum ProjectTech {
  MySQL = "MySQL",
  PostgreSQL = "PostgreSQL",
  MongoDB = "MongoDB",
  SQLite = "SQLite",
  Firebase = "Firebase",
  React = "React",
  NextJs = "Next.js",
  NestJs = "Nest.js",
  Typescript = "Typescript",
  Prisma = "Prisma",
  Javascript = "Javascript",
  ExpressJs = "Express.js",
  KnexJs = "Knex.js",
  TailwindCSS = "TailwindCSS",
  ShadcnUI = "Shadcn UI",
  Zod = "Zod",
  Zustand = "Zustand",
  ReactQuery = "React Query",
  Redux = "Redux",
  VueJs = "Vue.js",
  GSAPAnimation = "GSAP Animation",
  SocketIo = "Socket.io",
  Unity = "Unity",
  Jest = "Jest",
  CSharp = "C#",
  Python = "Python",
  TelegramAPI = "Telegram API",
  UploadThings = "UploadThings",
  Clerk = "Clerk",
  Neon = "Neon",
  OpenAI = "OpenAI",
  Ollama = "Ollama",
  NextAuth = "Next Auth",
  TwoFA = "2FA",
  PassportJs = "Passport.js",
  Stripe = "Stripe",
  I18next = "i18next",
  NextIntl = "Next-Intl",
  Motion = "Motion",
}
export const projectTechs = Object.values(ProjectTech);

export enum ProjectTag {
  Production = "production",
  Down = "down",
  Learning = "learning",
  University = "university",
}

export const projectTags = Object.values(ProjectTag);

export enum ProjectType {
  Web = "web",
  App = "app",
  System = "system",
  SimpleDashboard = "simple_dashboard",
  ComplexDashboard = "complex_dashboard",
  Game = "game",
  TelegramBot = "telegram_bot",
}

export const projectTypes = Object.values(ProjectType);

export enum RepoType {
  Frontend = "Frontend",
  Backend = "Backend",
  Bot = "Bot",
  Socket = "Socket",
  Fullstack = "Fullstack",
}
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
  | "shop_frontend"
  | "quran";
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
export const apis = {
  quran: { name: "Quran", url: "https://quran.com/developers" },
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

export const externalApis = {
  quran: apis.quran,
};

export type ClientKey = keyof typeof clients;
export type ContributorKey = keyof typeof contributors;

export type Client = (typeof clients)[ClientKey];
export type Contributor = (typeof contributors)[ContributorKey];

export type ApiKey = keyof typeof externalApis;
export type ExternalApi = (typeof externalApis)[ApiKey];

export type ProjectVersion = {
  version: number;
  technologies: ProjectTech[];
};

export type Project = {
  id: number;
  textKey: string;
  image: string;
  technologies: ProjectTech[];
  versions: ProjectVersion[];
  currentVersion: number;
  liveUrl?: string;
  gits?: GitRepo[];
  tag?: ProjectTag;
  starred?: boolean;
  types?: ProjectType[];
  client_specific: boolean;
  clients?: Client[];
  contributor?: Contributor;
  externalApi?: ExternalApi;
  showInHome: boolean;
};
export const data: Partial<Project>[] = [
  {
    textKey: "quran",
    image: "/projects/quran.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.I18next,
          ProjectTech.Motion,
        ],
      },
      {
        version: 2,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.NextIntl,
          ProjectTech.Motion,
        ],
      },
    ],
    liveUrl: "https://quran.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("quran"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: false,
    starred: true,
    showInHome: true,
    externalApi: externalApis.quran,
  },
  {
    textKey: "shop",
    image: "/projects/shop.png",

    liveUrl: "https://shop.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("shop_frontend"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("shop_backend"),
      },
    ],
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.Prisma,
          ProjectTech.PostgreSQL,
          ProjectTech.NextAuth,
          ProjectTech.TwoFA,
          ProjectTech.NestJs,
          ProjectTech.Stripe,
          ProjectTech.PassportJs,
          ProjectTech.SocketIo,
          ProjectTech.Motion,
        ],
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    textKey: "learning_tracker",
    image: "/projects/learning_tracker.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.Neon,
          ProjectTech.PostgreSQL,
          ProjectTech.NextAuth,
          ProjectTech.TwoFA,
          ProjectTech.Motion,
        ],
      },
    ],
    liveUrl: "https://learningtracker.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("learning_tracker"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: false,
    starred: true,
  },
  {
    textKey: "ai_generator",
    image: "/projects/ai_generator.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.OpenAI,
          ProjectTech.Ollama,
          ProjectTech.I18next,
          ProjectTech.Motion,
        ],
      },
      {
        version: 2,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.OpenAI,
          ProjectTech.Ollama,
          ProjectTech.NextIntl,
          ProjectTech.Motion,
        ],
      },
    ],
    liveUrl: "https://ai.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("ai_generator"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    textKey: "bot_website",
    image: "/projects/bots.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.Clerk,
          ProjectTech.Neon,
          ProjectTech.PostgreSQL,
          ProjectTech.Zod,
          ProjectTech.ShadcnUI,
          ProjectTech.UploadThings,
          ProjectTech.Motion,
          ProjectTech.I18next,
        ],
      },
      {
        version: 2,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.Clerk,
          ProjectTech.Neon,
          ProjectTech.PostgreSQL,
          ProjectTech.Zod,
          ProjectTech.ShadcnUI,
          ProjectTech.UploadThings,
          ProjectTech.Motion,
          ProjectTech.NextIntl,
        ],
      },
    ],
    liveUrl: "https://bot.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("bots"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web, ProjectType.SimpleDashboard],
    client_specific: false,
    starred: true,
    showInHome: true,
  },
  {
    textKey: "link_shortener",
    image: "/projects/link_shortener.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.Clerk,
          ProjectTech.Neon,
          ProjectTech.PostgreSQL,
          ProjectTech.Zod,
          ProjectTech.ShadcnUI,
          ProjectTech.Motion,
        ],
      },
    ],
    liveUrl: "https://linkshortner.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("Link-Shortener"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web, ProjectType.SimpleDashboard],
    client_specific: false,
    starred: true,

    showInHome: true,
  },
  {
    textKey: "reminder_bot",
    image: "/projects/reminder_bot.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.Python, ProjectTech.TelegramAPI],
      },
    ],
    gits: [
      {
        name: RepoType.Bot,
        url: getGithubLink("reminder_bot"),
      },
    ],
    liveUrl: "https://t.me/ahmad_reminder_bot",
    tag: ProjectTag.Production,
    types: [ProjectType.TelegramBot],
    starred: true,

    client_specific: false,
  },
  {
    textKey: "shadcn",
    image: "/projects/shadcn.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.I18next,
          ProjectTech.Motion,
        ],
      },
      {
        version: 2,
        technologies: [
          ProjectTech.NextJs,
          ProjectTech.Typescript,
          ProjectTech.ShadcnUI,
          ProjectTech.NextIntl,
          ProjectTech.Motion,
        ],
      },
    ],
    liveUrl: "https://shadcn.ahmad-software.com/",
    gits: [
      {
        name: RepoType.Fullstack,
        url: getGithubLink("shadcn"),
      },
    ],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: false,
    starred: true,
  },
  {
    textKey: "yari_mndalan_website",
    image: "/projects/yarimndalan_web.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Prisma,
          ProjectTech.Typescript,
        ],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    starred: true,
    showInHome: true,
  },
  {
    textKey: "ekleelz",
    image: "/projects/ekleelz.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.React, ProjectTech.Typescript],
      },
    ],
    liveUrl: "https://verify.ekleelz.com",
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.Web],
    client_specific: true,
    clients: [clients.ekleelz],
    starred: true,
    showInHome: true,
  },
  {
    textKey: "ekleelz_dashboard",
    image: "/projects/ekleelz-system.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Prisma,
          ProjectTech.Typescript,
        ],
      },
    ],
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.SimpleDashboard],
    client_specific: true,
    clients: [clients.ekleelz],
    starred: true,
    showInHome: true,
  },
  {
    textKey: "yari_mndalan_system",
    image: "/projects/yarimndalan_system.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Prisma,
          ProjectTech.Typescript,
        ],
      },
    ],
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.Web, ProjectType.ComplexDashboard, ProjectType.System],
    starred: true,
    showInHome: true,
  },

  {
    textKey: "kallapost",
    image: "/projects/kalla.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.PostgreSQL,
          ProjectTech.KnexJs,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kalla.kallapost",
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.ComplexDashboard, ProjectType.App],
    client_specific: true,
    clients: [clients.kallapost],
    contributor: contributors.bester,
    starred: true,
  },
  {
    textKey: "meera_post",
    image: "/projects/meera.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.MongoDB,
          ProjectTech.ExpressJs,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
          ProjectTech.Redux,
        ],
      },
    ],
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.System],
    client_specific: true,
    clients: [clients.meeraPost],
    contributor: contributors.bester,
    starred: true,
  },
  {
    textKey: "factory_system",
    image: "/projects/factory_system.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Typescript,
          ProjectTech.Prisma,
          ProjectTech.TailwindCSS,
          ProjectTech.ShadcnUI,
          ProjectTech.Zod,
          ProjectTech.Zustand,
          ProjectTech.ReactQuery,
        ],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.System],
    client_specific: true,
    clients: [clients.goldenPaper],
    contributor: contributors.bester,
  },
  {
    textKey: "benabzar",
    image: "/projects/benabazar.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.ExpressJs,
          ProjectTech.MySQL,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    liveUrl: "https://apps.apple.com/us/app/bena-bazar/id6743659036?uo=2",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.App, ProjectType.ComplexDashboard],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
  },
  {
    textKey: "belt_world",
    image: "/projects/beltworld.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.ExpressJs,
          ProjectTech.MySQL,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.System],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
  },
  {
    textKey: "iq_booking",
    image: "/projects/iqbooking.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Firebase,
          ProjectTech.Typescript,
        ],
      },
    ],
    liveUrl: "https://apps.apple.com/us/app/iq-booking/id6746382861",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.ComplexDashboard, ProjectType.App],
    client_specific: true,
    clients: [clients.avanaSoft],
    contributor: contributors.avanaSoft,
  },
  {
    textKey: "mallsat",
    image: "",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.NextJs, ProjectTech.Typescript],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.System],
    client_specific: true,
    clients: [clients.kitnCompany],
    contributor: contributors.kitnCompany,
    starred: true,
  },
  {
    textKey: "iq_bids",
    image: "",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.KnexJs,
          ProjectTech.Firebase,
        ],
      },
    ],
    liveUrl: "https://apps.apple.com/iq/app/iqbid/id6751471543?l=ar",
    gits: [],
    tag: ProjectTag.Production,
    types: [ProjectType.ComplexDashboard, ProjectType.App],
    client_specific: true,
    clients: [clients.iqBids],
    starred: true,
  },
  {
    textKey: "restaurant_system",

    image: "/projects/restaurant_system.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Typescript,
          ProjectTech.Prisma,
          ProjectTech.TailwindCSS,
          ProjectTech.ShadcnUI,
          ProjectTech.Zod,
          ProjectTech.Zustand,
          ProjectTech.ReactQuery,
        ],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.System],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    textKey: "expense_system",

    image: "/projects/expense_system.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Typescript,
          ProjectTech.Prisma,
          ProjectTech.TailwindCSS,
          ProjectTech.ShadcnUI,
          ProjectTech.Zod,
          ProjectTech.Zustand,
          ProjectTech.ReactQuery,
        ],
      },
    ],
    liveUrl: "",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.System],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    textKey: "carwash_system",

    image: "/projects/ap_carwash.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.MySQL,
          ProjectTech.Typescript,
          ProjectTech.Prisma,
          ProjectTech.TailwindCSS,
          ProjectTech.ShadcnUI,
          ProjectTech.Zod,
          ProjectTech.Zustand,
          ProjectTech.ReactQuery,
        ],
      },
    ],
    liveUrl: "https://demo.apsoft.tech",
    gits: [],
    tag: ProjectTag.Production,
    starred: true,
    types: [ProjectType.System],
    client_specific: false,
    clients: [clients.rahaCarwash],
    contributor: contributors.apSoft,
  },
  {
    textKey: "bazian_solar",
    image: "/projects/bazian_solar.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.MySQL,
          ProjectTech.Firebase,
          ProjectTech.Typescript,
        ],
      },
    ],
    tag: ProjectTag.Production,
    starred: true,
    liveUrl: "https://baziansolar.com/",
    gits: [],
    types: [ProjectType.Web, ProjectType.SimpleDashboard],
    client_specific: true,
    clients: [clients.bazianSolar],
    contributor: contributors.bester,
  },
  {
    textKey: "golden_paper",
    image: "/projects/golden_paper.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.VueJs, ProjectTech.Typescript],
      },
    ],
    tag: ProjectTag.Production,
    starred: true,
    liveUrl: "https://golden-paper.net/",
    gits: [],
    types: [ProjectType.Web],
    client_specific: true,
    clients: [clients.goldenPaper],
    contributor: contributors.bester,
  },
  {
    textKey: "digital_menu_website",
    image: "/projects/ominu.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.Typescript,
          ProjectTech.GSAPAnimation,
        ],
      },
    ],
    tag: ProjectTag.Production,
    starred: true,
    liveUrl: "https://ominu.net/",
    gits: [],
    types: [ProjectType.Web],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    textKey: "simple_menu_qrcode",
    image: "/projects/simple_menu.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.NestJs,
          ProjectTech.PostgreSQL,
          ProjectTech.Typescript,
        ],
      },
    ],
    tag: ProjectTag.Production,
    starred: true,
    liveUrl: "https://demo.ominu.net/",
    gits: [],
    types: [ProjectType.Web, ProjectType.SimpleDashboard],
    client_specific: false,
    clients: [],
    contributor: contributors.apSoft,
  },
  {
    textKey: "janan_group",
    image: "/projects/janan.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.VueJs,
          ProjectTech.ExpressJs,
          ProjectTech.MongoDB,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    liveUrl: "https://janan-group.com/",
    gits: [],
    tag: ProjectTag.Down,
    types: [ProjectType.Web],
    client_specific: true,
    clients: [clients.jananGroup],
    contributor: contributors.bester,
  },
  {
    textKey: "kurdface",
    image: "/projects/facebook.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.MongoDB,
          ProjectTech.SocketIo,
          ProjectTech.Firebase,
          ProjectTech.Redux,
        ],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("facebook-frontend"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("facebook-api"),
      },
      {
        name: RepoType.Socket,
        url: getGithubLink("facebook-socket"),
      },
    ],
    tag: ProjectTag.Learning,
    types: [ProjectType.Web, ProjectType.ComplexDashboard],
    client_specific: false,
  },
  {
    textKey: "bester_group",
    image: "/projects/bester.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.React, ProjectTech.Javascript],
      },
    ],
    liveUrl: "https://bester-group.com/",
    gits: [],
    tag: ProjectTag.Down,
    types: [ProjectType.Web],
    client_specific: false,
  },

  {
    textKey: "kurdferga",
    image: "/projects/kurdferga.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.MongoDB,
          ProjectTech.Firebase,
          ProjectTech.Redux,
        ],
      },
    ],
    liveUrl: "https://kurdferga.net",
    gits: [],
    tag: ProjectTag.Down,
    types: [ProjectType.Web],
    client_specific: false,
  },
  {
    textKey: "kurdidioms",
    image: "/projects/idiom.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
          ProjectTech.Redux,
        ],
      },
    ],
    liveUrl: "https://idoim.bester-group.com",
    gits: [],
    tag: ProjectTag.Down,
    types: [ProjectType.Web],
    client_specific: false,
  },

  {
    textKey: "refinery_system",
    image: "/projects/refinery.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.PostgreSQL,
          ProjectTech.KnexJs,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("refinery_system_front"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("refinery_system_server"),
      },
    ],
    tag: ProjectTag.University,
    types: [ProjectType.System],
    client_specific: false,
  },
  {
    textKey: "pet_system",
    image: "/projects/pet.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.PostgreSQL,
          ProjectTech.KnexJs,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("pet-system-front"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("pet-system-server"),
      },
    ],
    tag: ProjectTag.University,
    types: [ProjectType.System],
    client_specific: false,
  },
  {
    textKey: "absence_management_system",
    image: "/projects/absence.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.PostgreSQL,
          ProjectTech.KnexJs,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
        ],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("absence_system_front"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("absence_system_server"),
      },
    ],
    tag: ProjectTag.University,
    types: [ProjectType.System],
    client_specific: false,
  },
  {
    textKey: "tile_vania",
    image: "/projects/unity.jpg",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.Unity, ProjectTech.CSharp],
      },
    ],
    liveUrl: "https://ahmadsoftware.itch.io/myfirstgame",
    gits: [],
    tag: ProjectTag.Learning,
    types: [ProjectType.Game],
    client_specific: false,
  },
  {
    textKey: "kurd_todo",
    image: "/projects/todo.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.MongoDB,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
          ProjectTech.Redux,
        ],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("React-todo-front"),
      },
      {
        name: RepoType.Backend,
        url: getGithubLink("React-todo-api"),
      },
    ],
    tag: ProjectTag.Learning,
    types: [ProjectType.Web],
    client_specific: false,
  },
  {
    textKey: "farmuda",
    image: "/projects/saya.png",
    versions: [
      {
        version: 1,
        technologies: [
          ProjectTech.React,
          ProjectTech.ExpressJs,
          ProjectTech.MongoDB,
          ProjectTech.Firebase,
          ProjectTech.Javascript,
          ProjectTech.Redux,
        ],
      },
    ],
    gits: [],
    tag: ProjectTag.Down,
    types: [ProjectType.Web, ProjectType.App, ProjectType.ComplexDashboard],
    client_specific: false,
  },

  {
    textKey: "gcommerce",
    image: "/projects/gcommerce.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.React, ProjectTech.Javascript],
      },
    ],
    gits: [],
    tag: ProjectTag.Learning,
    types: [ProjectType.ComplexDashboard, ProjectType.App, ProjectType.Web],
    client_specific: false,
  },

  {
    textKey: "bucks_to_bar_copilot",
    image: "/projects/bucks_to_bar_copilot.png",
    versions: [
      {
        version: 1,
        technologies: [ProjectTech.Javascript, ProjectTech.Jest],
      },
    ],
    gits: [
      {
        name: RepoType.Frontend,
        url: getGithubLink("bucks-to-bar-copilot"),
      },
    ],
    tag: ProjectTag.Learning,
    types: [ProjectType.Web],
    client_specific: false,
  },
];
export const projects: Project[] = data.map((project, index) => ({
  ...(project as Project),
  currentVersion: project.versions
    ? project.versions[project.versions.length - 1].version
    : 1,
  technologies: project.versions
    ? project.versions[project.versions.length - 1].technologies
    : [],
  id: index + 1,
}));
