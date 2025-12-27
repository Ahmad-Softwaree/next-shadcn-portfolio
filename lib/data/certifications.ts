export type Certificate = {
  id: number;
  title: string;
  url: string;
  image: string;
  starred: boolean;
};

const data: Partial<Certificate>[] = [
  {
    title: "Modern Javascript Course (Udemy)",
    url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    image: "/certificates/js.jpg",
    starred: true,
  },
  {
    title: "Full-stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    image: "/certificates/web.jpg",
    starred: true,
  },
  {
    title: "MERN Stack Web Development (Udemy)",
    url: "https://www.udemy.com/course/mern-stack-front-to-back/",
    image: "/certificates/mern.jpg",
    starred: true,
  },
  {
    title: "Mongodb (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1714198",
    image: "/certificates/mongo.png",
    starred: false,
  },
  {
    title: "React Router (Net Ninja)",
    url: "https://netninja.dev/courses/enrolled/1966403",
    image: "/certificates/react-router.png",
    starred: false,
  },
  {
    title: "React & Typescript (Udemy)",
    url: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    image: "/certificates/Typescript.jpg",
    starred: false,
  },
  {
    title: "Certificate Of Appreciation (Salahadin University)",
    url: "https://su.edu.krd/",
    image: "/certificates/software.png",
    starred: true,
  },
  {
    title: "Certificate Of Appreciation (Kurdferga)",
    url: "https://kurdferga.net",
    image: "/certificates/kurdferga.png",
    starred: false,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_1.png",
    starred: false,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_2.png",
    starred: false,
  },
  {
    title: "Agile Foundations (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/agile-foundations/understanding-agile-21059664",
    image: "/certificates/agile_3.png",
    starred: false,
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_1.png",
    starred: false,
  },
  {
    title: "Project Leadership (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/project-leadership/the-importance-of-project-leadership",
    image: "/certificates/project_management_2.png",
    starred: false,
  },
  {
    title: "Ten Habits of Mentally Strong People (LinkedIn Learning)",
    url: "https://www.linkedin.com/learning/ten-habits-of-mentally-strong-people/make-mental-strength-a-habit",
    image: "/certificates/habits.png",
    starred: false,
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
