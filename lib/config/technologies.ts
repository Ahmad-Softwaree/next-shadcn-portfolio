import { allTechs, Technology } from "@/lib/data/projects";

export type TechnologyConfig = {
  name: Technology;
  displayName: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

// Centralized technology configuration with consistent colors across the app
export const technologyConfig: Record<Technology, TechnologyConfig> = {
  "Next Auth": {
    name: "Next Auth",
    displayName: "Next Auth",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  "2FA": {
    name: "2FA",
    displayName: "2FA",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
  },
  MySQL: {
    name: "MySQL",
    displayName: "MySQL",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    displayName: "PostgreSQL",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-600/10 dark:bg-blue-600/20",
    borderColor: "border-blue-600/30",
  },
  MongoDB: {
    name: "MongoDB",
    displayName: "MongoDB",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    borderColor: "border-green-500/30",
  },
  SQLite: {
    name: "SQLite",
    displayName: "SQLite",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10 dark:bg-sky-500/20",
    borderColor: "border-sky-500/30",
  },
  Firebase: {
    name: "Firebase",
    displayName: "Firebase",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    borderColor: "border-orange-500/30",
  },
  React: {
    name: "React",
    displayName: "React",
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
  "Next.js": {
    name: "Next.js",
    displayName: "Next.js",
    color: "text-gray-900 dark:text-gray-100",
    bgColor: "bg-gray-500/10 dark:bg-gray-500/20",
    borderColor: "border-gray-500/30",
  },
  "Nest.js": {
    name: "Nest.js",
    displayName: "Nest.js",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    borderColor: "border-red-500/30",
  },
  Typescript: {
    name: "Typescript",
    displayName: "TypeScript",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  Prisma: {
    name: "Prisma",
    displayName: "Prisma",
    color: "text-indigo-600 dark:text-indigo-400",
    bgColor: "bg-indigo-500/10 dark:bg-indigo-500/20",
    borderColor: "border-indigo-500/30",
  },
  Javascript: {
    name: "Javascript",
    displayName: "JavaScript",
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-500/10 dark:bg-yellow-500/20",
    borderColor: "border-yellow-500/30",
  },
  "Express.js": {
    name: "Express.js",
    displayName: "Express.js",
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-500/10 dark:bg-gray-500/20",
    borderColor: "border-gray-500/30",
  },
  "Knex.js": {
    name: "Knex.js",
    displayName: "Knex.js",
    color: "text-orange-700 dark:text-orange-300",
    bgColor: "bg-orange-600/10 dark:bg-orange-600/20",
    borderColor: "border-orange-600/30",
  },
  TailwindCSS: {
    name: "TailwindCSS",
    displayName: "Tailwind CSS",
    color: "text-teal-600 dark:text-teal-400",
    bgColor: "bg-teal-500/10 dark:bg-teal-500/20",
    borderColor: "border-teal-500/30",
  },
  "Shadcn UI": {
    name: "Shadcn UI",
    displayName: "shadcn/ui",
    color: "text-slate-900 dark:text-slate-100",
    bgColor: "bg-slate-500/10 dark:bg-slate-500/20",
    borderColor: "border-slate-500/30",
  },
  Zod: {
    name: "Zod",
    displayName: "Zod",
    color: "text-blue-700 dark:text-blue-300",
    bgColor: "bg-blue-600/10 dark:bg-blue-600/20",
    borderColor: "border-blue-600/30",
  },
  Zustand: {
    name: "Zustand",
    displayName: "Zustand",
    color: "text-amber-700 dark:text-amber-300",
    bgColor: "bg-amber-600/10 dark:bg-amber-600/20",
    borderColor: "border-amber-600/30",
  },
  "React Query": {
    name: "React Query",
    displayName: "React Query",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10 dark:bg-red-500/20",
    borderColor: "border-red-500/30",
  },
  Redux: {
    name: "Redux",
    displayName: "Redux",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  "Vue.js": {
    name: "Vue.js",
    displayName: "Vue.js",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  "GSAP Animation": {
    name: "GSAP Animation",
    displayName: "GSAP",
    color: "text-green-700 dark:text-green-300",
    bgColor: "bg-green-600/10 dark:bg-green-600/20",
    borderColor: "border-green-600/30",
  },
  "Socket.io": {
    name: "Socket.io",
    displayName: "Socket.io",
    color: "text-gray-900 dark:text-gray-100",
    bgColor: "bg-gray-500/10 dark:bg-gray-500/20",
    borderColor: "border-gray-500/30",
  },
  Unity: {
    name: "Unity",
    displayName: "Unity",
    color: "text-gray-800 dark:text-gray-200",
    bgColor: "bg-gray-600/10 dark:bg-gray-600/20",
    borderColor: "border-gray-600/30",
  },
  Jest: {
    name: "Jest",
    displayName: "Jest",
    color: "text-rose-600 dark:text-rose-400",
    bgColor: "bg-rose-500/10 dark:bg-rose-500/20",
    borderColor: "border-rose-500/30",
  },
  "C#": {
    name: "C#",
    displayName: "C#",
    color: "text-violet-600 dark:text-violet-400",
    bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
    borderColor: "border-violet-500/30",
  },
  Python: {
    name: "Python",
    displayName: "Python",
    color: "text-blue-500 dark:text-blue-300",
    bgColor: "bg-blue-400/10 dark:bg-blue-400/20",
    borderColor: "border-blue-400/30",
  },
  "Telegram API": {
    name: "Telegram API",
    displayName: "Telegram API",
    color: "text-sky-600 dark:text-sky-400",
    bgColor: "bg-sky-500/10 dark:bg-sky-500/20",
    borderColor: "border-sky-500/30",
  },
  UploadThings: {
    name: "UploadThings",
    displayName: "UploadThing",
    color: "text-pink-600 dark:text-pink-400",
    bgColor: "bg-pink-500/10 dark:bg-pink-500/20",
    borderColor: "border-pink-500/30",
  },
  Clerk: {
    name: "Clerk",
    displayName: "Clerk",
    color: "text-indigo-700 dark:text-indigo-300",
    bgColor: "bg-indigo-600/10 dark:bg-indigo-600/20",
    borderColor: "border-indigo-600/30",
  },
  Neon: {
    name: "Neon",
    displayName: "Neon",
    color: "text-emerald-600 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
    borderColor: "border-emerald-500/30",
  },
  OpenAI: {
    name: "OpenAI",
    displayName: "OpenAI",
    color: "text-yellow-700 dark:text-yellow-300",
    bgColor: "bg-yellow-600/10 dark:bg-yellow-600/20",
    borderColor: "border-yellow-600/30",
  },
  Ollama: {
    name: "Ollama",
    displayName: "Ollama",
    color: "text-gray-800 dark:text-gray-200",
    bgColor: "bg-gray-600/10 dark:bg-gray-600/20",
    borderColor: "border-gray-600/30",
  },
};

// Helper function to get technology config
export const getTechConfig = (tech: Technology): TechnologyConfig => {
  return technologyConfig[tech];
};

// Helper function to get all technologies as array
export const getAllTechConfigs = (): TechnologyConfig[] => {
  return allTechs.map((tech) => technologyConfig[tech]);
};
