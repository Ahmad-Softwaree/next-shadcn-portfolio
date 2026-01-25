import { ProjectQueryParams } from "@/hooks/useProjectQueries";
import { projects } from "../data/projects";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { getTranslations } from "next-intl/server";
import { Locale } from "next-intl";

export const getHomeProjects = () => {
  const data = projects.filter((project) => project.showInHome);
  return data;
};

export const getProjectById = (id: number) => {
  const project = projects.find((p) => p.id === id);
  return project;
};

export const getProjectsPage = async (
  params: ProjectQueryParams,
  search: SearchQueryParams,
  locale: Locale
) => {
  let data = projects;
  let translations = await getTranslations({ locale, namespace: "projects" });
  if (search.search) {
    const searchLower = search.search.toLowerCase();
    data = data.filter((project) => {
      let projectTitle =
        `${translations(`${project.textKey}.title` as any)}`.toLowerCase();
      let projectDesc =
        `${translations(`${project.textKey}.description` as any)}`.toLowerCase();
      if (
        projectTitle.includes(searchLower) ||
        projectDesc.includes(searchLower)
      ) {
        return true;
      }
    });
  }

  if (params.project_types?.length) {
    data = data.filter((project) =>
      project.types!.some((type) => params.project_types!.includes(type))
    );
  }

  if (params.project_tags?.length) {
    data = data.filter((project) =>
      params.project_tags!.includes(project.tag!)
    );
  }

  if (params.starred_only === "true") {
    data = data.filter((project) => project.starred);
  }

  if (params.has_public_git === "true") {
    data = data.filter((project) =>
      Boolean(project.gits && project.gits.length > 0)
    );
  }

  if (params.has_live_url === "true") {
    data = data.filter(
      (project) => project.liveUrl && project.liveUrl.trim() !== ""
    );
  }

  if (params.has_api === "true") {
    data = data.filter(
      (project) => project.externalApi && project.externalApi.url.trim() !== ""
    );
  }

  return data;
};
