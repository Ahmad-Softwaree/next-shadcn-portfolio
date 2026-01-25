import ProjectsContent from "@/components/projects/ProjectsContent";
import { ProjectQueryParams } from "@/hooks/useProjectQueries";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { getProjectsPage } from "@/lib/fetch/projects.action";
import { Locale } from "next-intl";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<ProjectQueryParams & SearchQueryParams>;
}) {
  const queries = await searchParams;
  const locale = (await params).locale;
  const data = await getProjectsPage(queries, queries, locale as Locale);
  return <ProjectsContent data={data} />;
}
