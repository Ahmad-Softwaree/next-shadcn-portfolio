export type Certificate = {
  id: number;
  title: string;
  url: string;
  image: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Modern Javascript Course",

    url: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
    image: "/certificates/js.jpg",
  },
  {
    id: 2,
    title: "Full-stack Web Development",

    url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
    image: "/certificates/web.jpg",
  },
  {
    id: 3,
    title: "MERN Stack Web Development",

    url: "https://www.udemy.com/course/mern-stack-front-to-back/",
    image: "/certificates/mern.jpg",
  },
  {
    id: 4,
    title: "Mongodb",

    url: "https://netninja.dev/courses/enrolled/1714198",
    image: "/certificates/mongo.png",
  },
  {
    id: 5,
    title: "React Router",

    url: "https://netninja.dev/courses/enrolled/1966403",
    image: "/certificates/react-router.png",
  },
  {
    id: 6,
    title: "React & Typescript",

    url: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    image: "/certificates/Typescript.jpg",
  },
  {
    id: 7,
    title: "Certificate Of Appreciation",
    url: " ",
    image: "/certificates/software.png",
  },
  {
    id: 8,
    title: "Kurdferga Certificate Of Appreciation",
    url: "https://kurdferga.net",
    image: "/certificates/kurdferga.png",
  },
];
