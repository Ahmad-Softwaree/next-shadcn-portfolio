import React from "react";
import { StaggerContainer, StaggerItem } from "../shared/animate";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { usePathname } from "@/i18n/navigation";
import { Certification } from "@/lib/data/certifications";
import { useCertificationQueries } from "@/hooks/useCertificationQueries";
import CertificationCard from "../cards/certification-card";

const CertificationsGrid = ({ data }: { data: Certification[] }) => {
  let pathname = usePathname();
  let isProjectsPage = pathname === "/certifications";
  const [certificationQueries] = useCertificationQueries();
  const [searchQuery] = useSearchQuery();
  const gridKey = React.useMemo(
    () =>
      `${Object.values(certificationQueries).join("-")}-${searchQuery.search || "all"}`,
    [certificationQueries, searchQuery.search]
  );

  if (isProjectsPage) {
    return (
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((certification) => (
          <StaggerItem key={certification.id}>
            <CertificationCard {...certification} />
          </StaggerItem>
        ))}
      </div>
    );
  }
  return (
    <StaggerContainer
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      key={gridKey}>
      {data.slice(0, 6).map((certification) => (
        <StaggerItem key={certification.id}>
          <CertificationCard {...certification} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default CertificationsGrid;
