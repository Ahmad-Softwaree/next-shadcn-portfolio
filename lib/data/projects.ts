export interface GitRepo {
  name: string;
  url: string;
}

export interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  gits?: GitRepo[];
  tag?: "production" | "learning" | "university" | "down";
  starred?: boolean;
  types?: Array<
    "web" | "app" | "system" | "simple dashboard" | "complex dashboard" | "game"
  >;
  client_specific: boolean;
  clients?: { name: string; url: string }[];
  contributor?: { name: string; url: string };
}

export const rawProjects: Partial<ProjectCardProps>[] = [
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
      "JavaScript",
    ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.kalla.kallapost",
    gits: [],
    tag: "production",
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [
      { name: "Kallapost", url: "https://www.facebook.com/KallaPost/" },
    ],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
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
      "JavaScript",
      "Redux",
    ],
    gits: [],
    tag: "production",
    types: ["system"],
    client_specific: true,
    clients: [{ name: "Meera post", url: "" }],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
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
      "Mysql",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "ShadCN UI",
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
    clients: [{ name: "Golden Paper", url: "https://golden-paper.net/" }],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
  },
  {
    title: "Benabzar",
    description:
      "An online food delivery application developed using Express.js. Features include customer order placement, delivery status tracking, and admin dashboard for restaurant management.",
    image: "/projects/benabazar.png",
    technologies: ["Express.js", "MySQL", "Firebase", "JavaScript"],
    liveUrl: "https://apps.apple.com/us/app/bena-bazar/id6743659036?uo=2",
    gits: [],
    tag: "production",
    starred: true,
    types: ["app", "complex dashboard"],
    client_specific: true,
    clients: [{ name: "Avana Soft", url: "https://avanasoft.com/" }],
    contributor: { name: "Avana Soft", url: "https://avanasoft.com/" },
  },
  {
    title: "Belt World",
    description:
      "Storage and inventory management system designed for managing product entries, stock updates, and supplier tracking.",
    image: "/projects/beltworld.png",
    technologies: ["Express.js", "MySQL", "Firebase", "JavaScript"],
    liveUrl: "",
    gits: [],
    tag: "production",
    starred: true,
    types: ["system"],
    client_specific: true,
    clients: [{ name: "Avana Soft", url: "https://avanasoft.com/" }],
    contributor: { name: "Avana Soft", url: "https://avanasoft.com/" },
  },
  {
    title: "IQ Booking",
    description:
      "A hotel and resort booking platform with features like property listing, availability tracking, discounts, and online payment integration.",
    image: "/projects/iqbooking.png",
    technologies: ["Nest.js", "MySQL", "Firebase", "TypeScript"],
    liveUrl: "https://apps.apple.com/us/app/iq-booking/id6746382861",
    gits: [],
    tag: "production",
    starred: true,
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [{ name: "Avana Soft", url: "https://avanasoft.com/" }],
    contributor: { name: "Avana Soft", url: "https://avanasoft.com/" },
  },
  {
    title: "Mallsat",
    description: "A full-stack rael estate management platform.",
    image: "",
    technologies: ["Next.js", "TypeScript"],
    liveUrl: "",
    gits: [],
    tag: "production",
    types: ["system"],
    client_specific: true,
    clients: [],
    contributor: { name: "Mallsat", url: "" },
    starred: true,
  },
  {
    title: "IQ Bids",
    description:
      "A full-stack car bids management platform, plus mobile apps for Android and iOS.",
    image: "",
    technologies: ["Nest.js", "MySQL", "Knex.js", "Firebase"],
    liveUrl: "",
    gits: [],
    tag: "production",
    types: ["complex dashboard", "app"],
    client_specific: true,
    clients: [{ name: "IQ Bids", url: "" }],
    starred: true,
  },
  {
    title: "Restaurant System",
    description:
      "A modern restaurant management system built with React.js and Nest.js using ShadCN UI. Designed for large-scale operations, it features multi-printer support, live order tracking, table management, and a sleek admin dashboard for streamlined restaurant workflows.",

    image: "/projects/restaurant_system.png",
    technologies: [
      "React",
      "Nest.js",
      "Mysql",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "ShadCN UI",
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
    contributor: { name: "Ap Soft", url: "https://apsoft.tech/" },
  },
  {
    title: "Expense System",
    description:
      "A comprehensive expense management system built with React.js and Nest.js using ShadCN UI. It includes features for tracking expenses, generating reports, managing budgets, and user role management for efficient financial oversight.",

    image: "/projects/expense_system.png",
    technologies: [
      "React",
      "Nest.js",
      "Mysql",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "ShadCN UI",
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
    contributor: { name: "Ap Soft", url: "https://apsoft.tech/" },
  },
  {
    title: "Carwash System",
    description:
      "A modern restaurant management system built with React.js and Nest.js using ShadCN UI. Designed for large-scale operations, it features multi-printer support, live order tracking, table management, and a sleek admin dashboard for streamlined restaurant workflows.",

    image: "/projects/ap_carwash.png",
    technologies: [
      "React",
      "Nest.js",
      "Mysql",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "ShadCN UI",
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
    clients: [
      {
        name: "Raha Carwash",
        url: "",
      },
    ],
    contributor: { name: "Ap Soft", url: "https://apsoft.tech/" },
  },
  {
    title: "Bazian Solar",
    description:
      "Company website for a solar tech business. Includes service descriptions, contact info, and a modern UI/UX design for a professional look.",
    image: "/projects/bazian_solar.png",
    technologies: ["React", "Express.js", "MySQL", "Firebase", "TypeScript"],
    tag: "production",
    starred: true,
    liveUrl: "https://baziansolar.com/",
    gits: [],
    types: ["web", "simple dashboard"],
    client_specific: true,
    clients: [{ name: "Bazian Solar", url: "https://baziansolar.com/" }],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
  },
  {
    title: "Golden Paper",
    description:
      "Company website for a solar tech business. Includes service descriptions, contact info, and a modern UI/UX design for a professional look.",
    image: "/projects/golden_paper.png",
    technologies: ["Vue.js", "TypeScript"],
    tag: "production",
    starred: true,
    liveUrl: "https://golden-paper.net/",
    gits: [],
    types: ["web"],
    client_specific: true,
    clients: [{ name: "Golden Paper", url: "https://golden-paper.net/" }],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
  },
  {
    title: "Digital Menu Website",
    description:
      "An intuitive web platform offering digital menu access via QR codes, designed with a sleek modern interface to enhance customer experience and streamline ordering processes.",
    image: "/projects/ominu.png",
    technologies: ["React", "TypeScript", "GSAP Animation"],
    tag: "production",
    starred: true,
    liveUrl: "https://ominu.net/",
    gits: [],
    types: ["web"],
    client_specific: false,
    clients: [],
    contributor: { name: "AP Soft", url: "https://apsoft.tech/" },
  },
  {
    title: "Simple Menu QRCode",
    description:
      "An intuitive web platform offering digital menu access via QR codes, designed with a sleek modern interface to enhance customer experience and streamline ordering processes.",
    image: "/projects/simple_menu.png",
    technologies: ["React", "Nest.js", "Postgresql", "TypeScript"],
    tag: "production",
    starred: true,
    liveUrl: "https://demo.ominu.net/",
    gits: [],
    types: ["web", "simple dashboard"],
    client_specific: false,
    clients: [
      {
        name: "Fancy Rest",
        url: "https://www.facebook.com/fancy.rest.cafe/",
      },
      { name: "Fancy", url: "https://www.facebook.com/fancy.rest.cafe/" },
    ],
    contributor: { name: "AP Soft", url: "https://apsoft.tech/" },
  },
  {
    title: "Janan Group",
    description:
      "Product showcase website for a Kurdish notebook brand with product listings, contact form, and ordering via social media.",
    image: "/projects/janan.png",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Firebase", "JavaScript"],
    liveUrl: "https://janan-group.com/",
    gits: [],
    tag: "down",
    types: ["web"],
    client_specific: true,
    clients: [
      {
        name: "Janan Group",
        url: "https://janan-group.com/",
      },
    ],
    contributor: { name: "Bester", url: "https://bester-group.com/" },
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
      "Socket",
      "Firebase",
      "Redux",
    ],
    gits: [
      {
        name: "Frontend",
        url: "https://github.com/Ahmad-Softwaree/facebook-frontend",
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
    technologies: ["React", "JavaScript"],
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
    technologies: ["React", "Firebase", "JavaScript", "Redux"],
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
      "JavaScript",
    ],
    gits: [
      {
        name: "Frontend",
        url: "https://github.com/Ahmad-Softwaree/refinery_system_front",
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
      "JavaScript",
    ],
    gits: [
      {
        name: "Frontend",
        url: "https://github.com/Ahmad-Softwaree/pet_system_front",
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
      "JavaScript",
    ],
    gits: [
      {
        name: "Frontend",
        url: "https://github.com/Ahmad-Softwaree/absence_system_front",
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
      "JavaScript",
      "Redux",
    ],
    gits: [
      {
        name: "Frontend",
        url: "https://github.com/Ahmad-Softwaree/React-todo-front",
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
      "JavaScript",
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
    technologies: ["React", "JavaScript"],
    gits: [],
    tag: "learning",
    types: ["complex dashboard", "app", "web"],
    client_specific: false,
  },
];
export const projects: ProjectCardProps[] = rawProjects.map(
  (project, index) => ({
    ...(project as ProjectCardProps),
    id: index + 1,
  })
);
