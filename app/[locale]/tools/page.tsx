import ToolsContent from "@/components/tools/ToolsContent";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { ToolsQueryParams } from "@/hooks/useToolsQueries";
import { getToolsPage } from "@/lib/fetch/tools.action";
import { getTranslations } from "next-intl/server";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<ToolsQueryParams & SearchQueryParams>;
}) {
  const params = await searchParams;
  const t = await getTranslations("tools");
  const data = getToolsPage(params, params, t);
  return <ToolsContent data={data} />;
}
