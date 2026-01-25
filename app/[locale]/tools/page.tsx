import ToolsContent from "@/components/tools/ToolsContent";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { ToolsQueryParams } from "@/hooks/useToolsQueries";
import { getToolsPage } from "@/lib/fetch/tools.action";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;

  searchParams: Promise<ToolsQueryParams & SearchQueryParams>;
}) {
  const queries = await searchParams;
  const locale = (await params).locale;
  const data = await getToolsPage(queries, queries, locale as Locale);
  return <ToolsContent data={data} />;
}
