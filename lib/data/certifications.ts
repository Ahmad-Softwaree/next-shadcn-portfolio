export type Certification = {
  id: number;
  title: string;
  url: string;
  image: string;
  starred: boolean;
  type: CertificateType;
};
export enum CertificateType {
  Udemy = "udemy",
  NetNinja = "netninja",
  LinkedIn = "linkedin",
  Salahadin = "salahadin",
  Kurdferga = "kurdferga",
}

export const certificationTypes = Object.values(CertificateType);

const data: Partial<Certification>[] = [
  {
    title: "Prompt Engineering for Everyone Bootcamp (Udemy)",
    url: "https://www.udemy.com/course/prompt-engineering-for-everyone-bootcamp/",
    image: "/certificates/prompt_engineering.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "Modern Javascript Course (Udemy)",
    url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    image: "/certificates/js.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "Full-stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    image: "/certificates/web.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "MERN Stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/mern-stack-front-to-back/",
    image: "/certificates/mern.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "Mongodb (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1714198",
    image: "/certificates/mongo.png",
    starred: false,
    type: CertificateType.NetNinja,
  },
  {
    title: "React Router (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1966403",
    image: "/certificates/react-router.png",
    starred: false,
    type: CertificateType.NetNinja,
  },
  {
    title: "React & Typescript (Udemy)",
    url: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    image: "/certificates/Typescript.jpg",
    starred: false,
    type: CertificateType.Udemy,
  },
  {
    title: "Certificate Of Appreciation (Salahadin University)",
    url: "https://su.edu.krd/",
    image: "/certificates/software.png",
    starred: true,
    type: CertificateType.Salahadin,
  },
  {
    title: "Certificate Of Appreciation (Kurdferga)",
    url: "https://kurdferga.net",
    image: "/certificates/kurdferga.png",
    starred: false,
    type: CertificateType.Kurdferga,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_1.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_2.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_3.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_1.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_2.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Ten Habits of Mentally Strong People (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/ten-habits-of-mentally-strong-people/make-mental-strength-a-habit",
    image: "/certificates/habits.png",
    starred: false,
    type: CertificateType.LinkedIn,
  },
  {
    title: "Notion 101: Organize your personal & work life with ease (Udemy)",
    url: "https://www.udemy.com/course/notion-masterclass/",
    image: "/certificates/notion.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title:
      "Full Stack Telegram Bot from Scratch(Python + PSQL + Heroku) (Udemy)",
    url: "https://www.udemy.com/course/full-stack-telegram-bot-from-scratch-python-psql-heroku/",
    image: "/certificates/telegram_bot.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title:
      "NLP Power: Boost Your Personal Development & Mental Clarity (Udemy)",
    url: "https://www.udemy.com/course/nlp-power-boost-your-personal-development-mental-clarity/",
    image: "/certificates/NLP.png",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title:
      "GitHub Copilot Beginner to Pro - AI for Coding & Development (Udemy)",
    url: "https://www.udemy.com/course/github-copilot/",
    image: "/certificates/github_copilot.png",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title:
      "GitHub Copilot Coding Agent: Build, Test, and Ship Code Fast (Udemy)",
    url: "https://www.udemy.com/course/github-copilot-coding-agent/",
    image: "/certificates/copilot_coding_agent.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title:
      "Shadcn UI & Next JS - Build beautiful dashboards with shadcn (Udemy)",
    url: "https://www.udemy.com/course/shadcn-ui/",
    image: "/certificates/shadcn.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "NextAuth v5 Credentials with Next App Router & TypeScript (Udemy)",
    url: "https://www.udemy.com/course/next-auth-js/",
    image: "/certificates/nextjs-nextauth.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "Build a Shopping App With Next.js + NestJS & Prisma (Udemy)",
    url: "https://www.udemy.com/course/build-a-shopping-app-with-nextjs-nestjs-prisma/",
    image: "/certificates/next_nest_prisma.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
  {
    title: "Tailwind CSS v4 - Beginner to Pro (Udemy)",
    url: "https://www.udemy.com/course/tailwind-css-zero-to-hero/",
    image: "/certificates/tailwind-pro.jpg",
    starred: true,
    type: CertificateType.Udemy,
  },
];

const certifications: Certification[] = data.map(
  (item, index) =>
    ({
      ...item,
      id: index + 1,
    }) as Certification
);

export default certifications;
