export type Certificate = {
  id: number;
  title: string;
  url: string;
  image: string;
  starred: boolean;
  type: CertificateType;
};
export type CertificateType =
  | "udemy"
  | "netninja"
  | "linkedin"
  | "salahadin"
  | "kurdferga";

export const allTypes = [
  "udemy",
  "netninja",
  "linkedin",
  "salahadin",
  "kurdferga",
] as const;

const data: Partial<Certificate>[] = [
  {
    title: "Modern Javascript Course (Udemy)",
    url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    image: "/certificates/js.jpg",
    starred: true,
    type: "udemy",
  },
  {
    title: "Full-stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    image: "/certificates/web.jpg",
    starred: true,
    type: "udemy",
  },
  {
    title: "MERN Stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/mern-stack-front-to-back/",
    image: "/certificates/mern.jpg",
    starred: true,
    type: "udemy",
  },
  {
    title: "Mongodb (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1714198",
    image: "/certificates/mongo.png",
    starred: false,
    type: "netninja",
  },
  {
    title: "React Router (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1966403",
    image: "/certificates/react-router.png",
    starred: false,
    type: "netninja",
  },
  {
    title: "React & Typescript (Udemy)",
    url: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    image: "/certificates/Typescript.jpg",
    starred: false,
    type: "udemy",
  },
  {
    title: "Certificate Of Appreciation (Salahadin University)",
    url: "https://su.edu.krd/",
    image: "/certificates/software.png",
    starred: true,
    type: "salahadin",
  },
  {
    title: "Certificate Of Appreciation (Kurdferga)",
    url: "https://kurdferga.net",
    image: "/certificates/kurdferga.png",
    starred: false,
    type: "kurdferga",
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_1.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_2.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_3.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_1.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_2.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Ten Habits of Mentally Strong People (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/ten-habits-of-mentally-strong-people/make-mental-strength-a-habit",
    image: "/certificates/habits.png",
    starred: false,
    type: "linkedin",
  },
  {
    title: "Notion 101: Organize your personal & work life with ease (Udemy) ",
    url: "https://www.udemy.com/course/notion-masterclass/",
    image: "/certificates/notion.png",
    starred: true,
    type: "udemy",
  },
];

const certificates: Certificate[] = data.map(
  (item, index) =>
    ({
      ...item,
      id: index + 1,
    }) as Certificate
);

export default certificates;
