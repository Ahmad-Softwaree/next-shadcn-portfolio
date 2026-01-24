import React from "react";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { CertificateType } from "@/lib/data/certifications";
import { useCertificationQueries } from "@/hooks/useCertificationQueries";
import { getCertificateTypeConfig } from "@/lib/config/certification-filters";

const CertificationTypeBtn = ({ type }: { type: CertificateType }) => {
  const t = useTranslations("certifications");
  const [{ certification_types }, setCertificationQueries] =
    useCertificationQueries();
  const config = getCertificateTypeConfig(type);

  return (
    <Button
      data-selected={certification_types?.includes(type) ? "true" : "false"}
      onClick={() =>
        setCertificationQueries({
          certification_types: certification_types?.includes(type)
            ? certification_types.filter((t) => t !== type)
            : [...(certification_types || []), type],
        })
      }
      size="sm"
      variant="outline"
      className={cn(
        "w-fit rounded-full border transition-all duration-200",
        config.bgColor,
        config.color,
        config.borderColor
      )}>
      {t(`types.${type}` as any)}
    </Button>
  );
};

export default CertificationTypeBtn;
