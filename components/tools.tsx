"use client";

import { Badge } from "@/components/ui/badge";
import { tools } from "@/lib/data/tools";
import SpecialToolCard from "./cards/special-tool-card";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/shared/animate";
import { useTranslation } from "react-i18next";

const ToolsPreview = () => {
  const { t } = useTranslation();
  const topTools = tools.filter((tool) => tool.showInHome);

  return (
    <AnimateOnScroll animation="fade-up">
      <section id="tools" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center gap-4">
            <Badge variant="secondary" className="mb-4 text-base px-6 py-2">
              {t("navbar.tools")}
            </Badge>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
              {t("tools.title")}
            </h2>
            <p className="text-muted-foreground mt-2 sm:mt-4 text-xl max-w-2xl">
              {t("tools.subtitle")}
            </p>
          </div>

          {/* Tools - Special Layout */}
          <div className="space-y-12">
            {topTools.map((tool, index) => (
              <SpecialToolCard key={tool.id} {...tool} index={index} />
            ))}
          </div>

          {/* See All Tools Link */}
          <div className="flex justify-center mt-16">
            <Link href="/tools">
              <Badge
                className="text-base px-6 py-3 rounded-full cursor-pointer transition-all hover:scale-105"
                variant="outline">
                {t("common.see_all_tools")}
              </Badge>
            </Link>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default ToolsPreview;
