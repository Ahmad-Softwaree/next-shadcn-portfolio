"use client";

import { FileQuestion } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
export default function NoData() {
  const t = useTranslations();
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FileQuestion />
        </EmptyMedia>
        <EmptyTitle>{t("common.no_data")}</EmptyTitle>
        <EmptyDescription>{t("common.no_data_found")}</EmptyDescription>
      </EmptyHeader>
    </Empty>
  );
}
