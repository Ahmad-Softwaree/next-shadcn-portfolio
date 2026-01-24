import CertificationsContent from "@/components/certifications/CertificationsContent";
import { CertificationQueryParams } from "@/hooks/useCertificationQueries";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { getCertificationsPage } from "@/lib/fetch/certification.action";
import { getTranslations } from "next-intl/server";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<CertificationQueryParams & SearchQueryParams>;
}) {
  const params = await searchParams;
  const t = await getTranslations("certifications");
  const data = getCertificationsPage(params, params);
  return <CertificationsContent data={data} />;
}
