import ProjectsContent from "@/components/projects/ProjectsContent";
import { ProjectQueryParams } from "@/hooks/useProjectQueries";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { getProjectsPage } from "@/lib/fetch/projects.action";
import { getTranslations } from "next-intl/server";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<ProjectQueryParams & SearchQueryParams>;
}) {
  const params = await searchParams;
  const t = await getTranslations("projects");
  const data = getProjectsPage(params, params, t);
  return <ProjectsContent data={data} />;
}
