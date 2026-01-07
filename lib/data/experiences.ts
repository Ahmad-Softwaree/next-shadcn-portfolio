import { Technology } from "@/lib/data/projects";

export type Experience = {
  id: number;
  titleKey: string;
  companyKey: string;
  periodKey: string;
  descriptionKey: string;
  technologies: Technology[];
};

const data: Partial<Experience>[] = [
  {
    titleKey: "experience.bester_group.title",
    companyKey: "experience.bester_group.company",
    periodKey: "experience.bester_group.period",
    descriptionKey: "experience.bester_group.description",
    technologies: [
      "React",
      "Next.js",
      "Express.js",
      "Nest.js",
      "Typescript",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    titleKey: "experience.ap_soft.title",
    companyKey: "experience.ap_soft.company",
    periodKey: "experience.ap_soft.period",
    descriptionKey: "experience.ap_soft.description",
    technologies: [
      "React",
      "Next.js",
      "Nest.js",
      "Typescript",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    titleKey: "experience.avana_soft.title",
    companyKey: "experience.avana_soft.company",
    periodKey: "experience.avana_soft.period",
    descriptionKey: "experience.avana_soft.description",
    technologies: ["Nest.js", "Typescript", "MySQL", "Express.js"],
  },
  {
    titleKey: "experience.kitn_company.title",
    companyKey: "experience.kitn_company.company",
    periodKey: "experience.kitn_company.period",
    descriptionKey: "experience.kitn_company.description",
    technologies: ["React", "Next.js", "Typescript", "TailwindCSS"],
  },
];

const experiences: Experience[] = data.map(
  (item, index) =>
    ({
      id: index,
      titleKey: item.titleKey,
      companyKey: item.companyKey,
      periodKey: item.periodKey,
      descriptionKey: item.descriptionKey,
      technologies: item.technologies,
    }) as Experience
);

export default experiences;
