import { CertificateType } from "@/lib/data/certifications";

export type CertificateFilterColorConfig = {
  color: string;
  bgColor: string;
  borderColor: string;
};

// Color configuration for certification types (platform-based)
export const certificateTypeColors: Record<
  CertificateType,
  CertificateFilterColorConfig
> = {
  udemy: {
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    borderColor: "border-purple-500/30",
  },
  netninja: {
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    borderColor: "border-orange-500/30",
  },
  linkedin: {
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    borderColor: "border-blue-500/30",
  },
  salahadin: {
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10 dark:bg-green-500/20",
    borderColor: "border-green-500/30",
  },
  kurdferga: {
    color: "text-cyan-600 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    borderColor: "border-cyan-500/30",
  },
};

export const getCertificateTypeConfig = (
  type: CertificateType
): CertificateFilterColorConfig => {
  return certificateTypeColors[type];
};
