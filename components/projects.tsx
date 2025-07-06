"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { ExternalLink, FilterIcon, Github, Star } from "lucide-react";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
interface FilterState {
  types: (
    | "web"
    | "app"
    | "system"
    | "simple dashboard"
    | "complex dashboard"
    | "game"
  )[];
  tags: ("production" | "learning" | "university" | "down")[];
  starredOnly: boolean;
  techs: string[];
  hasPublicGit: boolean | null; // null = no filter, true/false = filter
  hasLiveUrl: boolean | null;
}

const allTypes = [
  "web",
  "app",
  "system",
  "simple dashboard",
  "complex dashboard",
  "game",
] as const;
const allTags = ["production", "learning", "university", "down"] as const;

interface GitRepo {
  name: string;
  url: string;
}

interface ProjectCardProps {
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
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  gits = [],
  tag,
  starred,
  types,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
          {title}
          {tag && (
            <Badge
              variant={
                tag == "down"
                  ? "destructive"
                  : tag == "production"
                  ? "default"
                  : "outline"
              }
              className="text-xs px-2 py-0.5 rounded-full"
            >
              {tag}
            </Badge>
          )}
          {starred && <Star className="ml-2 h-5 w-5 text-yellow-400" />}
        </h3>

        {/* Types badges below the title line */}
        {types && types.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {types.map((type) => (
              <Badge
                key={type}
                variant="outline"
                className="text-xs px-2 py-0.5 rounded-full"
              >
                {type}
              </Badge>
            ))}
          </div>
        )}

        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto flex-wrap">
          {/* Live URL button */}
          {liveUrl && tag != "down" ? (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live
              </a>
            </Button>
          ) : (
            <Button
              variant="default"
              className="rounded-full cursor-not-allowed opacity-50"
              disabled
            >
              Private Project
            </Button>
          )}

          {/* GitHub URLs buttons */}
          {gits.length > 0 ? (
            gits.map(({ url, name }, i) => (
              <Button
                key={i}
                variant="outline"
                className="rounded-full shadow-none"
                asChild
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  View {name} Code
                </a>
              </Button>
            ))
          ) : (
            <Button
              variant="outline"
              className="rounded-full shadow-none cursor-not-allowed opacity-50"
              disabled
            >
              Private Git
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Golden Paper",
      description:
        "A full-featured factory management system built with React.js and Nest.js. It includes inventory tracking, order management, production planning, and role-based access control for admin and staff.",
      image: "/projects/golden_paper.png",
      technologies: [
        "React",
        "Nest.js",
        "PostgreSQL",
        "Firebase",
        "TypeScript",
      ],
      liveUrl: "",
      gits: [],
      tag: "production",
      starred: true,
      types: ["system"],
    },
    {
      title: "Benabzar",
      description:
        "An online food delivery application developed using Express.js. Features include customer order placement, delivery status tracking, and admin dashboard for restaurant management.",
      image: "/projects/benabazar.png",
      technologies: ["Express.js", "MySQL", "Firebase", "JavaScript"],
      liveUrl: "",
      gits: [],
      tag: "production",
      starred: true,
      types: ["app", "system"],
    },
    {
      title: "Belt World System",
      description:
        "Storage and inventory management system designed for managing product entries, stock updates, and supplier tracking.",
      image: "/projects/beltworld.png",
      technologies: ["Express.js", "MySQL", "Firebase", "JavaScript"],
      liveUrl: "",
      gits: [],
      tag: "production",
      starred: true,
      types: ["system"],
    },
    {
      title: "IQ Booking App",
      description:
        "A hotel and resort booking platform with features like property listing, availability tracking, discounts, and online payment integration.",
      image: "/projects/iqbooking.png",
      technologies: ["Nest.js", "MySQL", "Firebase", "TypeScript"],
      liveUrl: "",
      gits: [],
      tag: "production",
      starred: true,
      types: ["system", "app"],
    },
    {
      title: "Bazian Solar",
      description:
        "Company website for a solar tech business. Includes service descriptions, contact info, and a modern UI/UX design for a professional look.",
      image: "/projects/bazian_solar.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MySQL",
        "Firebase",
        "TypeScript",
        "React Query",
        "Vite",
      ],
      tag: "production",
      starred: true,
      liveUrl: "https://baziansolar.com/",
      gits: [],
      types: ["web", "simple dashboard"],
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
    },
    {
      title: "Janan Group",
      description:
        "Product showcase website for a Kurdish notebook brand with product listings, contact form, and ordering via social media.",
      image: "/projects/janan.png",
      technologies: [
        "Vue.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "JavaScript",
      ],
      liveUrl: "https://janan-group.com/",
      gits: [],
      tag: "down",
      types: ["web"],
    },
    {
      title: "Kurdferga",
      description:
        "An academic resource platform for Kurdish students. Includes course content, to-do list, timers, and a pro subscription tier.",
      image: "/projects/kurdferga.png",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Redux",
        "React Query",
        "Vite",
        "Chakra UI",
      ],
      liveUrl: "https://kurdferga.net",
      gits: [],
      tag: "down",
      types: ["web"],
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
    },
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
      types: ["complex dashboard"],
    },
    {
      title: "GCommerce",
      description:
        "A robust e-commerce application developed using React and Laravel. It offers a secure, feature-rich shopping experience and admin control.",
      image: "/projects/gcommerce.png",
      technologies: ["React", "JavaScript", "React Query"],
      gits: [],
      tag: "learning",
      types: ["complex dashboard", "app", "web"],
    },
  ];
  const [sheetOpen, setSheetOpen] = useState(false);

  const allTechs = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.technologies.forEach((t) => techSet.add(t)));
    return Array.from(techSet).sort();
  }, [projects]);

  const [filters, setFilters] = useState<FilterState>({
    types: [],
    tags: [],
    starredOnly: false,
    techs: [],
    hasPublicGit: null,
    hasLiveUrl: null,
  });

  // Filtering logic
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Filter by types if selected
      if (filters.types.length > 0) {
        if (!p.types || !p.types.some((t) => filters.types.includes(t)))
          return false;
      }
      // Filter by tags if selected
      if (filters.tags.length > 0 && (!p.tag || !filters.tags.includes(p.tag)))
        return false;

      // Filter starred
      if (filters.starredOnly && !p.starred) return false;

      // Filter technologies: all selected techs must be present in project techs
      if (filters.techs.length > 0) {
        if (!filters.techs.every((tech) => p.technologies.includes(tech)))
          return false;
      }

      // Filter public git
      if (filters.hasPublicGit !== null) {
        const hasGit = p.gits && p.gits.length > 0;
        if (filters.hasPublicGit !== hasGit) return false;
      }

      // Filter live URL
      if (filters.hasLiveUrl !== null) {
        const hasUrl = Boolean(p.liveUrl && p.liveUrl.trim() !== "");
        if (filters.hasLiveUrl !== hasUrl) return false;
      }

      return true;
    });
  }, [filters, projects]);
  const isFilterActive = useMemo(() => {
    return (
      filters.starredOnly ||
      filters.types.length > 0 ||
      filters.tags.length > 0 ||
      filters.techs.length > 0 ||
      filters.hasPublicGit !== null ||
      filters.hasLiveUrl !== null
    );
  }, [filters]);
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8 flex flex-col items-center gap-4">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl">
            Showcasing some of my best projects and technical achievements
          </p>

          <div className="flex items-center justify-center gap-2 mt-4">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="relative flex items-center gap-2"
                >
                  <FilterIcon className="h-5 w-5" />
                  Filters
                  {isFilterActive && (
                    <Badge
                      className="h-3 w-3 rounded-full px-1 font-mono tabular-nums absolute -top-1 -right-1 inline-flex"
                      variant="destructive"
                    />
                  )}
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="overflow-auto">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Adjust project filters below
                  </SheetDescription>
                </SheetHeader>

                <div className="space-y-6 mt-4 flex flex-col justify-center items-center">
                  <div className="flex items-center gap-3 mx-auto">
                    <Checkbox
                      id="filter-starred"
                      checked={filters.starredOnly}
                      onCheckedChange={(checked) =>
                        setFilters((f) => ({ ...f, starredOnly: !!checked }))
                      }
                    />
                    <Label htmlFor="filter-starred">Starred Only</Label>
                  </div>
                  <Separator />
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            filters.hasPublicGit === null
                              ? "outline"
                              : "default"
                          }
                        >
                          Public Git:{" "}
                          {filters.hasPublicGit === null
                            ? "All"
                            : filters.hasPublicGit
                            ? "Yes"
                            : "No"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: null }))
                            }
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: true }))
                            }
                          >
                            Yes
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasPublicGit: false }))
                            }
                          >
                            No
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={
                            filters.hasLiveUrl === null ? "outline" : "default"
                          }
                        >
                          Has Live URL:{" "}
                          {filters.hasLiveUrl === null
                            ? "All"
                            : filters.hasLiveUrl
                            ? "Yes"
                            : "No"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-40 p-2">
                        <div className="flex flex-col space-y-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: null }))
                            }
                          >
                            All
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: true }))
                            }
                          >
                            Yes
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                              setFilters((f) => ({ ...f, hasLiveUrl: false }))
                            }
                          >
                            No
                          </Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">
                      Project Types
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTypes.map((type) => {
                        const isSelected = filters.types.includes(type);
                        return (
                          <Button
                            key={type}
                            variant={isSelected ? "default" : "outline"}
                            onClick={() =>
                              setFilters((f) => {
                                const newTypes = isSelected
                                  ? f.types.filter((t) => t !== type)
                                  : [...f.types, type];
                                return { ...f, types: newTypes };
                              })
                            }
                            size="sm"
                            className="rounded-full"
                          >
                            {type}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="mb-1 font-semibold text-center">Tags</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTags.map((tag) => {
                        const isSelected = filters.tags.includes(tag);
                        return (
                          <Button
                            key={tag}
                            variant={isSelected ? "default" : "outline"}
                            onClick={() =>
                              setFilters((f) => {
                                const newTags = isSelected
                                  ? f.tags.filter((t) => t !== tag)
                                  : [...f.tags, tag];
                                return { ...f, tags: newTags };
                              })
                            }
                            size="sm"
                            className="rounded-full"
                          >
                            {tag}
                          </Button>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  <div className="max-w-md mx-auto">
                    <p className="mb-1 font-semibold text-center">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {allTechs.map((tech) => {
                        const isSelected = filters.techs.includes(tech);
                        return (
                          <Button
                            key={tech}
                            variant={isSelected ? "default" : "outline"}
                            size="sm"
                            className="rounded-full"
                            onClick={() =>
                              setFilters((f) => {
                                const newTechs = isSelected
                                  ? f.techs.filter((t) => t !== tech)
                                  : [...f.techs, tech];
                                return { ...f, techs: newTechs };
                              })
                            }
                          >
                            {tech}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                  <Separator />

                  <div className="mt-6 flex gap-5 justify-between">
                    <SheetClose asChild>
                      <Button variant="default" className="w-full">
                        Close Filters
                      </Button>
                    </SheetClose>
                    <Button
                      variant="outline"
                      onClick={() =>
                        setFilters({
                          types: [],
                          tags: [],
                          starredOnly: false,
                          techs: [],
                          hasPublicGit: null,
                          hasLiveUrl: null,
                        })
                      }
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            {isFilterActive && (
              <Button
                variant="outline"
                onClick={() =>
                  setFilters({
                    types: [],
                    tags: [],
                    starredOnly: false,
                    techs: [],
                    hasPublicGit: null,
                    hasLiveUrl: null,
                  })
                }
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-8">
            No projects found matching filters.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;
