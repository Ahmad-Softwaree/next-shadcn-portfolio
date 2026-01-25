import CertificationsContent from "@/components/certifications/CertificationsContent";
import { CertificationQueryParams } from "@/hooks/useCertificationQueries";
import { SearchQueryParams } from "@/hooks/useSearchQuery";
import { getCertificationsPage } from "@/lib/fetch/certification.action";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<CertificationQueryParams & SearchQueryParams>;
}) {
  const params = await searchParams;
  const data = getCertificationsPage(params, params);
  return <CertificationsContent data={data} />;
}
