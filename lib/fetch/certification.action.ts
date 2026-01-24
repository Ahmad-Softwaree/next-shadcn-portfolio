import { SearchQueryParams } from "@/hooks/useSearchQuery";
import certifications from "../data/certifications";
import { CertificationQueryParams } from "@/hooks/useCertificationQueries";

export const getHomeCertifications = () => {
  const data = certifications;
  return data;
};

export const getCertificationById = (id: number) => {
  const certification = certifications.find((p) => p.id === id);
  return certification;
};

export const getCertificationsPage = (
  params: CertificationQueryParams,
  search: SearchQueryParams
) => {
  let data = certifications;
  if (search.search) {
    const searchLower = search.search.toLowerCase();
    data = data.filter((certification) => {
      if (certification.title.toLocaleLowerCase().includes(searchLower)) {
        return true;
      }
    });
  }

  if (params.certification_types?.length) {
    data = data.filter(
      (certification) =>
        certification.type &&
        params.certification_types!.includes(certification.type)
    );
  }

  if (params.starred_only === "true") {
    data = data.filter((certification) => certification.starred);
  }

  return data;
};
