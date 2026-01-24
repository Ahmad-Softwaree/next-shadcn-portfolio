import { ProjectTech } from "./projects";

export type Experience = {
  id: number;
  textKey: string;
  technologies: ProjectTech[];
};

const data: Partial<Experience>[] = [
  {
    textKey: "bester_group",
    technologies: [
      ProjectTech.React,
      ProjectTech.NextJs,
      ProjectTech.ExpressJs,
      ProjectTech.NestJs,
      ProjectTech.Typescript,
      ProjectTech.MySQL,
      ProjectTech.MongoDB,
      ProjectTech.PostgreSQL,
    ],
  },
  {
    textKey: "ap_soft",
    technologies: [
      ProjectTech.React,
      ProjectTech.NextJs,
      ProjectTech.NestJs,
      ProjectTech.Typescript,
      ProjectTech.MySQL,
      ProjectTech.MongoDB,
      ProjectTech.PostgreSQL,
    ],
  },
  {
    textKey: "avana_soft",
    technologies: [
      ProjectTech.NestJs,
      ProjectTech.Typescript,
      ProjectTech.MySQL,
      ProjectTech.ExpressJs,
    ],
  },
  {
    textKey: "kitn_company",
    technologies: [
      ProjectTech.React,
      ProjectTech.NextJs,
      ProjectTech.Typescript,
      ProjectTech.TailwindCSS,
    ],
  },
];

const experiences: Experience[] = data.map(
  (item, index) =>
    ({
      id: index,
      textKey: item.textKey,
      technologies: item.technologies,
    }) as Experience
);

export default experiences;
